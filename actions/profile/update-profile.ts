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

  try {
    const userProfile = await db.userProfile.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (!userProfile) {
      return { error: 'User profile not found!' };
    }

    const {
      bio,
      name,
      age,
      city,
      language,
      height,
      physicalStatus,
      maritalStatus,
      bodyType,
      weight,
      college,
      companyName,
      eatingHabits,
      drinkingHabits,
      smokingHabits,
      fatherOccupation,
      motherOccupation,
      hobbies,
    } = validatedFields.data;

    await db.userProfile.update({
      where: {
        id: userProfile.id,
      },
      data: {
        bio,
        name,
        age: parseFloat(age!),
        city,
        language,
        height: parseFloat(height as string),
        bodyType,
        physicalStatus,
        maritalStatus,
        weight: parseFloat(weight as string),
        college,
        companyName,
        eatingHabits,
        drinkingHabits,
        smokingHabits,
        fatherOccupation,
        motherOccupation,
        hobbies,
      },
    });

    revalidatePath('/profile');

    return { success: 'Profile updated successfully!' };
  } catch (error: any) {
    return { error: 'Error updating the profile.' + error.message };
  }
};

export const updateProfilePhoto = async (image: string | undefined) => {
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
