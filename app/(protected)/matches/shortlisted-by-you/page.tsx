import db from '@/lib/db';
import { MatchCard } from '../_component/match-card';

export default async function ShortlistedMatchesPage() {
  const matches = await db.userProfile.findMany({});
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
