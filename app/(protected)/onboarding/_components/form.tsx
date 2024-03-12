'use client';

import { ChangeEvent, useState, useTransition } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { z } from 'zod';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import Heading from '@/components/Heading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  age,
  annualIncomes,
  cities,
  countries,
  educationalQualifications,
  employeeSectors,
  familyStatus,
  familyTypes,
  familyValues,
  heights,
  languages,
  maritalStatus,
  occupations,
  physicalStatus,
  religions,
  states,
} from '@/constants';
import { Button } from '@/components/ui/button';
import { isBase64Image } from '@/lib/utils';
import { useUploadThing } from '@/lib/uploadthing';
import { createProfile } from '@/actions/profile/create-profile';
import { useRouter } from 'next/navigation';
import { compressImage } from '@/lib/image-compress';
import { OTPInput, SlotProps } from 'input-otp';
import { FakeDash, Slot } from './otpInput';

type Inputs = z.infer<typeof ProfileSchema>;

const steps = [
  {
    id: 'Step 1',
    name: 'Personal Information',
    fields: ['name', 'age', 'dob', 'gender', 'religion', 'language'],
  },
  {
    id: 'Step 2',
    name: 'Image',
    fields: ['profileImage'],
  },
  {
    id: 'Step 3',
    name: 'Background',
    fields: [
      'maritalStatus',
      'height',
      'physicalStatus',
      'familyStatus',
      'familyType',
      'familyValues',
    ],
  },
  {
    id: 'Step 4',
    name: 'Professional',
    fields: ['education', 'employedSector', 'jobTitle', 'annualIncome'],
  },
  { id: 'Step 5', name: 'Mobile Number Verification' },
];

export const OnboardingForm = () => {
  const router = useRouter();
  const [previewImage, setPreviewImage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const [showOTP, setShowOTP] = useState(false);
  const [showMobile, setShowMobile] = useState(true);
  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState('');

  const OTP = '123123';

  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const { startUpload } = useUploadThing('imageUploader');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    trigger,

    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: '',
      age: '',
      gender: '',
      dob: '',
      language: '',
      height: '',
      physicalStatus: '',
      maritalStatus: '',
      religion: '',
      profileImage: '',
      familyStatus: '',
      familyType: '',
      familyValues: '',
      education: '',
      employedSector: '',
      jobTitle: '',
      annualIncome: '',
      country: '',
      city: '',
      state: '',
      hobbies: [],
      images: [],
      email: '',
      mobile: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    const blob = data.profileImage;

    const hasImageChanged = isBase64Image(blob!);

    if (hasImageChanged) {
      try {
        const imgRes = await startUpload(files);
        console.log(imgRes);

        if (imgRes && imgRes[0].url) {
          data.profileImage = imgRes[0].url;

          // Call createProfile only after the image is uploaded successfully
          startTransition(() => {
            createProfile(data)
              .then((data) => {
                if (data?.error) {
                  setError(data.error);
                  console.log(data.error);
                }

                if (data?.success) {
                  setSuccess(data.success);
                  router.push('/onboarding/complete-profile');
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
        createProfile(data)
          .then((data) => {
            if (data?.error) {
              setError(data.error);
              console.log(data.error);
            }

            if (data?.success) {
              setSuccess(data.success);
              router.push('/onboarding/complete-profile');
            }
          })
          .catch(() => setError('Something went wrong!'));
      });
    }

    reset();
  };

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    console.log(fields);

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        // await handleSubmit(onSubmit)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
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

  const checkVerification = () => {
    if (otp === OTP) {
      setVerified(true);
      setShowOTP(false);
    }
  };

  return (
    <section className="container absolute inset-0 flex flex-col justify-between p-24">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <form className="py-12" onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="p-10 rounded-sm shadow-md"
          >
            <Heading
              title="Personal Information"
              subtitle="Provide your personal details."
            />
            <div className="mt-10 flex items-center justify-between">
              <div className="w-full max-w-sm">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full"
                />
                {errors.name && (
                  <p className="text-destructive mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full"
                />
                {errors.email && (
                  <p className="text-destructive mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="mobile">Mobile</Label>
                <Input type="tel" id="mobile" {...register('mobile')} />
                {errors.mobile && (
                  <p className="text-destructive mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <div className="w-full max-w-sm">
                <Label htmlFor="age">Age</Label>
                <Select onValueChange={(event) => setValue('age', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Age" />
                  </SelectTrigger>
                  <SelectContent>
                    {age.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.age && (
                  <p className="text-destructive mt-1">{errors.age.message}</p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="dob">DOB</Label>
                <Input type="date" id="dob" {...register('dob')} />
                {errors.dob && (
                  <p className="text-destructive mt-1">{errors.dob.message}</p>
                )}
              </div>
              <div className="w-full max-w-sm">
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(event) => setValue('gender', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-destructive mt-1">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <div className="w-full max-w-sm">
                <Label htmlFor="city">City</Label>
                <Select onValueChange={(event) => setValue('city', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.city && (
                  <p className="text-destructive mt-1">{errors.city.message}</p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="state">State</Label>
                <Select onValueChange={(event) => setValue('state', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.state && (
                  <p className="text-destructive mt-1">
                    {errors.state.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="country">Country</Label>
                <Select onValueChange={(event) => setValue('country', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.country && (
                  <p className="text-destructive mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="p-10 flex gap-20 rounded-sm shadow-md"
          >
            <div>
              <Heading
                title="Profile Image"
                subtitle="Provide your profile image."
              />
              <div className="mt-10 flex items-center justify-between">
                <div className="w-full max-w-sm">
                  <Input
                    type="file"
                    accept="image/*"
                    placeholder="Upload image"
                    onChange={(e) => handleImage(e)}
                    className="w-full bg-slate-50 md:w-[300px]"
                  />
                  {errors.profileImage && (
                    <p className="text-destructive mt-1">
                      {errors.profileImage.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div>
              {previewImage && (
                <div>
                  <p>Preview:</p>
                  <Image
                    src={previewImage}
                    width={500}
                    height={500}
                    alt="Picture of the user"
                    className="w-[250px] rounded-md"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="p-10 rounded-sm shadow-md"
          >
            <Heading
              title="Personal Background"
              subtitle="Provide your background details."
            />
            <div className="mt-10 flex items-center justify-between">
              <div className="w-full max-w-sm">
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select
                  onValueChange={(event) => setValue('maritalStatus', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Marital Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {maritalStatus.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.maritalStatus && (
                  <p className="text-destructive mt-1">
                    {errors.maritalStatus.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="height">Height</Label>
                <Select onValueChange={(event) => setValue('height', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Height" />
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
                  <p className="text-destructive mt-1">
                    {errors.height.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="physicalStatus">Physical Status</Label>
                <Select
                  onValueChange={(event) => setValue('physicalStatus', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Physical Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {physicalStatus.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.physicalStatus && (
                  <p className="text-destructive mt-1">
                    {errors.physicalStatus.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="w-full">
                <Label htmlFor="religion">Religion</Label>
                <Select onValueChange={(event) => setValue('religion', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Religion" />
                  </SelectTrigger>
                  <SelectContent>
                    {religions.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.religion && (
                  <p className="text-destructive mt-1">
                    {errors.religion.message}
                  </p>
                )}
              </div>

              <div className="w-full">
                <Label htmlFor="language">Language</Label>
                <Select onValueChange={(event) => setValue('language', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.language && (
                  <p className="text-destructive mt-1">
                    {errors.language.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="w-full max-w-sm">
                <Label htmlFor="familyStatus">Family Status</Label>
                <Select
                  onValueChange={(event) => setValue('familyStatus', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Family Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {familyStatus.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.familyStatus && (
                  <p className="text-destructive mt-1">
                    {errors.familyStatus.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="familyType">Family Type</Label>
                <Select
                  onValueChange={(event) => setValue('familyType', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Family Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {familyTypes.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.familyType && (
                  <p className="text-destructive mt-1">
                    {errors.familyType.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="familyValues">Family Values</Label>
                <Select
                  onValueChange={(event) => setValue('familyValues', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Family Values" />
                  </SelectTrigger>
                  <SelectContent>
                    {familyValues.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.familyValues && (
                  <p className="text-destructive mt-1">
                    {errors.familyValues.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="p-10 rounded-sm shadow-md"
          >
            <Heading
              title="Professional Details"
              subtitle="Provide your professional details."
            />
            <div className="mt-10 flex items-center justify-between">
              <div className="w-full max-w-sm">
                <Label htmlFor="education">Education</Label>
                <Select onValueChange={(event) => setValue('education', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Education" />
                  </SelectTrigger>
                  <SelectContent>
                    {educationalQualifications.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.education && (
                  <p className="text-destructive mt-1">
                    {errors.education.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="employedSector">Employed In</Label>
                <Select
                  onValueChange={(event) => setValue('employedSector', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Employed Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeSectors.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.employedSector && (
                  <p className="text-destructive mt-1">
                    {errors.employedSector.message}
                  </p>
                )}
              </div>

              <div className="w-full max-w-sm">
                <Label htmlFor="jobTitle">Occupation</Label>
                <Select onValueChange={(event) => setValue('jobTitle', event)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    {occupations.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.jobTitle && (
                  <p className="text-destructive mt-1">
                    {errors.jobTitle.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <div className="w-full max-w-sm">
                <Label htmlFor="annualIncome">Annual Income</Label>
                <Select
                  onValueChange={(event) => setValue('annualIncome', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Annual Income" />
                  </SelectTrigger>
                  <SelectContent>
                    {annualIncomes.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.annualIncome && (
                  <p className="text-destructive mt-1">
                    {errors.annualIncome.message}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="p-10 flex flex-col items-center rounded-sm shadow-md"
          >
            <Heading
              title="Mobile Number Verification"
              subtitle="Verify your mobile number to continue"
            />
            <div className="mt-10 flex items-center justify-between">
              <div className="flex flex-col justify-center gap-2 w-full max-w-sm">
                {showMobile && (
                  <>
                    <Label htmlFor="employedSector">Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      className="w-[300px]"
                    />
                    <Button
                      onClick={() => {
                        setShowOTP(true);
                        setShowMobile(false);
                      }}
                    >
                      Send Code
                    </Button>
                  </>
                )}
                {showOTP && (
                  <>
                    <OTPInput
                      onComplete={checkVerification}
                      onChange={setOtp}
                      value={otp ?? ''}
                      maxLength={6}
                      containerClassName="group flex items-center has-[:disabled]:opacity-30"
                      render={({ slots }) => (
                        <>
                          <div className="flex">
                            {slots.slice(0, 3).map((slot, idx) => (
                              <Slot key={idx} {...slot} />
                            ))}
                          </div>

                          <FakeDash />

                          <div className="flex">
                            {slots.slice(3).map((slot, idx) => (
                              <Slot key={idx} {...slot} />
                            ))}
                          </div>
                        </>
                      )}
                    />
                    {/* <Button
                      onClick={() => {
                        setShowOTP(false);
                      }}
                    >
                      Verify
                    </Button> */}
                  </>
                )}
                {verified && (
                  <Button type="submit" onClick={handleSubmit(onSubmit)}>
                    Create Profile
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </form>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
