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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import {
  annualIncomes,
  educationalQualifications,
  employeeSectors,
  occupations,
} from '@/constants';
import { Input } from '@/components/ui/input';
import { updateProfile } from '@/actions/profile/update-profile';
import { toast } from 'sonner';

interface EditProfessionalDetailsProps {
  profile: UserProfile | undefined;
}

type Inputs = z.infer<typeof ProfileSchema>;

const EditProfessional: FC<EditProfessionalDetailsProps> = ({ profile }) => {
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
      education: profile?.education ?? '',
      college: profile?.college ?? '',
      employedSector: profile?.employedSector ?? '',
      companyName: profile?.companyName ?? '',
      jobTitle: profile?.jobTitle ?? '',
      annualIncome: profile?.annualIncome ?? '',
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
            toast.success('Professional details updated successfully');
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
            <DialogTitle>Edit Professional Details</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="education">Education</Label>
              <Select
                defaultValue={profile?.education!}
                onValueChange={(event) => setValue('education', event)}
              >
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

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="college">College</Label>
              <Input
                type="text"
                defaultValue={profile?.college!}
                id="college"
                {...register('college')}
                className="w-full"
              />
              {errors.college && (
                <p className="text-destructive mt-1">
                  {errors.college.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="employedSector">Employed Sector</Label>
              <Select
                defaultValue={profile?.employedSector!}
                onValueChange={(event) => setValue('employedSector', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.employedSector} />
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

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                type="text"
                defaultValue={profile?.companyName!}
                id="companyName"
                {...register('companyName')}
                className="w-full"
              />
              {errors.companyName && (
                <p className="text-destructive mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="jobTitle">Occupation</Label>
              <Select
                defaultValue={profile?.jobTitle!}
                onValueChange={(event) => setValue('jobTitle', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.jobTitle} />
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

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="annualIncome">Annual Income</Label>
              <Select
                defaultValue={profile?.annualIncome!}
                onValueChange={(event) => setValue('annualIncome', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.annualIncome} />
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

export default EditProfessional;
