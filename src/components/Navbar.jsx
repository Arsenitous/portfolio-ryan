import React from 'react';
import { Terminal } from 'lucide-react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScrollLink = (hash) => {
    if (isHome) {
      // Already on home — just scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home first, then scroll after mount
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  return (
    <nav className="p-5 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center border-b border-slate-800 px-6 md:px-12">
      <Link
        to="/"
        className="text-xl font-bold tracking-wider text-emerald-400 flex items-center gap-2 hover:text-emerald-300 transition"
      >
        <Terminal size={22} /> RYAN FEBRIANTO
      </Link>

      <div className="flex gap-6 md:gap-8 text-sm font-medium text-slate-400">
        <Link
          to="/"
          className="hover:text-emerald-400 transition"
        >
          Home
        </Link>

        <button
          onClick={() => handleScrollLink('#about')}
          className="hover:text-emerald-400 transition bg-transparent border-0 cursor-pointer text-slate-400 text-sm font-medium"
        >
          About Me
        </button>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-emerald-400' : 'hover:text-emerald-400 transition'
          }
        >
          Projects
        </NavLink>

        <button
          onClick={() => handleScrollLink('#contact')}
          className="hover:text-emerald-400 transition bg-transparent border-0 cursor-pointer text-slate-400 text-sm font-medium"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
