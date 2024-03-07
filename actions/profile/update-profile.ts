'use server';
import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import { ProfileSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

export const updateProfile = async (values: z.infer<typeof ProfileSchema>) => {
  const user = await currentUser();
  const validatedFields = ProfileSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const {
    // about,
    age,
    gender,
    body_type,
    height,
    language,
    marital_status,
    name,
    physical_status,
    weight,
    drinking_habits,
    eating_habits,
    smoking_habits,
    profile_image,
    images,
  } = validatedFields.data;

  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: user?.id,
    },
  });

  if (!userProfile) {
    return { error: 'User profile not found!' };
  }

  await db.userProfile.update({
    where: {
      id: userProfile.id,
    },
    data: {
      age: parseFloat(age!),
      height: parseFloat(height!),
      language: language?.toLowerCase(),
      martialStatus: marital_status,
      physicalStatus: physical_status,
      weight: parseFloat(weight!),
      profileImage: profile_image,
      drinkingHabits: drinking_habits,
      eatingHabits: eating_habits,
      smokingHabits: smoking_habits,
      userId: user?.id,
      ...validatedFields.data,
    },
  });

  return { success: 'Profile updated successfully!' };
};

export const updateProfilePhoto = async (image: string | undefined) => {
  const user = await currentUser();
  // const validatedFields = ProfileSchema.safeParse(values);

  // if (!validatedFields.success) {
  //   return { error: 'Invalid fields!' };
  // }

  // const { profile_image } = validatedFields.data;
  console.log(image);

  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: user?.id,
    },
  });

  if (!userProfile) {
    return { error: 'User profile not found!' };
  }

  await db.$transaction([
    db.userProfile.update({
      where: {
        id: userProfile.id,
      },
      data: {
        profileImage: image,
      },
    }),
    db.user.update({
      where: { id: user?.id },
      data: { image: image },
    }),
  ]);

  revalidatePath('/profile');
  return { success: 'Profile Photo updated successfully!' };
};

export const removeProfilePhoto = async () => {
  const user = await currentUser();

  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: user?.id,
    },
  });

  if (!userProfile) {
    return { error: 'User profile not found!' };
  }

  await db.$transaction([
    db.userProfile.update({
      where: {
        id: userProfile.id,
      },
      data: {
        profileImage: '',
      },
    }),
    db.user.update({
      where: { id: user?.id },
      data: { image: '' },
    }),
  ]);

  revalidatePath('/profile');
  return { success: 'Profile photo deleted successfully!' };
};
