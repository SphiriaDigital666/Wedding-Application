'use server';
import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import { ProfileSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

export const updateProfile = async (values: z.infer<typeof ProfileSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  const validatedFields = ProfileSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const {
    bodyType,
    language,
    maritalStatus,
    physicalStatus,
    weight,
    drinkingHabits,
    eatingHabits,
    smokingHabits,
    profileImage,
    college,
    institute,
    fatherOccupation,
    motherOccupation,
  } = values;

  console.log(values);

  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (!userProfile) {
    return { error: 'User profile not found!' };
  }

  await db.userProfile.update({
    where: {
      id: userProfile.userId,
    },
    data: {
      language: language?.toLowerCase(),
      maritalStatus,
      physicalStatus,
      weight: parseFloat(weight!),
      profileImage,
      drinkingHabits,
      eatingHabits,
      smokingHabits,
      // userId: user?.id,
      bodyType,
      college,
      institute,
      fatherOccupation,
      motherOccupation,
      ...validatedFields.data,
    },
  });

  return { success: 'Profile updated successfully!' };
};

export const updateProfilePhoto = async (
  values: z.infer<typeof ProfileSchema>
) => {
  const user = await currentUser();
  const validatedFields = ProfileSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { profileImage } = validatedFields.data;

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
        profileImage: profileImage,
      },
    }),
    db.user.update({
      where: { id: user?.id },
      data: { image: profileImage },
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

  await db.userProfile.update({
    where: {
      id: userProfile.id,
    },
    data: {
      profileImage: '',
    },
  });

  revalidatePath('/profile');
  return { success: 'Profile photo deleted successfully!' };
};
