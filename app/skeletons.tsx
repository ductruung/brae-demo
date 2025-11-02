const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full ' +  
  'before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:animate-[shimmer_2s_infinite]';

export function DealSkeleton() {
  return (
    <div className={`flex p-4 pl-3.5 gap-4 relative overflow-hidden ${shimmer}`}>
      {/**Icon */}
      <div className="w-[38px] bg-gray-200 rounded"></div>
      <div className="w-full pr-4 space-y-1">
        <div className="bg-gray-200 h-[16px] w-full rounded-full"></div>
        <div className="bg-gray-200 w-[42px] h-[8px] rounded-full"></div>
      </div>
    </div>
  )
}

export function DealsSkeleton() {
  return (
    <>
    <DealSkeleton />
    <DealSkeleton />
    <DealSkeleton />
    </>
  );
}