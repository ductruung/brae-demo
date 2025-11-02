"use client"

import { BotMessageSquare, Files, Grid3x3, Network } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Sidebar() {
  const pathName = usePathname();
  const segments = pathName.split("/");
  console.log(segments);
  const items = [
    {
      name: "Assistant",
      link: "/",
      icon: <BotMessageSquare className="size-[20px]" strokeWidth={1.5} />
    },
    {
      name: "Workflows",
      link: "/workflows",
      icon: <Network className="size-[20px]" strokeWidth={1.5} />
    },
    {
      name: "Matrices",
      link: "/matrices",
      icon: <Grid3x3 className="size-[20px]" strokeWidth={1.5} />
    },
    {
      name: "Files",
      link: "/files",
      icon: <Files className="size-[20px]" strokeWidth={1.5} />
    },
  ];

  return (
    <aside className="w-full h-full bg-white rounded-2xl">
      <div className="px-4 py-2 border-b border-gray-200">
        <h1 className="text-base font-medium">Toolkit</h1>
      </div>
      <ul className="p-4">
        {items.map(item => (
          <li key={item.name}>
            <Link
              className={clsx(
                "p-4 flex gap-4 items-center rounded-lg",
                "/" + segments[1] === item.link ? "bg-gray-200" : "hover:bg-gray-100"
              )}
              href={item.link}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}