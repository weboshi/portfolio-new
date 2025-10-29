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
          <li><Link href="/experience" className={currentPath === "/experience" ? "text-red-500 font-semibold" : "text-red-600"}>Experience</Link></li>
          <li><Link href="/projects" className={currentPath === "/projects" ? "text-green-500 font-semibold" : "text-green-600"}>Projects</Link></li>
          <li><Link href="/design" className={currentPath === "/design" ? "text-purple-500 font-semibold" : "text-purple-600"}>Designs</Link></li>
          <li><Link href="/about" className={currentPath === "/about" ? "text-blue-500 font-semibold" : "text-blue-600"}>About Me</Link></li>
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
            <li><Link href="/experience" onClick={() => setIsMenuOpen(false)} className={currentPath === "/experience" ? "text-red-500 font-semibold" : "text-red-600"}>Experience</Link></li>
            <li><Link href="/projects" onClick={() => setIsMenuOpen(false)} className={currentPath === "/projects" ? "text-green-500 font-semibold" : "text-green-600"}>Projects</Link></li>
            <li><Link href="/design" onClick={() => setIsMenuOpen(false)} className={currentPath === "/design" ? "text-purple-500 font-semibold" : "text-purple-600"}>Designs</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)} className={currentPath === "/about" ? "text-blue-500 font-semibold" : "text-blue-600"}>About Me</Link></li>
          </ul>
        </div>

        {/* Overlay */}
        {isMenuOpen && <div className="mobile-overlay lg:hidden" onClick={() => setIsMenuOpen(false)}></div>}
      </div>
    </div>
  )
}