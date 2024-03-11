import { fetchAllMatches } from '@/actions/matches/fetch-matches';
import { MatchCard } from '../_component/match-card';
import { LoadMore } from './_components/load-more';

export default async function AllMatchesPage() {
  const topRecommendations: TopRecommendation = await fetchAllMatches(1);

  return (
    <div className='col-span-6 '>
      {topRecommendations?.map(({ profile }) => (
        <div key={profile.id}>
          <MatchCard match={profile} />
        </div>
      ))}
      <LoadMore/>
    </div>
  );
}
