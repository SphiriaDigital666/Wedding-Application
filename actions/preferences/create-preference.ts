'use server'
import { auth } from '@/auth';
import db from '@/lib/db';
import { PreferenceSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

export const createPreference = async (
  values: z.infer<typeof PreferenceSchema>
) => {
  const session = await auth();

  if (!session) {
    return { error: 'Unauthorized' };
  }

  console.log(values)

  const userPreference = await db.preference.findFirst({
    where: {
      userId: session.user.id,
    },
  });

  if (userPreference) {
    return { error: 'User already has a preference' };
  }

  await db.preference.create({
    data: {
      ...values,
      userId: session.user.id!,
    },
  });

  revalidatePath('/partner-preferences');
  return { success: 'Preference created successfully!' };
};
