"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'



export default function Navigation() {
  const currentPath = usePathname();
  return (
    <div className="navbar blue-border bg-base-100">
      <div className="flex-1 justify-between px-10">
        <Link className="font-bold text-xl bg-[#fdff00] p-2" href="/">Andy's Portfolio </Link>
        <ul className="menu menu-vertical text-lg lg:menu-horizontal">
          <li><Link href="/experience" className={currentPath === "/experience" ? "text-red-500 font-semibold" : "text-red-600"}>Experience</Link></li>
          <li><Link href="/projects" className={currentPath === "/projects" ? "text-green-500 font-semibold" : "text-green-600"}>Projects</Link></li>
          <li><Link href="/about" className={currentPath === "/about" ? "text-blue-500 font-semibold" : "text-blue-600"}>About</Link></li>
        </ul>
      </div>
    </div>
  )
}

//commit