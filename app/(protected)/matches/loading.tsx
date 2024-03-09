import { Skeleton } from '@/components/ui/skeleton';

const LoadingState = () => {
  return (
    <div className='flex-col'>
      <div className='flex gap-x-8 mb-3 w-[400px]'>
        <div>
          <Skeleton className='h-[200px] w-[200px]' />
        </div>
        <div>
          <Skeleton className='h-[10px] w-[150px]' />
          <div className='flex mt-2 gap-x-3 mb-5'>
            <Skeleton className='h-[10px] w-[100px]' />
            <Skeleton className='h-[10px] w-[100px]' />
          </div>
          {[1, 2, 3].map((j) => (
            <ul className='flex gap-4' key={j}>
              <Skeleton className='w-[70px] h-[10px] mb-3' />
              <Skeleton className='w-[80px] h-[10px]' />
              <Skeleton className='w-[80px] h-[10px]' />
              <Skeleton className='w-[70px] h-[10px]' />
            </ul>
          ))}
          <div className='mt-6 space-y-1'>
            <Skeleton className='w-[100px] h-[10px]' />
            <Skeleton className='w-[70px] h-[10px]' />
          </div>
          <div className='flex items-center mt-4 space-x-3'>
            <Skeleton className='w-[70px] h-[20px]' />
            <Skeleton className='w-[70px] h-[20px]' />
          </div>
        </div>
      </div>
      <div className='flex gap-x-8 mb-3 w-[400px]'>
        <div>
          <Skeleton className='h-[200px] w-[200px]' />
        </div>
        <div>
          <Skeleton className='h-[10px] w-[150px]' />
          <div className='flex mt-2 gap-x-3 mb-5'>
            <Skeleton className='h-[10px] w-[100px]' />
            <Skeleton className='h-[10px] w-[100px]' />
          </div>
          {[1, 2, 3].map((j) => (
            <ul className='flex gap-4' key={j}>
              <Skeleton className='w-[70px] h-[10px] mb-3' />
              <Skeleton className='w-[80px] h-[10px]' />
              <Skeleton className='w-[80px] h-[10px]' />
              <Skeleton className='w-[70px] h-[10px]' />
            </ul>
          ))}
          <div className='mt-6 space-y-1'>
            <Skeleton className='w-[100px] h-[10px]' />
            <Skeleton className='w-[70px] h-[10px]' />
          </div>
          <div className='flex items-center mt-4 space-x-3'>
            <Skeleton className='w-[70px] h-[20px]' />
            <Skeleton className='w-[70px] h-[20px]' />
          </div>
        </div>
      </div>
      <div className='flex gap-x-8 mb-3 w-[400px]'>
        <div>
          <Skeleton className='h-[200px] w-[200px]' />
        </div>
        <div>
          <Skeleton className='h-[10px] w-[150px]' />
          <div className='flex mt-2 gap-x-3 mb-5'>
            <Skeleton className='h-[10px] w-[100px]' />
            <Skeleton className='h-[10px] w-[100px]' />
          </div>
          {[1, 2, 3].map((j) => (
            <ul className='flex gap-4' key={j}>
              <Skeleton className='w-[70px] h-[10px] mb-3' />
              <Skeleton className='w-[80px] h-[10px]' />
              <Skeleton className='w-[80px] h-[10px]' />
              <Skeleton className='w-[70px] h-[10px]' />
            </ul>
          ))}
          <div className='mt-6 space-y-1'>
            <Skeleton className='w-[100px] h-[10px]' />
            <Skeleton className='w-[70px] h-[10px]' />
          </div>
          <div className='flex items-center mt-4 space-x-3'>
            <Skeleton className='w-[70px] h-[20px]' />
            <Skeleton className='w-[70px] h-[20px]' />
          </div>
        </div>
      </div>
      <div className='flex gap-x-8 mb-3 w-[400px]'>
        <div>
          <Skeleton className='h-[200px] w-[200px]' />
        </div>
        <div>
          <Skeleton className='h-[10px] w-[150px]' />
          <div className='flex mt-2 gap-x-3 mb-5'>
            <Skeleton className='h-[10px] w-[100px]' />
            <Skeleton className='h-[10px] w-[100px]' />
          </div>
          {[1, 2, 3].map((j) => (
            <ul className='flex gap-4' key={j}>
              <Skeleton className='w-[70px] h-[10px] mb-3' />
              <Skeleton className='w-[80px] h-[10px]' />
              <Skeleton className='w-[80px] h-[10px]' />
              <Skeleton className='w-[70px] h-[10px]' />
            </ul>
          ))}
          <div className='mt-6 space-y-1'>
            <Skeleton className='w-[100px] h-[10px]' />
            <Skeleton className='w-[70px] h-[10px]' />
          </div>
          <div className='flex items-center mt-4 space-x-3'>
            <Skeleton className='w-[70px] h-[20px]' />
            <Skeleton className='w-[70px] h-[20px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
