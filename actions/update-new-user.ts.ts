'use server';
import { auth } from '@/auth';
import { getUserById } from '@/data/user';
import db from '@/lib/db';

export const updateNewUserStatus = async () => {
  const session = await auth();

  const existingUser = await getUserById(session?.user.id!);

  if (!existingUser) {
    return { error: 'User not found!' };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: { isNewUser: false },
  });

  return { success: 'Reset email sent!' };
};
