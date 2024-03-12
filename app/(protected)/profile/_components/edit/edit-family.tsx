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
import { toast } from 'sonner';
import { z } from 'zod';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '@/components/ui/label';
import { updateProfile } from '@/actions/profile/update-profile';
import { familyStatus, familyTypes, familyValues } from '@/constants';

interface EditFamilyDetailsProps {
  profile: UserProfile | undefined;
}

type Inputs = z.infer<typeof ProfileSchema>;

const EditFamily: FC<EditFamilyDetailsProps> = ({ profile }) => {
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
      familyValues: profile?.familyValues ?? '',
      familyType: profile?.familyType ?? '',
      familyStatus: profile?.familyStatus ?? '',
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
            toast.success('Family details updated successfully');
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
            <DialogTitle>Edit Family Details</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="familyValues">Family Values</Label>
              <Select
                defaultValue={profile?.familyValues!}
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

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="familyType">Family Type</Label>
              <Select
                defaultValue={profile?.familyType!}
                onValueChange={(event) => setValue('familyType', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.familyType} />
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

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="familyStatus">FamilyS tatus</Label>
              <Select
                defaultValue={profile?.familyStatus!}
                onValueChange={(event) => setValue('familyStatus', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.familyStatus} />
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

export default EditFamily;
