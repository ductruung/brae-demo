import Link from "next/link";
import Image from "next/image";

export interface WorkflowItem {
  title: string;
  description: string;
  link: string;
  img: string;
}

interface WorkflowCardProps {
  item: WorkflowItem;
}

export default function WorkflowCard({ item }: WorkflowCardProps) {
  return (
    <Link
      href={item.link}
      className="border border-gray-200 pb-8 w-full rounded-2xl space-y-4"
    >
      <Image
        src={item.img}
        height={256}
        width={400}
        alt={item.title}
        className="rounded-2xl w-full h-64 object-cover"
      />
      <div className="px-4 space-y-2">
        <h1 className="font-medium">{item.title}</h1>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    </Link>
  )
}