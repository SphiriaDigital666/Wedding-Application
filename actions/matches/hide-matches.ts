'use server';

import { auth } from '@/auth';
import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const hideMatch = async (matchToHide: string) => {
  try {
    const session = await auth();

    if (!session) {
      return { error: 'Unauthorized' };
    }

    await db.hiddenMatch.create({
      data: {
        userId: session?.user.id!,
        matchId: matchToHide,
      },
    });

    revalidatePath('/matches/*');
    return { success: 'This match will not show up in future!' };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong. Please try again!' };
  }
};

export const removeHideMatch = async (matchId: string) => {
  try {
    const session = await auth();

    if (!session) {
      return { error: 'Unauthorized' };
    }

    const hiddenMatchToRemove = await db.hiddenMatch.findFirst({
      where: {
        userId: session?.user.id!,
        matchId: matchId,
      },
    });

    if (!hiddenMatchToRemove) {
      return { error: 'Hidden Match to remove not found' };
    }

    await db.hiddenMatch.delete({
      where: {
        id: hiddenMatchToRemove.id,
      },
    });

    revalidatePath('/matches/*');
    return { success: 'Hidden status removed!' };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong. Please try again!' };
  }
};
