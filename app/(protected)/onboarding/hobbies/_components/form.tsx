'use client';

import React, { startTransition, useState } from 'react';
import Heading from '@/components/Heading';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { updateProfile } from '@/actions/profile/update-profile';
import { useRouter } from 'next/navigation';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { hobbies } from '@/constants';
import { toast } from 'sonner';

type Inputs = z.infer<typeof ProfileSchema>;

export const HobbiesForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

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
      hobbies: [],
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
            toast('Hobbies added successfully!');
            router.push('/onboarding/add-partner-preferences');
          }
        })
        .catch(() => setError('Something went wrong!'));
    });

    reset();
  };

  return (
    <form className="py-12" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="p-5">
          <Heading
            title="Add Hobbies"
            subtitle="Provide your hobbies and interests."
          />
        </div>
        <div className="flex flex-col gap-5 ml-5 max-w-[53rem] scroll-mt-28">
          <section className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <ToggleGroup
              type="multiple"
              className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
              variant="outline"
              onValueChange={(event) => setValue('hobbies', event)}
            >
              {hobbies.map((hobby, index) => (
                <ToggleGroupItem
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  value={hobby.value}
                >
                  {hobby.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </section>
          {errors.hobbies && (
            <p className="text-destructive mt-1">{errors.hobbies.message}</p>
          )}
        </div>

        <Button type="submit" onClick={handleSubmit(onSubmit)} className="m-5">
          Add hobbies
        </Button>
      </div>
    </form>
  );
};
