'use server';
import { currentUser } from '@/lib/auth';
import db from '@/lib/db';


import { revalidatePath } from 'next/cache';

export const updateImages = async (newImage: string) => {
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
      images: { push: newImage },
    },
  });

  revalidatePath('/profile');
  return { success: 'Profile images updated successfully!' };
};

export const removeImage = async (index: number) => {
  const user = await currentUser();

  const userProfile = await db.userProfile.findFirst({
    where: {
      userId: user?.id,
    },
  });

  if (!userProfile) {
    return { error: 'User profile not found!' };
  }

  const updatedImages = userProfile.images.filter((_, i) => i !== index);

  await db.userProfile.update({
    where: {
      id: userProfile.id,
    },
    data: {
      images: updatedImages,
    },
  });



  revalidatePath('/profile');
  return { success: 'Image removed successfully!' };
};
