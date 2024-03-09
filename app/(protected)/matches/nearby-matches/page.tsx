import db from '@/lib/db';
import { MatchCard } from '../_component/match-card';
import { auth } from '@/auth';

export default async function NearbyMatchesPage() {
  const session = await auth();

  const currentUserId = session?.user.id;

  const currentUserProfile = await db.userProfile.findFirst({
    where: {
      userId: currentUserId,
    },
    include: {
      preference: true,
    },
  });

  const matches = await db.userProfile.findMany({
    where: {
      id: {
        not: currentUserProfile?.id,
      },
      city: currentUserProfile?.city,
      state: currentUserProfile?.state,
      // TODO: Uncomment bellow on production
      // gender: {
      //   not:currentUserProfile?.gender
      // }
    },
  });
  return (
    <div className='col-span-6 '>
      {matches.map((match) => (
        <div key={match.id}>
          <MatchCard match={match} />
        </div>
      ))}
    </div>
  );
}
