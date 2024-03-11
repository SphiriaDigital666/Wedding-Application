'use client';

import { fetchAllMatches } from '@/actions/matches/fetch-matches';
import { Spinner } from '@/components/ui/spinner';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MatchCard } from '../../_component/match-card';

export const LoadMore = () => {
  const [matches, setMatches] = useState<TopRecommendation[]>([]);
  const [page, setPage] = useState(1);
  const [hasMoreMatches, setHasMoreMatches] = useState(true);

  const { ref, inView } = useInView();

  const loadMoreMatches = async () => {
    if (!hasMoreMatches) return;

    // Once the page 8 is reached repeat the process all over again.
    const nextPage = page + 1;
    const newMatches = (await fetchAllMatches(nextPage)) ?? [];

    // Check if there are more matches
    if (newMatches.length === 0) {
      setHasMoreMatches(false);
    }

    // @ts-ignore
    setMatches((prevMatches: TopRecommendation[]) => [
      ...prevMatches,
      ...newMatches,
    ]);
    setPage(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreMatches();
    }
  }, [inView]);

  return (
    <>
      {/* @ts-ignore */}
      {matches?.map(({ profile }) => (
        <div key={profile.id}>
          <MatchCard match={profile} />
        </div>
      ))}
      {hasMoreMatches && (
        <div
          className='flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3'
          ref={ref}
        >
          <Spinner />
        </div>
      )}
      {!hasMoreMatches && (
        <div className='flex justify-center items-center p-4 col-span-full text-gray-500'>
          No more matches to display.
        </div>
      )}
    </>
  );
};
