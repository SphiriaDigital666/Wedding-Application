'use client';

import React, { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface NavigationButtonsProps {
  topRecommendations: TopRecommendation;
}

export const NavigationButtons: FC<NavigationButtonsProps> = ({
  topRecommendations,
}) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const matches = topRecommendations?.map((match) => match.profile.id);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      // Navigate to the previous match
      router.push(`/profile/${matches?.[currentIndex - 1]}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < matches?.length! - 1) {
      setCurrentIndex(currentIndex + 1);
      // Navigate to the next match
      router.push(`/profile/${matches?.[currentIndex + 1]}`);
    }
  };

  return (
    <div className="container flex justify-between">
      <Button onClick={handlePrevious}>Previous</Button>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
};
