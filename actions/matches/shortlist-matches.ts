'use server';

import { auth } from '@/auth';
import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const shortlistMatch = async (matchToShortlist: string) => {
  try {
    const session = await auth();

    if (!session) {
      return { error: 'Unauthorized' };
    }

    await db.shortlistedPartner.create({
      data: {
        userId: session?.user.id!,
        partnerId: matchToShortlist,
      },
    });

    revalidatePath('/matches/*');
    revalidatePath(`/profile/${matchToShortlist}`);
    return { success: 'This match has been shortlisted!' };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong. Please try again!' };
  }
};

export const removeShortlist= async (matchId: string) => {
  try {
    const session = await auth();

    if (!session) {
      return { error: 'Unauthorized' };
    }

    const shortListToRemove = await db.shortlistedPartner.findFirst({
      where: {
        userId: session?.user.id!,
        partnerId: matchId,
      },
    });

    if (!shortListToRemove) {
      return { error: 'Shortlisted match to remove not found' };
    }

    await db.shortlistedPartner.delete({
      where: {
        id: shortListToRemove.id,
      },
    });

    revalidatePath('/matches/*');
    revalidatePath(`/profile/${matchId}`);
    return { success: 'Match removed from shortlist!' };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong. Please try again!' };
  }
};
