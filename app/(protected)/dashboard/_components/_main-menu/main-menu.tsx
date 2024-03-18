'use client';
import React from 'react'
import ProfilePending from './profile-pending'
import DailyRecommendations from './daily-recommendations';
import CompleteProfile from './complete-profile';
import EnrichProfile from './enrich-profile';
import MatchesViewed from './matches-viewed';

const MainMenu = () => {
  return (
    <div className='flex flex-col'>
        <ProfilePending />
        <DailyRecommendations />
        <CompleteProfile />
        <EnrichProfile />
        <MatchesViewed />
    </div>
  )
}

export default MainMenu