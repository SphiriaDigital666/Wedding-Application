'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Heading from '@/components/Heading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { ProfileSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  bodyTypes,
  drinkingHabits,
  eatingHabits,
  occupations,
  smokingHabits,
} from '@/constants';

type Inputs = z.infer<typeof ProfileSchema>;

export const CompleteProfileForm = () => {
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
      bodyType: '',
      weight: '',
      eatingHabits: '',
      drinkingHabits: '',
      smokingHabits: '',
      fatherOccupation: '',
      motherOccupation: '',
    },
  });

  return (
    <div className="">
      <div className="p-5">
        <Heading
          title="Basic Information"
          subtitle="Complete your basic information"
        />
      </div>
      <div className="flex flex-col gap-5 ml-10">
        <div className="flex items-center gap-5">
          <Label htmlFor="bodyType">Body Type</Label>

          <Select onValueChange={(event) => setValue('bodyType', event)}>
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
            <p className="text-destructive mt-1">{errors.bodyType.message}</p>
          )}
        </div>

        <div className="flex items-center gap-5">
          <Label htmlFor="weight">Weight</Label>

          <Select onValueChange={(event) => setValue('weight', event)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Weight" />
            </SelectTrigger>
            <SelectContent>
              {bodyTypes.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.weight && (
            <p className="text-destructive mt-1">{errors.weight.message}</p>
          )}
        </div>

        <div className="flex items-center gap-5">
          <Label htmlFor="college">College</Label>
          <Input
            type="text"
            id="college"
            {...register('college')}
            className="w-[400px]"
          />
          {errors.college && (
            <p className="text-destructive mt-1">{errors.college.message}</p>
          )}
        </div>

        <div className="flex items-center gap-5">
          <Label htmlFor="institute">Institute</Label>
          <Input
            type="text"
            id="institute"
            {...register('institute')}
            className="w-[400px]"
          />
          {errors.institute && (
            <p className="text-destructive mt-1">{errors.institute.message}</p>
          )}
        </div>
      </div>

      <div className="p-5">
        <Heading
          title="Lifestyle Information"
          subtitle="Complete your lifestyle information"
        />
      </div>
      <div className="flex flex-col ml-10 gap-5">
        <div className="flex items-center gap-5">
          <Label htmlFor="eatingHabits">Eating Habits</Label>
          <Select onValueChange={(event) => setValue('eatingHabits', event)}>
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

        <div className="flex items-center gap-5">
          <Label htmlFor="drinkingHabits">Drinking Habits</Label>
          <Select onValueChange={(event) => setValue('drinkingHabits', event)}>
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

        <div className="flex items-center gap-5">
          <Label htmlFor="smokingHabits">Smoking Habits</Label>
          <Select onValueChange={(event) => setValue('smokingHabits', event)}>
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

      <div className="p-5">
        <Heading
          title="Family Information"
          subtitle="Complete your family information"
        />
      </div>
      <div className="flex flex-col ml-10 gap-5">
        <div className="flex items-center gap-5">
          <Label htmlFor="fatherOccupation">Father&apos;s Occupation</Label>
          <Select
            onValueChange={(event) => setValue('fatherOccupation', event)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Occupation" />
            </SelectTrigger>
            <SelectContent>
              {occupations.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.fatherOccupation && (
            <p className="text-destructive mt-1">
              {errors.fatherOccupation.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-5">
          <Label htmlFor="motherOccupation">Mother&apos;s Occupation</Label>
          <Select
            onValueChange={(event) => setValue('motherOccupation', event)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Occupation" />
            </SelectTrigger>
            <SelectContent>
              {occupations.map((option, index) => (
                <SelectItem key={index} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.motherOccupation && (
            <p className="text-destructive mt-1">
              {errors.motherOccupation.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
