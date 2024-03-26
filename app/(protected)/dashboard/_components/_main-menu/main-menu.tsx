import React from 'react'
import ProfilePending from './profile-pending'
import DailyRecommendations from './daily-recommendations';
import CompleteProfile from './complete-profile';
import EnrichProfile from './enrich-profile';
import MatchesViewed from './matches-viewed';
import { fetchAllMatches } from '@/actions/matches/fetch-matches';
import db from '@/lib/db';


const MainMenu = async () => {

  const allUsers = await db.userProfile.findMany({});
  return (
    <div className='flex flex-col'>
        <ProfilePending />
        <DailyRecommendations users={allUsers} />
        <CompleteProfile />
        <EnrichProfile />
        <MatchesViewed />
    </div>
  )
}

export default MainMenu