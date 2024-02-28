'use client';

import axios, { AxiosError } from 'axios';
import { FC, startTransition, useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { AddFriendSchema } from '@/schemas';
import { addFriend } from '@/actions/friends/add-friend';

interface AddFriendButtonProps {}

type FormData = z.infer<typeof AddFriendSchema>;

export const AddFriendButton: FC<AddFriendButtonProps> = ({}) => {
  const [showSuccessState, setShowSuccessState] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(AddFriendSchema),
  });

   const onSubmit = (email: z.infer<typeof AddFriendSchema>) => {
     startTransition(() => {
       addFriend(email).then((data) => {
         setError(data.error);
         if(data.success){
          setShowSuccessState(true);
          setSuccess(data.success);
         }
       });
     });
   };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm'>
      <label
        htmlFor='email'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        Add friend by E-Mail
      </label>

      <div className='mt-2 flex gap-4'>
        <input
          {...register('email')}
          type='text'
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='you@example.com'
        />
        <Button>Add</Button>
      </div>
      <p className='mt-1 text-sm text-red-600'>{error}</p>
      {showSuccessState ? (
        <p className='mt-1 text-sm text-green-600'>Friend request sent!</p>
      ) : null}
    </form>
  );
};

