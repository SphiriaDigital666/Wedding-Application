'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { UserProfile } from '@prisma/client';
import { FC, startTransition, useState } from 'react';
import { Input } from '@/components/ui/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { z } from 'zod';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  age,
  bodyTypes,
  cities,
  drinkingHabits,
  eatingHabits,
  heights,
  languages,
  maritalStatus,
  physicalStatus,
  smokingHabits,
  weight,
} from '@/constants';
import { updateProfile } from '@/actions/profile/update-profile';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';

interface EditBasicDetailsProps {
  profile: UserProfile | undefined;
}

type Inputs = z.infer<typeof ProfileSchema>;

const EditBasic: FC<EditBasicDetailsProps> = ({ profile }) => {
  const form = useForm();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      name: profile?.name ?? '',
      age: profile?.age!?.toString() ?? '',
      city: profile?.city ?? '',
      language: profile?.language ?? '',
      height: profile?.height?.toString() ?? '',
      weight: profile?.weight?.toString() ?? '',
      bodyType: profile?.bodyType ?? '',
      physicalStatus: profile?.physicalStatus ?? '',
      maritalStatus: profile?.maritalStatus ?? '',
      eatingHabits: profile?.eatingHabits ?? '',
      drinkingHabits: profile?.drinkingHabits ?? '',
      smokingHabits: profile?.smokingHabits ?? '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    // If no image is uploaded or the image hasn't changed, proceed to create the profile without uploading
    startTransition(() => {
      updateProfile(data)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
            toast.error(data.error);
          }

          if (data?.success) {
            setSuccess(data.success);
            toast.success('Basic details updated successfully');
            setOpen(false);
          }
        })
        .catch(() => {
          setError('Something went wrong!');
        });
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" size="lg">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px] md:min-w-[1100px]">
          <DialogHeader>
            <DialogTitle>Edit Basic Details</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  defaultValue={profile?.name!}
                  id="name"
                  {...register('name')}
                  className="w-full"
                />
                {errors.name && (
                  <p className="text-destructive mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="age">Age</Label>
                <Select
                  defaultValue={profile?.age!?.toString()}
                  onValueChange={(event) => setValue('age', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={profile?.age} />
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

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="city">City</Label>
                <Select
                  defaultValue={profile?.city!}
                  onValueChange={(event) => setValue('city', event)}
                >
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

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="language">Language</Label>
                <Select
                  defaultValue={profile?.language!}
                  onValueChange={(event) => setValue('language', event)}
                >
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

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="height">Height</Label>
                <Select
                  defaultValue={profile?.height!?.toString()}
                  onValueChange={(event) => setValue('height', event)}
                >
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

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="weight">Weight</Label>
                <Select
                  defaultValue={profile?.weight!?.toString()}
                  onValueChange={(event) => setValue('weight', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Weight" />
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
                  <p className="text-destructive mt-1">
                    {errors.weight.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="bodyType">Body Type</Label>
                <Select
                  defaultValue={profile?.bodyType!}
                  onValueChange={(event) => setValue('bodyType', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Body Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {bodyTypes.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.bodyType && (
                  <p className="text-destructive mt-1">
                    {errors.bodyType.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="physicalStatus">Physical Status</Label>
                <Select
                  defaultValue={profile?.physicalStatus!}
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

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select
                  defaultValue={profile?.maritalStatus!}
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

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="eatingHabits">Eating Habits</Label>
                <Select
                  defaultValue={profile?.eatingHabits!}
                  onValueChange={(event) => setValue('eatingHabits', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Eating Habits" />
                  </SelectTrigger>
                  <SelectContent>
                    {eatingHabits.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.eatingHabits && (
                  <p className="text-destructive mt-1">
                    {errors.eatingHabits.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="drinkingHabits">Drinking Habits</Label>
                <Select
                  defaultValue={profile?.drinkingHabits!}
                  onValueChange={(event) => setValue('drinkingHabits', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Drinking Habits" />
                  </SelectTrigger>
                  <SelectContent>
                    {drinkingHabits.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.drinkingHabits && (
                  <p className="text-destructive mt-1">
                    {errors.drinkingHabits.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 w-full">
                <Label htmlFor="smokingHabits">Smoking Habits</Label>
                <Select
                  defaultValue={profile?.smokingHabits!}
                  onValueChange={(event) => setValue('smokingHabits', event)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Smoking Habits" />
                  </SelectTrigger>
                  <SelectContent>
                    {smokingHabits.map((option, index) => (
                      <SelectItem key={index} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.smokingHabits && (
                  <p className="text-destructive mt-1">
                    {errors.smokingHabits.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" onClick={() => handleSubmit(onSubmit)()}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
};

export default EditBasic;
