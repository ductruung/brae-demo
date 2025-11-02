export function DealSkeleton() {
  return (
    <div className="flex p-4 gap-4">
      {/**Icon */}
      <div className="size-[24px] bg-green-500"></div>
      <div className="w-full pr-4 space-y-1">
        <div className="bg-orange-500 h-[16px] w-full"></div>
        <div className="bg-blue-500 w-[42px] h-[8px]"></div>
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