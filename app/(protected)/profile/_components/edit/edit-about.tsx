'use client';

import { updateProfile } from '@/actions/profile/update-profile';
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
import { Textarea } from '@/components/ui/textarea';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { startTransition, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type Inputs = z.infer<typeof ProfileSchema>;

const EditAbout = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      bio: '',
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
            console.log(data.error);
          }

          if (data?.success) {
            setSuccess(data.success);
            toast.success('Bio updated successfully');
          }
        })
        .catch(() => setError('Something went wrong!'));
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" size="lg">
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[425px] md:min-w-[800px]">
          <DialogHeader>
            <DialogTitle>Edit About</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <Textarea
            placeholder="Type your message here."
            id="bio"
            {...register('bio')}
          />
          {errors.bio && (
            <p className="text-destructive mt-1">{errors.bio.message}</p>
          )}
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

export default EditAbout;
