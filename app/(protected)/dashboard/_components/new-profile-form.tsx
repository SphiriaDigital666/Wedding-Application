'use client';
import { Button } from '@/components/ui/button';
import useProfileModal from '@/hooks/useProfileModal';
import { ExtendedUser } from '@/next-auth';
import { User } from '@prisma/client';
import { FC, useEffect, useState } from 'react';

interface NewProfileFormProps {
  user: User;
}

// ... (other imports)

export const NewProfileForm: FC<NewProfileFormProps> = ({ user }) => {
  const profileModal = useProfileModal();
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    // Open the modal automatically when isNewUser is true and the modal hasn't been opened yet
    if (user.isNewUser && !modalOpened) {
      profileModal.onOpen();
      setModalOpened(true);
    }
    if(!user.isNewUser){
      profileModal.onClose();
    }
  }, [profileModal, user.isNewUser, modalOpened]);

  return (
    <div className="h-screen flex justify-center items-center bg-rose-300">
      <Button onClick={profileModal.onOpen}>Create New Profile</Button>
    </div>
  );
};
