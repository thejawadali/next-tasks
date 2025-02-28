import Link from "next/link"
import React from "react"

export default function NavItem({ active, href, label, icon }: { active?: boolean, href: string, label: string, icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`flex items-center dark:text-zinc-400 relative gap-x-3 justify-center ${active ? 'bg-zinc-100 dark:bg-zinc-700' : 'dark:hover:bg-zinc-700 hover:bg-zinc-100'} w-full py-2`}
    >
      {icon}
      {label}
      {active && (
        <div className="absolute w-1 inset-y-0 -right-[1px] bg-teal-600 dark:bg-teal-500 rounded-l" />
      )}
    </Link>
  );
}
