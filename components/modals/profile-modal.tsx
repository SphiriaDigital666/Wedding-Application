'use client';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Modal from './modal';
import { Button } from '@/components/ui/button';
import useProfileModal from '@/hooks/useProfileModal';

const ProfileModal = () => {
  const router = useRouter();
  const prpofileModal = useProfileModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {};

  const bodyContent = (
    <div className="flex flex-col gap-4">
      {/* <Heading title='Welcome back' subtitle='Login to your account' /> */}
      <h1 className="text-2xl">Heading</h1>
      {/* <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        type='password'
        required
      /> */}
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/* <Button
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      /> */}
      <Button>Continue</Button>

      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex justify-center items-center gap-2">
          <div>First time using Airbnb?</div>
          <div className="text-neutral-800 cursor-pointer hover:underline">
            Create an account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={prpofileModal.isOpen}
      onClose={prpofileModal.onClose}
      title="Login"
      actionLabel="Continue"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default ProfileModal;
