'use client';
import { register } from '@/actions/auth/register';
import Social from '@/components/auth/social';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div className='relative flex flex-col p-5 bottom-56 md:absolute 2xl:bottom-[-80px] 2xl:right-[200px] xl:bottom-[-80px] xl:right-[200px] lg:bottom-[-80px] lg:right-[100px] md:bottom-[-80px] md:right-[100px] sm:bottom-[-80px] sm:right-[100px]'>
      <div className='flex items-center justify-end gap-3 p-5 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2'>
        <p className='text-[#fff] text-[10px] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] font-medium'>
          Already a member ?
        </p>
        <Link href='/auth/login'>
          <p className='text-[#fff] text-[10px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] font-bold border border-[#fff] rounded-md w-max px-5 cursor-pointer'>
            Login
          </p>
        </Link>
      </div>

      <div className='relative top-[-20px] p-5 2xl:w-[577px] xl:w-[500px] drop-shadow-xl pb-[30px]'>
        <div className='bg-[#5BACE3] rounded-t-lg'>
          <h1 className='text-[#fff] text-[20px] p-4 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[24px] text-center font-bold 2xl:py-8 xl:py-6 lg:py-4 md:py-2'>
            Create a Matrimony Profile
          </h1>
        </div>
        <Form {...form}>
          <form
            className='bg-[#fff] rounded-b-lg'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <h1 className='text-[#445159] text-[15px] 2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] md:text-center font-medium py-2 mx-10 border-b border-[#D9D9D9] '>
              Place to find your soulmate
            </h1>

            <div className='mb-4 px-10 mt-6 md:mt-8 md:mb-8'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Name'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='mb-4 px-10 md:mb-8'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Email'
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='mb-6 px-10 md:mb-8'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder='Password'
                        disabled={isPending}
                        type='password'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='mb-3 w-full px-10'>
              <FormError message={error} />
              <FormSuccess message={success} />
            </div>

            <div className='flex items-center justify-center'>
              <button
                type='submit'
                className='bg-[#5BACE3] w-full 2xl:h-[50px] sm:h-[40px] flex items-center justify-center mb-10 mx-10 rounded-md'
                disabled={isPending}
              >
                <div className='py-2'>
                  <p className='text-[#FFF] font-medium text-[16px] 2xl:text-[30px] xl:text-[28px] lg:text-[26px] md:text-[24px] '>
                    <span className='flex items-center'>
                      {isPending && <Loader2 className='mr-2 animate-spin' />}
                      Register
                    </span>
                  </p>
                </div>
              </button>
            </div>
            <div className='px-10'>
              <Social />
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
