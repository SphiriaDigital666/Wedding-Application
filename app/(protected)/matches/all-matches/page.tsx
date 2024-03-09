import { auth } from '@/auth';
import { calculateCompatibility } from '@/helpers/calculate-compatibility';
import db from '@/lib/db';
import { MatchCard } from '../_component/match-card';

export default async function AllMatchesPage() {
  const session = await auth();

  const currentUserId = session?.user.id;
  const allUsers = await db.userProfile.findMany(); // Assuming 'prisma' is your Prisma client instance

  // Fetch the current user's profile
  const currentUseProfile = await db.userProfile.findFirst({
    where: {
      userId: currentUserId,
    },
    include: {
      preference: true,
    },
  });

  // Calculate compatibility scores for all users
  const compatibilityScores = await Promise.all(
    allUsers
      .filter((profile) => profile.id !== currentUseProfile?.id) // Exclude the current profile
      .map(async (profile) => {
        // Fetch the profile's profile details
        const userProfile = await db.userProfile.findFirst({
          where: {
            id: profile.id,
          },
        });

        // Calculate compatibility score
        const score = calculateCompatibility(currentUseProfile, userProfile);

        return { profile, score };
      })
  );

  // Sort potential partners by compatibility score
  const potentialPartners = compatibilityScores.sort(
    (a, b) => b.score - a.score
  );

  // Get the top N recommendations (adjust N based on your preference)
  const topRecommendations = potentialPartners.slice(0, 10);

  // Output the top recommendations
  console.log('Top Recommendations:', topRecommendations);

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
