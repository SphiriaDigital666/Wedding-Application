'use server';
import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import { PreferenceSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

export const updatePreference = async (
  values: z.infer<typeof PreferenceSchema>
) => {
  const user = await currentUser();

  if (!user) {
    return { error: 'Unauthorized' };
  }

  // const validatedFields = PreferenceSchema.safeParse(values);

  // if (!validatedFields.success) {
  //   return { error: 'Invalid fields!' };
  // }

  const userPreference = await db.preference.findFirst({
    where: {
      userId: user.id,
    },
  });

  if (!userPreference) {
    return { error: 'User does not have a preference to update' };
  }

  await db.preference.update({
    where: {
      id: userPreference.id,
    },
    data: values,
  });

  revalidatePath('/partner-preferences');
  return { success: 'Updated preference successfully!' };
};
