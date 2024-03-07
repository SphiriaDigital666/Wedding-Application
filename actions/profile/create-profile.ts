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
    return { error: 'Invalid fields!' };
  }

  const {
    age,
    gender,
    dob,
    height,
    language,
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
  } = values;

  console.log(values);

  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (userProfile) {
    return { error: 'User already has a profile' };
  }

  await db.$transaction([
    db.userProfile.create({
      data: {
        age: parseFloat(age!),
        gender,
        dob,
        height: parseFloat(height!),
        language: language?.toLowerCase(),
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
        annualIncome: parseFloat(annualIncome!),
        userId: user?.id,
      },
    }),
    db.user.update({
      where: { id: user.id },
      data: { isNewUser: false },
    }),
    db.preference.create({
      data: {
        userId: user.id!,
      },
    }),
  ]);

  return { success: 'Profile created successfully!' };
};
