'use client';

import { removeImage, updateImages } from '@/actions/profile/update-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { compressImage } from '@/lib/image-compress';
import { useUploadThing } from '@/lib/uploadthing';
import { isBase64Image } from '@/lib/utils';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfile } from '@prisma/client';
import { Loader2, Plus } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC, useRef, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

interface PhotosCarouselProps {
  profile: UserProfile;
}

const PhotosCarousel: FC<PhotosCarouselProps> = ({ profile }) => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const [isPending, startTransition] = useTransition();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { startUpload } = useUploadThing('imageUploader');

  const { setValue } = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      profile_image: '',
    },
  });

  const onSubmit = async (values: any) => {
    const blob = values;

    const hasImageChanged = isBase64Image(blob!);

    if (hasImageChanged) {
      try {
        const imgRes = await startUpload(files);
        console.log(imgRes && imgRes[0].url);

        if (imgRes && imgRes[0].url) {
          values = imgRes[0].url;

          // Call createProfile only after the image is uploaded successfully
          startTransition(() => {
            updateImages(values)
              .then((data) => {
                if (data?.error) {
                  setError(data.error);
                  console.log(data.error);
                }

                if (data?.success) {
                  setSuccess(data.success);
                  toast(data.success);
                  router.refresh();

                  setPreviewImage('');
                }
              })
              .catch(() => setError('Something went wrong!'));
          });
        }
      } catch (error) {
        setError('Error uploading image');
        console.error('Error uploading image:', error);
      } finally {
      }
    }
  };

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      try {
        const compressedFile = await compressImage(file);
        setFiles([compressedFile]);

        const fileReader = new FileReader();

        fileReader.onload = (event) => {
          const imageDataUrl = event.target?.result?.toString() || '';
          setImage(imageDataUrl);
          setPreviewImage(imageDataUrl);
        };

        fileReader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const handleProfileImage = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes('image')) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';

        // Set profile image URL
        setValue('profile_image', imageDataUrl);

        // Set preview image
        setPreviewImage(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = async (index: number, id: string) => {
    try {
      // const res = await utapi.deleteFiles(id);
      // console.log(res);
      startTransition(() => {
        removeImage(index)
          .then((data) => {
            if (data?.error) {
              setError(data.error);
              console.log(data.error);
            }

            if (data?.success) {
              setSuccess(data.success);
              toast(data.success);
              router.refresh();
            }
          })
          .catch(() => setError('Something went wrong!'));
      });
    } catch (error) {
      setError('Error deleting image');
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className='container p-5 -mt-16 shadow-md rounded-md'>
      <div className='justify-between p-5'>
        <div className='flex justify-between'>
          <span className='text-2xl'>Photos</span>
        </div>
        <div className='flex gap-5 mt-4 '>
          {profile.images?.map((image, index) => (
            <Card key={image} className='w-56 h-56 relative'>
              <CardContent
                className='flex aspect-square items-center justify-center'
                onMouseEnter={() => setHoveredIndex(index - 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className='relative'>
                  {hoveredIndex === index - 1 && (
                    <>
                      <div className='absolute top-0 right-0 m-2'>
                        <button
                          onClick={() => handleDeletePhoto(index, image)}
                          className='flex items-center bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
                        >
                          {isPending && (
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                          )}
                          Delete
                        </button>
                      </div>
                      <div className='absolute bottom-0 left-1 m-2'>
                        <button
                          onClick={(e) => handleProfileImage(e)}
                          className='flex items-center bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600'
                        >
                          {isPending && (
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                          )}
                          Make Profile Picture
                        </button>
                      </div>
                    </>
                  )}
                  <Image
                    src={image || ''}
                    width={200}
                    height={200}
                    alt={`Picture  of the user`}
                    className='rounded-md mt-6'
                  />
                </div>
              </CardContent>
            </Card>
          ))}
          {profile.images.length < 5 && (
            <Card className='w-56 h-56 relative'>
              <CardContent
                className='flex aspect-square items-center justify-center'
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {previewImage ? (
                  <div className='relative'>
                    <Image
                      src={previewImage}
                      width={200}
                      height={200}
                      alt='Picture of the user'
                      className='mt-6 rounded-md opacity-60'
                    />
                    <div className='absolute bottom-0 right-0 m-2'>
                      <Button onClick={() => onSubmit(previewImage)}>
                        {isPending && (
                          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                        )}
                        Upload
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center'>
                    <input
                      type='file'
                      accept='image/*'
                      className='bg-slate-50 md:w-[180px]'
                      style={{ display: 'none' }} // Hide the input element
                      onChange={(e) => handleImage(e)}
                      ref={inputRef} // Assign a ref to the input element if needed
                    />
                    <span className='text-lg font-medium'>Add Photos</span>
                    <Plus
                      className='w-8 h-8 hover:cursor-pointer'
                      onClick={() => inputRef?.current?.click()}
                    />{' '}
                    {/* Trigger click on the hidden input */}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosCarousel;
