'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Code2, ChevronRight, Cpu } from 'lucide-react';
import Navbar from '../../components/Navbar';
import { skillCategories } from '../../data';
import { useScrollFade } from '../../hooks/useScrollFade';

/* ── Category icon map ──────────────────────────────────────────────────────── */
const categoryIcons = {
  data:  <Cpu size={28} />,
  web:   <Code2 size={28} />,
  tools: <span className="text-2xl leading-none">🛠️</span>,
};

export default function SkillsPage() {
  useScrollFade();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        {/* ══ HERO HEADER ══════════════════════════════════════════════════ */}
        <section className="relative py-20 px-6 border-b border-slate-800 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 blur-[80px] rounded-full" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #34d399 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-8 fade-up">
              <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
              <ChevronRight size={12} />
              <Link href="/about" className="hover:text-emerald-400 transition">About Me</Link>
              <ChevronRight size={12} />
              <span className="text-slate-300">Skills &amp; Technology</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-4 fade-up fade-delay-1">
              <Code2 size={14} /> Tech Stack
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 fade-up fade-delay-2">
              Skills &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Technology
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 max-w-2xl leading-relaxed fade-up fade-delay-3">
              A collection of technologies, programming languages, and tools I have learned
              and used across various projects, ranging from data analytics and web development
              to machine learning.
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mt-6 fade-up fade-delay-4">
              {skillCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`inline-flex items-center gap-2 ${cat.color.bg} ${cat.color.text} border ${cat.color.border} px-3 py-1.5 rounded-full text-xs font-semibold hover:opacity-80 transition`}
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                  <span className="bg-slate-800/60 rounded-full px-1.5 py-0.5 text-[10px] font-mono text-slate-300">
                    {cat.skills.length}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SKILL CATEGORY SECTIONS ══════════════════════════════════════ */}
        {skillCategories.map((cat, catIdx) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`py-16 px-6 border-b border-slate-800 ${catIdx % 2 === 1 ? 'bg-slate-900/20' : ''}`}
          >
            <div className="max-w-5xl mx-auto">

              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 fade-up">
                <div>
                  <div className={`inline-flex items-center gap-2 ${cat.color.bg} ${cat.color.text} border ${cat.color.border} px-3 py-1 rounded-md text-xs font-mono mb-3`}>
                    <span>{cat.emoji}</span> {cat.label}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                    {cat.label.split(' ')[0]}{' '}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${cat.color.gradient}`}>
                      {cat.label.split(' ').slice(1).join(' ')}
                    </span>
                  </h2>
                  <p className="text-slate-400 text-sm mt-2 max-w-lg">{cat.desc}</p>
                </div>
                <div className={`shrink-0 w-14 h-14 rounded-2xl ${cat.color.bg} border ${cat.color.border} ${cat.color.text} flex items-center justify-center shadow-lg`}>
                  {categoryIcons[cat.id]}
                </div>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.skills.map((skill, skillIdx) => (
                  <div
                    key={skill.name}
                    className={`fade-up fade-delay-${Math.min(skillIdx + 1, 7)} group relative flex items-center gap-3 ${cat.color.bg} border ${cat.color.border} rounded-xl px-4 py-3.5 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden`}
                  >
                    {/* Hover glow */}
                    <div className={`absolute inset-0 ${cat.color.bg} opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm`} />

                    {/* Icon */}
                    {skill.imgUrl
                      ? <img src={skill.imgUrl} alt={skill.name} className="w-6 h-6 shrink-0 object-contain" />
                      : skill.simpleicon
                        ? <img src={`https://cdn.simpleicons.org/${skill.simpleicon}`} alt={skill.name} className="w-6 h-6 shrink-0" />
                        : skill.devicon
                          ? <i className={`${skill.devicon} relative text-2xl leading-none shrink-0`} />
                          : <span className="relative text-xl leading-none shrink-0">{skill.icon}</span>
                    }
                    <span className={`relative text-xs font-semibold ${cat.color.text} leading-tight`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </section>
        ))}

        {/* ══ TOTAL STATS BANNER ═══════════════════════════════════════════ */}
        <section className="py-14 px-6 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: skillCategories.reduce((a, c) => a + c.skills.length, 0) + '+', label: 'Total Skills', color: 'text-emerald-400' },
                { value: skillCategories[0].skills.length + '+', label: 'Data & Analytics', color: 'text-amber-400' },
                { value: skillCategories[1].skills.length + '+', label: 'Web & Dev Tools', color: 'text-violet-400' },
                { value: skillCategories[2].skills.length + '+', label: 'Platforms & Tools', color: 'text-sky-400' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`fade-up fade-delay-${i + 1} bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors`}
                >
                  <div className={`text-4xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-slate-400 text-xs font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA — Contact ════════════════════════════════════════════════ */}
        <section className="py-16 px-6 text-center border-t border-slate-800">
          <div className="max-w-xl mx-auto fade-up space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-2">
              💬 Let's Collaborate
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Have an{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                interesting project?
              </span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Let's discuss how I can contribute with the skills I have!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              Contact Me →
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-[11px] text-slate-600 bg-slate-950 border-t border-slate-900">
        © 2026 Ryan Febrianto. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </>
  );
}
