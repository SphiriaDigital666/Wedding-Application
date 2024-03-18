'use server';

import { auth } from '@/auth';
import { calculateCompatibility } from '@/helpers/calculate-compatibility';
import db from '@/lib/db';

export async function fetchAllMatches(page: number) {
  try {
    const session = await auth();

    const currentUserId = session?.user.id;
    const allUsers = await db.userProfile.findMany({
      skip: (page - 1) * 10,
      take: 10,
    });

    // Fetch the current user's profile
    const currentUserProfile = await db.userProfile.findFirst({
      where: {
        userId: currentUserId,
      },
      include: {
        preference: true,
      },
    });

    // Fetch hidden match IDs
    const hiddenMatches = await db.hiddenMatch.findMany({
      where: {
        userId: currentUserId,
      },
    });

    // Calculate compatibility scores for all profiles
    const compatibilityScores = await Promise.all(
      allUsers
        .filter((profile) => profile.id !== currentUserProfile?.id)
        .filter(
          (profile) =>
            !hiddenMatches.some(
              (hiddenMatch) => hiddenMatch.matchId === profile.id
            )
        )
        // TODO: uncomment bellow on production
        // .filter((profile) => {
        //   // Check gender compatibility based on user preferences
        //   if (
        //     currentUserProfile?.preference &&
        //     currentUserProfile.preference.length > 0
        //   ) {
        //     const userGender = currentUserProfile.gender;
        //     const partnerGender = profile.gender;

        //     return userGender !== partnerGender;
        //   }

        //   return true; // If no preference is set, include all genders
        // })
        .map(async (profile) => {
          // Fetch the profile's profile details
          const userProfile = await db.userProfile.findFirst({
            where: {
              id: profile.id,
            },
          });

          // Calculate compatibility score
          // @ts-ignore
          const score = calculateCompatibility(currentUserProfile, userProfile);

          return { profile, score };
        })
    );

    // Sort potential partners by compatibility score
    const potentialPartners = compatibilityScores.sort(
      (a, b) => b.score - a.score
    );

    // Get the top N recommendations (adjust N based on your preference)
    const topRecommendations = potentialPartners.slice(0, 10);
    return topRecommendations;
  } catch (error) {
    // return { error: 'Failed to fetch recommendations' };
  }
}
