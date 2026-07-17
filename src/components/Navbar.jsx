'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, ChevronDown, User, Code2, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [aboutOpen, setAboutOpen]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const aboutActive = pathname === '/about' || pathname === '/skills';

  const navLinks = [
    { href: '/',         label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact',  label: 'Contact' },
  ];

  return (
    <>
      <nav className="p-5 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center border-b border-slate-800 px-6 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-base md:text-xl font-bold tracking-wider text-emerald-400 flex items-center gap-2 hover:text-emerald-300 transition"
        >
          <Terminal size={20} /> RYAN FEBRIANTO
        </Link>

        {/* ── Desktop Nav links ───────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-6 md:gap-8 text-sm font-medium">

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

        {/* ── Hamburger button (mobile only) ─────────────────────────── */}
        <button
          id="nav-mobile-toggle"
          className="md:hidden text-slate-400 hover:text-emerald-400 transition p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile Drawer ─────────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-slate-950 border-l border-slate-800 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
          <Link href="/" className="text-sm font-bold text-emerald-400 flex items-center gap-2">
            <Terminal size={18} /> RYAN FEBRIANTO
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-slate-400 hover:text-white transition"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col py-4 px-4 gap-1 flex-1 overflow-y-auto">

          <MobileNavLink href="/" label="Home" pathname={pathname} />

          {/* About Me group */}
          <div className="mt-2 mb-1 px-3">
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">About</p>
          </div>
          <MobileNavLink href="/about"  label="Profile"            icon={<User size={14} />}  pathname={pathname} />
          <MobileNavLink href="/skills" label="Skills & Technology" icon={<Code2 size={14} />} pathname={pathname} />

          <div className="mt-3 mb-1 px-3">
            <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Work</p>
          </div>
          <MobileNavLink href="/projects" label="Projects" pathname={pathname} active={pathname === '/projects' || pathname.startsWith('/projects/')} />
          <MobileNavLink href="/contact"  label="Contact"  pathname={pathname} />
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-slate-800">
          <p className="text-[11px] text-slate-600">© 2026 Ryan Febrianto</p>
        </div>
      </div>
    </>
  );
}

/* ── Helper: mobile nav link ─────────────────────────────────────────────── */
function MobileNavLink({ href, label, icon, pathname, active }) {
  const isActive = active !== undefined ? active : pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
        isActive
          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
          : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
      }`}
    >
      {icon && <span className="text-emerald-400/70">{icon}</span>}
      {label}
    </Link>
  );
}
