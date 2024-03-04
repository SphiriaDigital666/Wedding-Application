'use client';
import { createProfile } from '@/actions/profile/create-profile';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { heights, weight } from '@/constants';
import useProfileModal from '@/hooks/useProfileModal';
import { compressImage } from '@/lib/image-compress';
import { useUploadThing } from '@/lib/uploadthing';
import { isBase64Image } from '@/lib/utils';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useMemo, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Heading from '../Heading';
import Modal from './modal';

enum STEPS {
  BASIC_DETAILS = 0,
  IMAGES = 1,
  PREFERENCES = 2,
}

const ProfileModal = () => {
  const router = useRouter();
  const profileModal = useProfileModal();
  const [isPending, startTransition] = useTransition();

  const [step, setStep] = useState(STEPS.BASIC_DETAILS);
  const [files, setFiles] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState('');

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const { startUpload } = useUploadThing('imageUploader');

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      // bio: '',
      name: '',
      age: '18',
      gender: '',
      dob: '',
      language: '',
      height: '5',
      weight: '5',
      body_type: '',
      // physical_status: '',
      marital_status: '',
      // eating_habits: '',
      // drinking_habits: '',
      // smoking_habits: '',
      profile_image: '',
    },
  });

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
    console.log(values);
    if (step !== STEPS.PREFERENCES) return onNext();

    const blob = values.profile_image;

    const hasImageChanged = isBase64Image(blob!);

    if (hasImageChanged) {
      try {
        const imgRes = await startUpload(files);
        console.log(imgRes);

        if (imgRes && imgRes[0].url) {
          values.profile_image = imgRes[0].url;

          // Call createProfile only after the image is uploaded successfully
          startTransition(() => {
            createProfile(values)
              .then((data) => {
                if (data?.error) {
                  setError(data.error);
                  console.log(data.error);
                }

                if (data?.success) {
                  setSuccess(data.success);
                  profileModal.onClose();
                  router.push('/partner-preferences');
                }
              })
              .catch(() => setError('Something went wrong!'));
          });
        }
      } catch (error) {
        setError('Error uploading image');
        console.error('Error uploading image:', error);
      }
    } else {
      // If no image is uploaded or the image hasn't changed, proceed to create the profile without uploading
      startTransition(() => {
        createProfile(values)
          .then((data) => {
            if (data?.error) {
              setError(data.error);
              console.log(data.error);
            }

            if (data?.success) {
              setSuccess(data.success);
              profileModal.onClose();
              router.push('/profile');
            }
          })
          .catch(() => setError('Something went wrong!'));
      });
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
          setValue('profile_image', imageDataUrl);
          setPreviewImage(imageDataUrl);
        };

        fileReader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PREFERENCES) {
      return 'Add Preferences';
    }
    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.BASIC_DETAILS) {
      return undefined;
    }
    return 'Back';
  }, [step]);

  let bodyContent = (
    <div className='flex flex-col gap-8'>
      <Heading title='Basic details' subtitle='Provide the basic details' />
      <div className='flex flex-col gap-3 max-h-[50vh] overflow-y-auto'>
        <div className='flex gap-4'>
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='name'>Name</Label>
            <Input type='text' id='name' {...register('name')} />
            {errors.name && (
              <p className='text-destructive mt-1'>{errors.name.message}</p>
            )}
          </div>
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='age'>Age</Label>
            <Input type='string' id='age' {...register('age')} />
            {errors.age && (
              <p className='text-destructive mt-1'>{errors.age.message}</p>
            )}
          </div>
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='age'>DOB</Label>
            <Input type='date' id='dob' {...register('dob')} />
            {errors.dob && (
              <p className='text-destructive mt-1'>{errors.dob.message}</p>
            )}
          </div>
        </div>
        <div className='flex gap-4'>
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='gender'>Gender</Label>
            {/* <Input type="text" id="body_type" {...register('body_type')} /> */}
            <Select onValueChange={(event) => setValue('gender', event)}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select Gender' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='male'>Male</SelectItem>
                <SelectItem value='female'>Female</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className='text-destructive mt-1'>{errors.gender.message}</p>
            )}
          </div>
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='language'>Language</Label>
            <Input type='text' id='language' {...register('language')} />
            {errors.language && (
              <p className='text-destructive mt-1'>{errors.language.message}</p>
            )}
          </div>
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='marital_status'>Marital Status</Label>
            <Select
              onValueChange={(event) => setValue('marital_status', event)}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='never_married'>Never Married</SelectItem>
                <SelectItem value='widowed'>Widowed</SelectItem>
                <SelectItem value='divorced'>Divorced</SelectItem>
                <SelectItem value='awaiting_divorce'>
                  Awaiting Divorce
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.marital_status && (
              <p className='text-destructive mt-1'>
                {errors.marital_status.message}
              </p>
            )}
          </div>
        </div>
        <div className='flex gap-4'>
          {/* <div className=" w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="physical_status">Physical Status</Label>
            <Select
              onValueChange={(event) => setValue('physical_status', event)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Physical Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="physically_challenged">
                  Physically Challenged
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.physical_status && (
              <p className="text-destructive mt-1">
                {errors.physical_status.message}
              </p>
            )}
          </div> */}
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='height'>Height</Label>
            {/* <Input type="text" id="height" {...register('height')} /> */}
            <Select onValueChange={(event) => setValue('height', event)}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select height' />
              </SelectTrigger>
              <SelectContent>
                {heights.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.height && (
              <p className='text-destructive mt-1'>{errors.height.message}</p>
            )}
          </div>
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='weight'>Weight</Label>
            {/* <Input type="text" id="weight" {...register('weight')} /> */}
            <Select onValueChange={(event) => setValue('weight', event)}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select weight' />
              </SelectTrigger>
              <SelectContent>
                {weight.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.weight && (
              <p className='text-destructive mt-1'>{errors.weight.message}</p>
            )}
          </div>
          <div className=' w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='body_type'>Body Type</Label>
            <Select onValueChange={(event) => setValue('body_type', event)}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select Type' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='slim'>Slim</SelectItem>
                <SelectItem value='athletic'>Athletic</SelectItem>
                <SelectItem value='avarage'>Average</SelectItem>
                <SelectItem value='heavy'>Heavy</SelectItem>
              </SelectContent>
            </Select>
            {errors.body_type && (
              <p className='text-destructive mt-1'>
                {errors.body_type.message}
              </p>
            )}
          </div>

          {/* <div className=" w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="eating_habits">Eating Habits</Label>
            <Select onValueChange={(event) => setValue('eating_habits', event)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                <SelectItem value="non_vegetarian">Non Vegetarian</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className=" w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="drinking_habits">Drinking Habits</Label>
            <Select
              onValueChange={(event) => setValue('drinking_habits', event)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="occasionally">Occasionally</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          {/* <div className=" w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="smoking_habits">Smoking Habits</Label>
            <Select
              onValueChange={(event) => setValue('smoking_habits', event)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="occasionally">Occasionally</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>
      </div>
    </div>
  );

  // if (step === STEPS.ABOUT_YOU) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="About you"
  //         subtitle="Provide a brief description about your self"
  //       />
  //       <div>
  //         <Label htmlFor="about_you">About You</Label>
  //         <Textarea
  //           placeholder="Type your message here."
  //           required
  //           // {...register('bio')}
  //         />
  //         {/* {errors.bio && (
  //           <p className="text-destructive mt-1">{errors.bio.message}</p>
  //         )} */}
  //       </div>
  //     </div>
  //   );
  // }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      // <div className="flex flex-col gap-8">
      //   <Heading title="Upload images" subtitle="Upload your profile image" />
      //   <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
      //     <div className="flex flex-col gap-4">
      //       <div className="grid w-full max-w-sm items-center gap-1.5">
      //         <Label htmlFor="Files">Files</Label>
      //         <Input
      //           type="file"
      //           accept="image/*"
      //           placeholder="Upload image"
      //           onChange={(e) => handleImage(e)}
      //           className="w-full bg-slate-50 md:w-[300px]"
      //         />
      //         <Dropzone onDrop={(handleDrop) => console.log(handleDrop)}>
      //           {({ getRootProps, getInputProps }) => (
      //             <section>
      //               <div {...getRootProps()}>
      //                 <input {...getInputProps()} />
      //                 <p>
      //                   Drag &apos;n&apos; drop some files here, or click to
      //                   select files
      //                 </p>
      //               </div>
      //             </section>
      //           )}
      //         </Dropzone>
      //         {errors.profile_image && (
      //           <p className="text-destructive mt-1">
      //             {errors.profile_image.message}
      //           </p>
      //         )}
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className='flex flex-col gap-8'>
        <Heading title='Upload images' subtitle='Upload your profile image' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
          <div className='flex flex-col gap-4'>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='Files'>Files</Label>
              <Input
                type='file'
                accept='image/*'
                placeholder='Upload image'
                onChange={(e) => handleImage(e)}
                className='w-full bg-slate-50 md:w-[300px]'
              />
              {/* <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>
                        Drag &apos;n&apos; drop some files here, or click to
                        select files
                      </p>
                    </div>
                  </section>
                )}
              </Dropzone> */}
              {errors.profile_image && (
                <p className='text-destructive mt-1'>
                  {errors.profile_image.message}
                </p>
              )}
              {previewImage && ( // Render preview if there's an image
                <div>
                  <p>Preview:</p>
                  {/* <Image
                    src={previewImage}
                    alt="Preview"
                    className="mt-2"
                    width={100}
                  /> */}
                  <NextImage
                    src={previewImage}
                    width={500}
                    height={500}
                    alt='Picture of the user'
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === STEPS.PREFERENCES) {
    bodyContent = (
      <div className='flex flex-col justify-center items-center gap-8'>
        <Heading
          title='Partner Preferences'
          subtitle='Add partner preferences'
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={isPending}
      isOpen={profileModal.isOpen}
      title='Create New profile'
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.BASIC_DETAILS ? undefined : onBack}
      onClose={profileModal.onClose}
      body={bodyContent}
    />
  );
};

export default ProfileModal;
