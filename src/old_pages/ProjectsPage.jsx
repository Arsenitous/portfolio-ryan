import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, ArrowRight, Layers, Code2, Cpu, BarChart3 } from 'lucide-react';
import Navbar from '../components/Navbar';
import { projects } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';

/* ── Stats summary ──────────────────────────────────────────────────────────── */
const stats = [
  { label: 'Live Projects', value: '7', icon: <BarChart3 size={22} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { label: 'ML Frameworks', value: '4+', icon: <Cpu size={22} />, color: 'text-sky-400', bg: 'bg-sky-500/10' },
  { label: 'Algorithms', value: '5+', icon: <Code2 size={22} />, color: 'text-violet-400', bg: 'bg-violet-500/10' },
];

const techTags = ['Python', 'TensorFlow', 'Streamlit', 'Scikit-Learn', 'Pandas', 'MLflow', 'NLP', 'Deep Learning'];

export default function ProjectsPage() {
  useScrollFade();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        {/* ══ HERO HEADER — full-width gradient banner ═══════════════════ */}
        <section className="relative overflow-hidden border-b border-slate-800">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-emerald-950/40" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'linear-gradient(#34d399 1px, transparent 1px), linear-gradient(to right, #34d399 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-500/6 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* ── Left: Title & Description ───────────────────────── */}
              <div className="space-y-5 fade-up">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
                  <span>/</span>
                  <span className="text-slate-300">Projects</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-xs font-mono">
                  <Database size={13} /> Data Science Showcase
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
                  Project{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Directory
                  </span>
                </h1>

                <p className="text-slate-400 leading-relaxed text-base max-w-lg">
                  A curated collection of Python, Data Science, and Streamlit
                  applications, each built to solve a real-world problem using
                  cutting-edge ML algorithms. Click any card to read the full case study.
                </p>

                {/* Tech tag cloud */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {techTags.map((t) => (
                    <span key={t} className="text-[11px] bg-slate-800/80 text-slate-400 px-3 py-1 rounded-full border border-slate-700/60 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Right: Stats + Algorithm chips ──────────────────── */}
              <div className="fade-up fade-delay-2 space-y-4">
                {/* 3 stat cards stacked */}
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors group"
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${s.bg} ${s.color} shrink-0 group-hover:scale-110 transition-transform`}>
                      {s.icon}
                    </div>
                    <div>
                      <p className={`text-3xl font-black ${s.color}`}>{s.value}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                    <div className={`ml-auto w-1 h-10 rounded-full opacity-30 ${s.bg}`} />
                  </div>
                ))}

              </div>


            </div>
          </div>
        </section>

        {/* ══ PROJECT CARDS GRID ═════════════════════════════════════════ */}
        <section className="py-14 px-6">
          <div className="max-w-7xl mx-auto">
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
    <div className={`fade-up fade-delay-${Math.min(idx + 1, 7)} h-full`}>
      <Link
        to={`/projects/${proj.slug}`}
        id={`project-card-${proj.slug}`}
        className={`proj-card bg-slate-900/40 h-full rounded-2xl border border-slate-800 hover:border-emerald-500/50 flex flex-col overflow-hidden group`}
      >
      {/* ── Top Banner (Category) ──────────────────────────────────── */}
      <div className={`relative h-20 bg-gradient-to-r ${proj.categoryColor} flex items-center px-5 overflow-hidden`}>
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
          <h2 className="text-base font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
            {proj.title}
          </h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            {proj.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {proj.tech.map((t, i) => (
              <span key={i} className="text-[10px] bg-slate-900 text-emerald-300 px-2.5 py-1 rounded-md font-mono border border-slate-800">
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
    </div>
  );
}
