"use client"

import { BookOpen, BriefcaseBusiness, ChevronDown, ChevronRight, Globe, List, SearchCheck } from "lucide-react";
import Link from "next/link";
import { Tooltip } from "radix-ui";
import { Collapsible } from "radix-ui";
import { useState } from "react";

export default function DealItem() {
  const [open, setOpen] = useState(false);
  const dealModules = [
    {
      name: "Deal overview",
      icon: <Globe className="size-[20px]" strokeWidth={1.5}/>,
      link: "/deal-name/deal-overview"
    },
    {
      name: "Buyers list",
      icon: <List className="size-[20px]" strokeWidth={1.5}/>,
      link: "/deal-name/buyers-list"
    },
    {
      name: "Due diligence",
      icon: <SearchCheck className="size-[20px]" strokeWidth={1.5}/>,
      link: "/deal-name/due-diligence"
    },
    {
      name: "CIM storyline",
      icon: <BookOpen className="size-[20px]" strokeWidth={1.5}/>,
      link: "/deal-name/cim-storyline"
    }
  ]
  return (
    <li>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Collapsible.Root open={open} onOpenChange={setOpen}>
              <Collapsible.Trigger asChild>
                <div className="grid grid-cols-[auto_minmax(0,auto)_auto] p-4 w-full h-[64px] hover:bg-gray-100 rounded-lg cursor-pointer">
                  <BriefcaseBusiness className="my-auto size-[24px]" strokeWidth={1.5} />
                  <div className="-space-y-3 px-4">
                    <h1 className="truncate text-sm">Item name that is very long</h1>
                    <Tooltip.Portal>
                      <Tooltip.Content className="bg-gray-800 text-white text-xs p-1 px-2 rounded-sm">
                        Item name that is very long
                      </Tooltip.Content>
                    </Tooltip.Portal>

                    <time className="text-[10px] truncate text-gray-500" dateTime="2025-10-16T00:00+07:00">16/10/2025</time>
                  </div>
                  {open ? <ChevronDown className="my-auto size-[16px]" /> : <ChevronRight className="my-auto size-[16px]" />}
                </div>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <ul className="pl-3.5 pr-4 space-y-1">
                  {dealModules.map(module => (
                    <li key={module.name}>
                      <Link className="flex items-center gap-4 p-1 hover:bg-gray-100 rounded-lg" href={module.link}>
                        {module.icon}
                        <h2 className="text-sm">{module.name}</h2>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Collapsible.Content>
            </Collapsible.Root>
          </Tooltip.Trigger>
        </Tooltip.Root>
      </Tooltip.Provider>
    </li>
  )
}