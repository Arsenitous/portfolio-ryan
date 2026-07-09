import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, ArrowRight, Layers } from 'lucide-react';
import Navbar from '../components/Navbar';
import { projects } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';

/* ── Stats summary ──────────────────────────────────────────────────────────── */
const stats = [
  { label: 'Live Projects',  value: '7' },
  { label: 'ML Frameworks',  value: '4+' },
  { label: 'Algorithms',     value: 'ANN, LSTM, AdaBoost…' },
];

export default function ProjectsPage() {
  useScrollFade();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* ── Page Header ─────────────────────────────────────────────── */}
        <section className="py-16 border-b border-slate-800 px-6">
          <div className="max-w-6xl mx-auto space-y-6">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono fade-up">
              <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
              <span>/</span>
              <span className="text-slate-300">Projects</span>
            </div>

            <div className="fade-up fade-delay-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-4">
                <Database size={14} /> Data Science Showcase
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Project{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Directory
                </span>
              </h1>
              <p className="text-slate-400 mt-3 max-w-2xl leading-relaxed">
                A curated collection of Python, Data Science, and Streamlit applications —
                each built to solve a real-world problem. Click any card to read the full case study.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-xl fade-up fade-delay-2">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center"
                >
                  <p className="text-lg font-extrabold text-emerald-400">{s.value}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Project Cards Grid ──────────────────────────────────────── */}
        <section className="py-14 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <ProjectCard key={proj.id} proj={proj} idx={idx} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-[11px] text-slate-600 bg-slate-950 border-t border-slate-900">
        © 2026 Ryan Febrianto. Built with React & Tailwind CSS.
      </footer>
    </>
  );
}

/* ── Individual Project Card (Google Classroom style) ────────────────────── */
function ProjectCard({ proj, idx }) {
  return (
    <Link
      to={`/projects/${proj.slug}`}
      id={`project-card-${proj.slug}`}
      className={`proj-card fade-up fade-delay-${Math.min(idx + 1, 7)} bg-slate-900/40 rounded-2xl border border-slate-800 hover:border-emerald-500/50 flex flex-col overflow-hidden group`}
    >
      {/* ── Top Banner (Category) ──────────────────────────────────── */}
      <div className={`relative h-20 bg-gradient-to-r ${proj.categoryColor} flex items-center px-5 overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
            backgroundSize: '12px 12px',
          }}
        />
        <div className="relative z-10 flex items-center justify-between w-full">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm text-white">
              {proj.icon}
            </div>
            <span className="text-white font-black text-xs tracking-widest uppercase drop-shadow">
              {proj.category}
            </span>
          </div>
          <Layers size={18} className="text-white/50" />
        </div>
      </div>

      {/* ── Card Body ─────────────────────────────────────────────── */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          {/* Project Title */}
          <h2 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
            {proj.title}
          </h2>

          {/* 1–2 sentence description */}
          <p className="text-slate-400 text-xs leading-relaxed">
            {proj.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {proj.tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] bg-slate-900 text-emerald-300 px-2.5 py-1 rounded-md font-mono border border-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${proj.categoryBg} ${proj.categoryText} border-current/20`}>
            {proj.badge}
          </span>
          <span className="text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1 transition-colors">
            Project Details <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
