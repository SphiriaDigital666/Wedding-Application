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
import { updateProfile } from '@/actions/profile/update-profile';
import { toast } from 'sonner';
import { cities, countries, states } from '@/constants';

interface EditLocationDetailsProps {
  profile: UserProfile | undefined;
}

type Inputs = z.infer<typeof ProfileSchema>;

const EditLocation: FC<EditLocationDetailsProps> = ({ profile }) => {
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
      country: profile?.country ?? '',
      city: profile?.city ?? '',
      state: profile?.state ?? '',
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
            <DialogTitle>Edit Location Details</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="country">Country</Label>
              <Select
                defaultValue={profile?.country!}
                onValueChange={(event) => setValue('country', event)}
              >
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

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="state">State</Label>
              <Select
                defaultValue={profile?.state!}
                onValueChange={(event) => setValue('state', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.state} />
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
                <p className="text-destructive mt-1">{errors.state.message}</p>
              )}
            </div>

            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="city">City</Label>
              <Select
                defaultValue={profile?.city!}
                onValueChange={(event) => setValue('city', event)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={profile?.city} />
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

export default EditLocation;
