"use client"
import { usePathname } from "next/navigation";
import { parsePathname } from "./utils/pathname";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MainHeader() {
  const pathname = usePathname();

  switch (pathname) {
    case "/":
      return (
      <div className="px-4 py-2 border-b border-gray-200">
        <h1 className="text-base font-medium">Assistant</h1>
       </div>);
    case "/workflows":
      return (
        <div className="px-4 py-2 border-b border-gray-200">
          <h1 className="text-base font-medium">Workflows</h1>
       </div>);
    case "/matrices":
      return (
        <div className="px-4 py-2 border-b border-gray-200">
          <h1 className="text-base font-medium">Matrices</h1>
        </div>);
    case "/files":
      return (
        <div className="px-4 py-2 border-b border-gray-200">
          <h1 className="text-base font-medium">Files</h1>
        </div>);
    case "/workflows/deal-situation-overview":
      return (
        <div className="flex px-4 py-2 border-b border-gray-200">
          <Link href="/workflows">Workflows</Link>
          <ChevronRight />
          <h1 className="text-base font-medium">Deal situation overview</h1>
        </div>);
  }
}