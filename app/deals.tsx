import { BriefcaseBusiness, ChevronDownIcon, ChevronRight } from "lucide-react";
import { DealSkeleton } from "./skeletons";
import DealItem from "./deal-item";

export default function Deals() {
  //fetch all the deals of a user, should display skeleton
  //map through the deals, return deal item
  //a deal item should be a collapsible 
  return (
    <aside className="min-w-0 max-w-full h-full bg-white rounded-2xl">
      <div className="px-4 py-2 border-b border-gray-200">
        <h1 className="text-base font-medium">Deals</h1>
      </div>
      <ul className="p-4 max-w-full">
        {/* <DealSkeleton /> */}
        <DealItem />
        <DealItem />
        <DealItem />
        <DealItem />
      </ul>
    </aside>
  )
}