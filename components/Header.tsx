"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const heroRoutes = ["/", "/Meetings", "/workshop", "/projects"];
  const isHeroPage = heroRoutes.includes(pathname);

  return (
    <header className={`site-header ${isHeroPage ? "hero-header" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
      <div className="site-header-inner">
        <Link href="/" className="site-logo">
          <img src="/images/new_logo_transparent-small.png" alt="WISCO SAC" className="site-logo-image" />
        </Link>

        {/* 1. Burger Button */}
        <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? "icon-close" : "icon-bar"}></span>
          <span className={menuOpen ? "" : "icon-bar"}></span>
          <span className={menuOpen ? "" : "icon-bar"}></span>
        </button>

        {/* 2. Nav with Conditional Open Class */}
        <nav className={`site-nav ${menuOpen ? "active" : ""}`}>
          <Link href="/team" className="site-nav-link">Leadership</Link>
          <Link href="/Meetings" className="site-nav-link">Meetings</Link>

          <div 
            className="nav-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle for mobile
          >
            <span className="site-nav-link">Resources ▾</span>
            {(dropdownOpen || menuOpen) && ( // Show inline on mobile
              <div className="dropdown-menu">
                <Link href="/resources" className="dropdown-item">Resources</Link>
                <Link href="/what-is-sports-analytics" className="dropdown-item">What is Sports Analytics</Link>
                <Link href="/calendar" className="dropdown-item">Calendar</Link>
              </div>
            )}
          </div>

          <Link href="/workshop" className="site-nav-link">Workshops</Link>
          <Link href="/projects" className="site-nav-link">Projects</Link>
        </nav>
      </div>
    </header>
  );
}
