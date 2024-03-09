'use client';

import {
  removeProfilePhoto,
  updateProfilePhoto,
} from '@/actions/profile/update-profile';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { compressImage } from '@/lib/image-compress';
import { useUploadThing } from '@/lib/uploadthing';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserProfile } from '@prisma/client';
import { Loader2, MessageSquareMore, Phone, Plus } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FC, useRef, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

interface MainDetailsProps {
  profile: UserProfile | null;
}

const MainDetails: FC<MainDetailsProps> = ({ profile }) => {
  const router = useRouter();
  const { data: session, update } = useSession();

  const [isHovered, setIsHovered] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [isPending, startTransition] = useTransition();
  const [imageUploadLoading, setimageUploadLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const { startUpload } = useUploadThing('imageUploader');

  const { setValue } = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      profileImage: '',
    },
  });

  const onSubmit = async () => {
    try {
      setimageUploadLoading(true);
      const imgRes = await startUpload(files);
      console.log(imgRes && imgRes[0].url);

      if (imgRes && imgRes[0].url) {
        const values = imgRes[0].url || undefined; // Constructing object with profileImage field
        startTransition(() => {
          updateProfilePhoto(values)
            .then((data) => {
              if (data?.error) {
                setError(data.error);
                console.log(data.error);
              }

              if (data?.success) {
                setSuccess(data.success);
                toast(data.success);
                // Update session user information with the new profile image
                update({
                  ...session,
                  user: { ...session?.user, image: values },
                });
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
      setimageUploadLoading(false);
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
          setValue('profileImage', imageDataUrl);
          setPreviewImage(imageDataUrl);
        };

        fileReader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const handleDeletePhoto = () => {
    startTransition(async () => {
      try {
        removeProfilePhoto().then((data) => {
          if (data?.error) {
            setError(data.error);
            console.log(data.error);
          }

          if (data?.success) {
            setSuccess(data.success);
            toast(data.success);
            fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/images`);
            router.refresh();
          }
        });
      } catch (error) {
        console.error('Error deleting profile image:', error);
      }
    });
  };

  return (
    <div className="container p-5">
      <div className="flex justify-between items-center p-10">
        <div className="flex flex-row items-center relative gap-5">
          <Card className="w-56 h-56 relative -top-36 rounded-full">
            <>
              {profile?.profileImage ? (
                <CardContent
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="flex aspect-square items-center justify-center "
                >
                  <div className="relative">
                    <Image
                      src={profile.profileImage}
                      alt="Image"
                      width={200}
                      height={200}
                      className="mt-6 rounded-full"
                    />
                    {isHovered && (
                      <div className="absolute top-0 right-0 m-2">
                        <button
                          onClick={() => handleDeletePhoto()}
                          className="flex items-center bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          {isPending && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          )}
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </CardContent>
              ) : (
                <CardContent>
                  {previewImage ? (
                    <div className="relative">
                      <Image
                        src={previewImage}
                        width={200}
                        height={200}
                        alt="Picture of the user"
                        className="mt-6 rounded-md opacity-60"
                      />
                      <div className="absolute bottom-0 right-0 m-2">
                        <Button onClick={() => onSubmit()}>
                          {imageUploadLoading && (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          )}
                          Upload
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center my-auto">
                      <input
                        type="file"
                        accept="image/*"
                        className="bg-slate-50 md:w-[180px]"
                        style={{ display: 'none' }} // Hide the input element
                        onChange={(e) => handleImage(e)}
                        ref={inputRef} // Assign a ref to the input element if needed
                      />
                      <span className="text-lg font-medium">Add Photos</span>
                      <Plus
                        className="w-8 h-8 hover:cursor-pointer"
                        onClick={() => inputRef?.current?.click()}
                      />{' '}
                    </div>
                  )}
                </CardContent>
              )}
            </>
          </Card>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{profile?.name}</h1>
            <span>
              {profile?.age}, {profile?.height}
            </span>
            <span>
              {profile?.religion}, {profile?.caste}
            </span>
            <span>
              {profile?.city}, {profile?.state}, {profile?.country}
            </span>
            <span>{profile?.education}</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex gap-5">
            <Phone /> 0729837800
          </span>
          <span className="flex gap-5">
            <MessageSquareMore /> Message
          </span>
          <Button variant="secondary" size="lg">
            Preview
          </Button>
          <span className="text-gray-400">
            How your profile looks to others
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
