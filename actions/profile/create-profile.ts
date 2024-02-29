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
    body_type,
    height,
    language,
    marital_status,
    name,
    weight,
    profile_image,
  } = validatedFields.data;

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
        bodyType: body_type,
        height: parseFloat(height!),
        language: language?.toLowerCase(),
        martialStatus: marital_status,
        name,
        weight: parseFloat(weight!),
        profileImage: profile_image,

        userId: user?.id,
      },
    }),
    db.user.update({
      where: { id: user.id },
      data: { isNewUser: false },
    }),
  ]);


  return { success: 'Profile created successfully!' };
};
