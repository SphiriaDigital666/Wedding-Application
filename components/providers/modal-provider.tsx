'use client';

import MessageFileModal from '@/components/modals/message-file-modal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <MessageFileModal />
    </>
  );
};
