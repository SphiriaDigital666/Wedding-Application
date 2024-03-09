import db from '@/lib/db';
import { MatchCard } from '../_component/match-card';

export default async function NewMatchesPage() {
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const matches = await db.userProfile.findMany({
    where: {
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
