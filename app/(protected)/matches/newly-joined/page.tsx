import db from '@/lib/db';
import { MatchCard } from '../_component/match-card';
import { auth } from '@/auth';

export default async function NewMatchesPage() {
  const session = await auth();
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);


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
      createdAt: {
        gte: thirtyDaysAgo,
        lte: currentDate,
      },
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
