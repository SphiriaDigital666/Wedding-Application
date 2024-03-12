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
import { updateProfile } from '@/actions/profile/update-profile';
import { toast } from 'sonner';
import { Label } from '@/components/ui/label';
import { caste, ethnicities, religions } from '@/constants';

interface EditReligionDetailsProps {
  profile: UserProfile | undefined;
}

type Inputs = z.infer<typeof ProfileSchema>;

const EditReligion: FC<EditReligionDetailsProps> = ({ profile }) => {
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
      religion: profile?.religion ?? '',
      ethnicity: profile?.ethnicity ?? '',
      caste: profile?.caste ?? '',
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
            toast.success('Religion details updated successfully');
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
            <DialogTitle>Edit Religion Details</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="religion">Religion</Label>
              <Select
                defaultValue={profile?.religion!}
                onValueChange={(event) => setValue('religion', event)}
              >
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

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="ethnicity">Ethnicity</Label>
              <Select
                defaultValue={profile?.ethnicity!}
                onValueChange={(event) => setValue('ethnicity', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.ethnicity} />
                </SelectTrigger>
                <SelectContent>
                  {ethnicities.map((option, index) => (
                    <SelectItem key={index} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.ethnicity && (
                <p className="text-destructive mt-1">
                  {errors.ethnicity.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="caste">Caste</Label>
              <Select
                defaultValue={profile?.caste!}
                onValueChange={(event) => setValue('caste', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.caste} />
                </SelectTrigger>
                <SelectContent>
                  {caste.map((option, index) => (
                    <SelectItem key={index} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.caste && (
                <p className="text-destructive mt-1">{errors.caste.message}</p>
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

export default EditReligion;
