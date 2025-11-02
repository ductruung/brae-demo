import DealItem, { Deal } from "./deal-item";
import { DealSkeleton, DealsSkeleton } from "./skeletons";
import { Suspense } from 'react';

async function fetchDeals(): Promise<Deal[]> {
  // TODO: Replace with actual API call
  await new Promise(resolve => setTimeout(resolve, 3000));
  return [
    { name: "Acme Corporation Acquisition", created: new Date("2025-01-15") },
    { name: "TechStart Merger", created: new Date("2025-02-20") },
    { name: "Global Industries Buyout", created: new Date("2025-03-10") },
  ];
}

async function DealItemList() {
  const deals = await fetchDeals();
  
  return (
    <>
      {deals.map((deal, index) => (
        <DealItem key={index} deal={deal} />
      ))}
    </>
  )
}

export default async function Deals() {
  return (
    <aside className="min-w-0 max-w-full h-full bg-white rounded-2xl">
      <div className="px-4 py-2 border-b border-gray-200">
        <h1 className="text-base font-medium">Deals</h1>
      </div>
      <ul className="p-4 max-w-full">
        <Suspense fallback={<DealsSkeleton/>}>
          <DealItemList />
        </Suspense>
      </ul>
    </aside>
  )
}