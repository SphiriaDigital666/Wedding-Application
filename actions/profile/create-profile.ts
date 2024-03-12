'use server';
import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import { ProfileSchema } from '@/schemas';
import * as z from 'zod';

export const createProfile = async (values: z.infer<typeof ProfileSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const validatedFields = ProfileSchema.safeParse(values);

  if (!validatedFields.success) {
    console.log(validatedFields.error);
    return { error: 'Invalid fields!' };
  }

  const {
    age,
    gender,
    dob,
    height,
    language,
    physicalStatus,
    maritalStatus,
    name,
    profileImage,
    religion,
    familyStatus,
    familyType,
    familyValues,
    education,
    employedSector,
    jobTitle,
    annualIncome,
    mobile,
    email,
  } = validatedFields.data;

  console.log(validatedFields.data);

  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (userProfile) {
    return { error: 'User already has a profile' };
  }

  const createdProfile = await db.userProfile.create({
    data: {
      age: parseFloat(age!),
      gender,
      dob,
      height: parseFloat(height!),
      language: language?.toLowerCase(),
      physicalStatus,
      maritalStatus,
      name,
      religion,
      profileImage,
      familyStatus,
      familyType,
      familyValues,
      education,
      employedSector,
      jobTitle,
      annualIncome,
      mobile: parseFloat(mobile!),
      email,
      userId: user?.id,
    },
  });

  await db.preference.create({
    data: {
      userId: user.id!,
      userProfile: {
        connect: {
          id: createdProfile.id,
        },
      },
    },
  });

  return { success: 'Profile created successfully!' };
};
