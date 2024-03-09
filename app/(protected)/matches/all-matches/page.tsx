import { auth } from '@/auth';
import { calculateCompatibility } from '@/helpers/calculate-compatibility';
import db from '@/lib/db';
import { MatchCard } from '../_component/match-card';

export default async function AllMatchesPage() {
  const session = await auth();

  const currentUserId = session?.user.id;
  const allUsers = await db.userProfile.findMany();

  // Fetch the current user's profile
  const currentUserProfile = await db.userProfile.findFirst({
    where: {
      userId: currentUserId,
    },
    include: {
      preference: true,
    },
  });

  // Calculate compatibility scores for all profiles
  const compatibilityScores = await Promise.all(
    allUsers
      .filter((profile) => profile.id !== currentUserProfile?.id) // Exclude the current profile
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


  return (
    <div className='col-span-6 '>
      {topRecommendations.map(({ profile }) => (
        <div key={profile.id}>
          <MatchCard match={profile} />
        </div>
      ))}
    </div>
  );
}
