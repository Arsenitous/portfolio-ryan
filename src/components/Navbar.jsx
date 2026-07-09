import React from 'react';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="p-5 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center border-b border-slate-800 px-6 md:px-12">
      <h1 className="text-xl font-bold tracking-wider text-emerald-400 flex items-center gap-2">
        <Terminal size={22} /> RYAN FEBRIANTO
      </h1>
      <div className="flex gap-6 md:gap-8 text-sm font-medium text-slate-400">
        <a href="#home"     className="hover:text-emerald-400 transition">Home</a>
        <a href="#about"    className="hover:text-emerald-400 transition">About Me</a>
        <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
        <a href="#contact"  className="hover:text-emerald-400 transition">Contact</a>
      </div>
    </nav>
  );
}
