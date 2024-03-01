import { User } from '@prisma/client';
import { FC } from 'react';
import useActiveList from '../hooks/useActiveList';

interface ActiveIndicatorProps {
  isActive: boolean;
}

export const ActiveIndicator: FC<ActiveIndicatorProps> = ({ isActive }) => {

  if (!isActive) return null
    return (
      <>
        <div className='relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11'></div>
        <span className='absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3' />
        <span
          className='
            absolute 
            block 
            rounded-full 
            bg-green-500 
            ring-2 
            ring-white 
            top-0 
            right-0
            h-2 
            w-2 
            md:h-3 
            md:w-3
          '
        />
      </>
    );
};
