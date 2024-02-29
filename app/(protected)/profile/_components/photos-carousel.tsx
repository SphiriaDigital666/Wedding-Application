'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React, { ChangeEvent, FC, useRef, useState, useTransition } from 'react';
import { Loader2, Plus } from 'lucide-react';
import { UserProfile } from '@prisma/client';
import { isBase64Image } from '@/lib/utils';
import { useUploadThing } from '@/lib/uploadthing';
import { removeImage, updateImages } from '@/actions/profile/update-images';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

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

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes('image')) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';
        setImage(imageDataUrl); // Setting the value here
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
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-10">
        <div className="flex justify-between">
          <span className="text-2xl">Photos</span>
        </div>
        <div className="flex gap-5 mt-4">
          {profile.images?.map((image, index) => (
            <Card key={image} className="w-full relative">
              <CardContent
                className="flex aspect-square items-center justify-center"
                onMouseEnter={() => setHoveredIndex(index - 1)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  {hoveredIndex === index - 1 && (
                    <div className="absolute top-0 right-0 m-2">
                      <button
                        onClick={() => handleDeletePhoto(index, image)}
                        className="flex items-center bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Delete
                      </button>
                    </div>
                  )}
                  <Image
                    src={image || ''}
                    width={200}
                    height={200}
                    alt={`Picture  of the user`}
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="w-full relative">
            <CardContent
              className="flex aspect-square items-center justify-center"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="">
                <input
                  type="file"
                  accept="image/*"
                  className="w-full bg-slate-50 md:w-[180px]"
                  style={{ display: 'none' }} // Hide the input element
                  onChange={(e) => handleImage(e)}
                  ref={inputRef} // Assign a ref to the input element if needed
                />
                <Plus onClick={() => inputRef?.current?.click()} />{' '}
                {/* Trigger click on the hidden input */}
              </div>
            </CardContent>
          </Card>
        </div>
        <Button className="mt-3" onClick={() => onSubmit(image)}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Upload
        </Button>
      </div>
    </div>
  );
};

export default PhotosCarousel;
