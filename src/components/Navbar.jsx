import React from 'react';
import { Terminal } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinks = [
    { to: '/',        label: 'Home' },
    { to: '/about',   label: 'About Me' },
    { to: '/projects',label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="p-5 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center border-b border-slate-800 px-6 md:px-12">
      <Link
        to="/"
        className="text-xl font-bold tracking-wider text-emerald-400 flex items-center gap-2 hover:text-emerald-300 transition"
      >
        <Terminal size={22} /> RYAN FEBRIANTO
      </Link>

      <div className="flex gap-6 md:gap-8 text-sm font-medium">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              isActive
                ? 'text-emerald-400 font-semibold'
                : 'text-slate-400 hover:text-emerald-400 transition'
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
