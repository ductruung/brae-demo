import Image from "next/image";

export default function Workflows() {
  return (
    <div className="grid grid-cols-3 p-4 gap-4 w-full rounded-2xl">
      <div className="border border-gray-200 pb-8 w-full rounded-2xl space-y-4">
        <Image 
          src="/deal-situation-overview-illustration.jpg"
          height={256}
          width={400}
          alt=""
          className="rounded-2xl w-full"
        />
        <div className="px-4 space-y-2">
        <h1 className="font-medium">Deal situation overview</h1>
        <p className="text-sm">Summarize core details of a deal, including transaction type, target profile, client’s objectives, and milestones.</p>
        </div>
      </div>
    </div>
  )
}