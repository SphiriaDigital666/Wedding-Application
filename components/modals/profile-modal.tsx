'use client';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import useProfileModal from '@/hooks/useProfileModal';
import Modal from './modal';
import toast from 'react-hot-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Heading from '../Heading';
import CategoryInput from '../CategoryInput';
import { Textarea } from '../ui/textarea';
import BasicDetails from '@/app/(protected)/profile/_components/basic-details';

enum STEPS {
  ABOUT_YOU = 0,
  BASIC_DETAILS = 1,
  IMAGES = 2,
  // RELIGION_DETAILS = 3,
  // LOCATION_DETAILS = 4,
  // PROFESSIONAL_DETAILS = 5,
  // FAMILY_DETAILS = 6,
}

const ProfileModal = () => {
  const router = useRouter();
  const profileModal = useProfileModal();

  const [step, setStep] = useState(STEPS.BASIC_DETAILS);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      age: '',
      address: '',
      language: '',
      height: '',
      weight: '',
      body_type: '',
      physical_status: '',
      marital_status: '',
      eating_habits: '',
      drinking_habits: '',
      smoking_habits: '',
    },
  });

  // const name = watch('name');
  // const age = watch('age');
  // const address = watch('address');
  // const language = watch('language');
  // const height = watch('height');
  // const weight = watch('weight');
  // const body_type = watch('body_type');
  // const physical_status = watch('physical_status');
  // const marital_status = watch('marital_status');
  // const eating_habits = watch('eating_habits');
  // const drinking_habits = watch('drinking_habits');
  // const smoking_habits = watch('smoking_habits');

  // const setCustomValue = (id: string, value: any) => {
  //   setValue(id, value, {
  //     shouldValidate: true,
  //     shouldDirty: true,
  //     shouldTouch: true,
  //   });
  // };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.IMAGES) return onNext();

    setIsLoading(true);

    axios
      .post('/profile', data)
      .then(() => {
        toast.success('Profile created!');
        router.push('/profile');
        reset();
        setStep(STEPS.ABOUT_YOU);
        profileModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.IMAGES) {
      return 'Create';
    }
    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.ABOUT_YOU) {
      return undefined;
    }
    return 'Back';
  }, [step]);

  let bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="About you"
          subtitle="Provide a brief description about your self"
        />
        <div>
          <Label htmlFor="about_you">About You</Label>
          <Textarea placeholder="Type your message here." />
        </div>
      </div>
  );

  if (step === STEPS.BASIC_DETAILS) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Basic details" subtitle="Provide the basic details" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="age">Age</Label>
              <Input type="number" id="age" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="address">Address</Label>
              <Input type="text" id="address" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="language">Language</Label>
              <Input type="text" id="language" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="height">Height</Label>
              <Input type="text" id="height" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="weight">Weight</Label>
              <Input type="text" id="weight" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="body_type">Body Type</Label>
              <Input type="text" id="body_type" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="physical_status">Physical Status</Label>
              <Input type="text" id="physical_status" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="marital_status">Marital Status</Label>
              <Input type="text" id="marital_status" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="eating_habits">Eating Habits</Label>
              <Input type="text" id="eating_habits" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="drinking_habits">Drinking Habits</Label>
              <Input type="text" id="drinking_habits" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="smoking_habits">Smoking Habits</Label>
              <Input type="text" id="smoking_habits" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="Upload images" subtitle="Upload upto 5 images" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // if (step === STEPS.RELIGION_DETAILS) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Religion details"
  //         subtitle="Provide yout religion details"
  //       />
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="religion">Religion</Label>
  //             <Input type="text" id="religion" placeholder="Religion" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="ethnicity">Ethnicity</Label>
  //             <Input type="text" id="ethnicity" placeholder="Ethnicity" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="caste">Caste</Label>
  //             <Input type="text" id="caste" placeholder="Caste" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // if (step === STEPS.LOCATION_DETAILS) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Locations details"
  //         subtitle="provide details about the area you live"
  //       />
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="country">Country</Label>
  //             <Input type="text" id="country" placeholder="Country" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="city">City</Label>
  //             <Input type="text" id="city" placeholder="City" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="state">State</Label>
  //             <Input type="text" id="state" placeholder="State" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="citizenship">Citizenship</Label>
  //             <Input type="text" id="citizenship" placeholder="Citizenship" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="residential_status">Residential Status</Label>
  //             <Input
  //               type="text"
  //               id="residential_status"
  //               placeholder="Residential Status"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // if (step === STEPS.PROFESSIONAL_DETAILS) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Professional details"
  //         subtitle="Provide details about your work"
  //       />
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="country">Education</Label>
  //             <Input type="text" id="country" placeholder="Education" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="city">College / Institute</Label>
  //             <Input type="text" id="city" placeholder="College / Institute" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="state">Employed Sector</Label>
  //             <Input type="text" id="state" placeholder="Employed Sector" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="citizenship">Company Name</Label>
  //             <Input type="text" id="citizenship" placeholder="Company Name" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="residential_status">Job Title</Label>
  //             <Input
  //               type="text"
  //               id="residential_status"
  //               placeholder="Job Title"
  //             />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="citizenship">Annual Income</Label>
  //             <Input type="text" id="citizenship" placeholder="Annual Income" />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // if (step === STEPS.FAMILY_DETAILS) {
  //   bodyContent = (
  //     <div className="flex flex-col gap-8">
  //       <Heading
  //         title="Family Details"
  //         subtitle="Provide details about your family"
  //       />
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="family_values">Family Values</Label>
  //             <Input
  //               type="text"
  //               id="family_values"
  //               placeholder="Family Values"
  //             />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="family_type">Family Type</Label>
  //             <Input type="text" id="family_type" placeholder="Family Type" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="family_status">Family Status</Label>
  //             <Input
  //               type="text"
  //               id="family_status"
  //               placeholder="Family Status"
  //             />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="family_details">Family Details</Label>
  //             <Input
  //               type="text"
  //               id="family_details"
  //               placeholder="Family Details"
  //             />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="siblings">Siblings</Label>
  //             <Input type="text" id="siblings" placeholder="Siblings" />
  //           </div>
  //         </div>
  //         <div className="flex flex-col gap-4">
  //           <div className="grid w-full max-w-sm items-center gap-1.5">
  //             <Label htmlFor="no_of_siblings">No of Siblings</Label>
  //             <Input
  //               type="text"
  //               id="no_of_siblings"
  //               placeholder="No of Siblings"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Modal
      disabled={isLoading}
      isOpen={profileModal.isOpen}
      title="Create New profile"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.ABOUT_YOU ? undefined : onBack}
      onClose={profileModal.onClose}
      body={bodyContent}
    />
  );
};

export default ProfileModal;
