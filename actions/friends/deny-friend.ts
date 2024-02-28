'use server';
import { auth } from '@/auth';
import db from '@/lib/db';

export const denyFriend = async (idToDeny: string) => {
  const session = await auth();

  if (!session) {
    return { error: 'Unauthorized' };
  }

  const friendRequestToDelete = await db.friendRequest.findFirst({
    where: {
      senderId: idToDeny,
    },
  });

  if (!friendRequestToDelete) {
    return { error: 'Friend request not found' };
  }

  await db.friendRequest.delete({
    where: {
      id: friendRequestToDelete.id,
    },
  });

  return { success: 'Friend request deleted!' };
};
