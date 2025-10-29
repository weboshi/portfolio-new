"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from 'react';

export default function Navigation() {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar blue-border bg-base-100">
      {/* Red divider inside navbar for mobile */}
      <div className="navbar-red-divider lg:hidden"></div>

      <div className="flex-1 justify-between px-10">
        <Link className="font-bold text-xl bg-[#fdff00] p-2" href="/">Andy's Portfolio </Link>

        {/* Burger icon for mobile */}
        <button
          className="burger-icon lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </button>

        {/* Desktop menu - hidden on mobile */}
        <ul className="menu menu-vertical text-lg lg:menu-horizontal hidden lg:flex">
          <li><Link href="/experience" className={currentPath === "/experience" ? "text-red-600 underline underline-offset-4" : "text-red-600 hover:underline hover:underline-offset-4"}>Experience</Link></li>
          <li><Link href="/projects" className={currentPath === "/projects" ? "text-green-600 underline underline-offset-4" : "text-green-600 hover:underline hover:underline-offset-4"}>Projects</Link></li>
          <li><Link href="/designs" className={currentPath === "/designs" ? "text-purple-600 underline underline-offset-4" : "text-purple-600 hover:underline hover:underline-offset-4"}>Designs</Link></li>
          <li><Link href="/about" className={currentPath === "/about" ? "text-blue-600 underline underline-offset-4" : "text-blue-600 hover:underline hover:underline-offset-4"}>About Me</Link></li>
        </ul>

        {/* Mobile menu drawer */}
        <div className={`mobile-nav-drawer lg:hidden ${isMenuOpen ? 'open' : ''}`}>
          <button
            className="drawer-close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul>
            <li><Link href="/experience" onClick={() => setIsMenuOpen(false)} className={currentPath === "/experience" ? "text-red-600 underline underline-offset-4" : "text-red-600 hover:underline hover:underline-offset-4"}>Experience</Link></li>
            <li><Link href="/projects" onClick={() => setIsMenuOpen(false)} className={currentPath === "/projects" ? "text-green-600 underline underline-offset-4" : "text-green-600 hover:underline hover:underline-offset-4"}>Projects</Link></li>
            <li><Link href="/designs" onClick={() => setIsMenuOpen(false)} className={currentPath === "/designs" ? "text-purple-600 underline underline-offset-4" : "text-purple-600 hover:underline hover:underline-offset-4"}>Designs</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className={currentPath === "/about" ? "text-blue-600 underline underline-offset-4" : "text-blue-600 hover:underline hover:underline-offset-4"}>About Me</Link></li>
          </ul>
        </div>

        {/* Overlay */}
        {isMenuOpen && <div className="mobile-overlay lg:hidden" onClick={() => setIsMenuOpen(false)}></div>}
      </div>
    </div>
  )
}