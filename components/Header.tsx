"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isHeroPage =
    pathname === "/" ||
    pathname == ("/Meetings") ||
    pathname == ("/workshop") ||
    pathname == ("/projects");

  return (
    <header className={`site-header ${isHeroPage ? "hero-header" : ""}`}>
      <div className="site-header-inner">
        <Link href="/" className="site-logo">
          <img
            src="/images/new_logo_transparent.png"
            alt="WISCO SAC"
            className="site-logo-image"
          />
        </Link>

        <nav className="site-nav">
          <Link href="/team" className="site-nav-link">
            Leadership
          </Link>

          <Link href="/Meetings" className="site-nav-link">
            Meetings
          </Link>

          {/* Resources dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link href="/resources" className="site-nav-link">
              Resources ▾
            </Link>

            {open && (
              <div className="dropdown-menu">
                <Link href="/resources" className="dropdown-item">
                  Resources
                </Link>

                <Link
                  href="/what-is-sports-analytics"
                  className="dropdown-item"
                >
                  What is Sports Analytics
                </Link>

                <Link href="/calendar" className="dropdown-item">
                  Calendar
                </Link>
              </div>
            )}
          </div>

          <Link href="/workshop" className="site-nav-link">
            Workshops
          </Link>

          <Link href="/projects" className="site-nav-link">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}