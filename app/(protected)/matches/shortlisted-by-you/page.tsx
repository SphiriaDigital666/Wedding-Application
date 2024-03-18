import { currentUser } from '@/lib/auth';
import db from '@/lib/db';
import { MatchCard } from '../_component/match-card';

export default async function ShortlistedMatchesPage() {
  const user = await currentUser();

  // Fetch hidden match IDs
  const hiddenMatches = await db.hiddenMatch.findMany({
    where: {
      userId: user?.id,
    },
  });

  const matches = await db.shortlistedPartner.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      partnerProfile: true,
    },
  });

  const matchesToView = matches.filter(
    (match) =>
      !hiddenMatches.some(
        (hiddenMatch) => hiddenMatch.matchId === match.partnerId
      )
  );

  if (matchesToView.length === 0) {
    return (
      <div className=' p-4 col-span-6 text-center text-gray-500'>
        <p>No shortlisted matches found.</p>
      </div>
    );
  }

  return (
    <div className='col-span-6 '>
      {matchesToView.map((match) => (
        <div key={match.id}>
          <MatchCard match={match.partnerProfile!} />
        </div>
      ))}
    </div>
  );
}
