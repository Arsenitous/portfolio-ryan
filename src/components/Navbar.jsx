'use client';

import React, { useState } from 'react';
import { Terminal, ChevronDown, User, Code2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();

  // "About" dropdown is "active" if on /about or /skills
  const aboutActive = pathname === '/about' || pathname === '/skills';

  return (
    <nav className="p-5 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center border-b border-slate-800 px-6 md:px-12">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold tracking-wider text-emerald-400 flex items-center gap-2 hover:text-emerald-300 transition"
      >
        <Terminal size={22} /> RYAN FEBRIANTO
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-6 md:gap-8 text-sm font-medium">

        {/* Home */}
        <Link
          href="/"
          className={
            pathname === '/'
              ? 'text-emerald-400 font-semibold'
              : 'text-slate-400 hover:text-emerald-400 transition'
          }
        >
          Home
        </Link>

        {/* About Me — dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button
            id="nav-about-dropdown"
            className={`flex items-center gap-1 transition ${
              aboutActive
                ? 'text-emerald-400 font-semibold'
                : 'text-slate-400 hover:text-emerald-400'
            }`}
          >
            About Me
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown panel — pt-2 bridges the gap so hover stays active */}
          <div className={`absolute right-0 top-full pt-2 w-52 transition-all duration-200 ${
            aboutOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-1 pointer-events-none'
          }`}>
            <div className="bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
              {[
                { href: '/about',  label: 'Profile',            icon: <User size={13} /> },
                { href: '/skills', label: 'Skills & Technology', icon: <Code2 size={13} /> },
              ].map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2.5 px-4 py-3 text-xs font-medium transition-colors ${
                    pathname === href
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <span className="text-emerald-400/70">{icon}</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <Link
          href="/projects"
          className={
            pathname === '/projects' || pathname.startsWith('/projects/')
              ? 'text-emerald-400 font-semibold'
              : 'text-slate-400 hover:text-emerald-400 transition'
          }
        >
          Projects
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          className={
            pathname === '/contact'
              ? 'text-emerald-400 font-semibold'
              : 'text-slate-400 hover:text-emerald-400 transition'
          }
        >
          Contact
        </Link>

      </div>
    </nav>
  );
}
