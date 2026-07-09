import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Database, FlaskConical,
  GitBranch, Lightbulb, ChevronRight, Rocket
} from 'lucide-react';
import { GithubIcon } from '../components/icons';
import Navbar from '../components/Navbar';
import { projects } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const proj = projects.find((p) => p.slug === slug);

  useScrollFade();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // 404 fallback
  if (!proj) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 space-y-4">
          <p className="text-6xl">🔍</p>
          <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
          <p className="text-slate-400 text-sm">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </>
    );
  }

  const psiSections = [
    {
      id: 'problem',
      icon: <FlaskConical size={20} />,
      label: 'Background & Problem',
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      content: proj.detail.problem,
    },
    {
      id: 'dataset',
      icon: <Database size={20} />,
      label: 'Dataset & EDA',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/20',
      content: proj.detail.dataset,
    },
    {
      id: 'methodology',
      icon: <GitBranch size={20} />,
      label: 'Methodology & Modeling',
      color: 'text-violet-400',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/20',
      content: proj.detail.methodology,
    },
    {
      id: 'impact',
      icon: <Lightbulb size={20} />,
      label: 'Impact & Insights',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      content: proj.detail.impact,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        <div className={`relative py-16 bg-gradient-to-br ${proj.categoryColor} overflow-hidden`}>
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)',
              backgroundSize: '16px 16px',
            }}
          />
          {/* Glow blob */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-white/70 font-mono">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <ChevronRight size={12} />
              <Link to="/projects" className="hover:text-white transition">Projects</Link>
              <ChevronRight size={12} />
              <span className="text-white">{proj.title}</span>
            </div>

            {/* Category badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">
              {proj.icon} {proj.category}
            </div>

            {/* Project Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow">
              {proj.title}
            </h1>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── P-S-I Content ───────────────────────────────────────────── */}
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto space-y-8">

            {psiSections.map((section, idx) => (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className={`fade-up fade-delay-${idx + 1} bg-slate-900/50 rounded-2xl border ${section.border} p-6 md:p-8 space-y-3`}
              >
                {/* Section Header */}
                <div className={`inline-flex items-center gap-2.5 ${section.bg} ${section.color} px-3 py-1.5 rounded-lg text-sm font-bold`}>
                  {section.icon}
                  {section.label}
                </div>

                {/* Section Content */}
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {section.content}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* ── CTA Buttons ─────────────────────────────────────────────── */}
        <section className="py-12 px-6 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left space-y-1">
                <h3 className="text-lg font-bold text-white">Ready to explore this project?</h3>
                <p className="text-slate-400 text-sm">Launch the live demo or dive into the source code on GitHub.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  id={`btn-live-${proj.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
                >
                  <Rocket size={16} />
                  Launch Streamlit App
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  id={`btn-github-${proj.slug}`}
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold px-6 py-3 rounded-xl text-sm transition-all border border-slate-700 hover:-translate-y-0.5"
                >
                  <GithubIcon size={16} />
                  View GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Back Link ───────────────────────────────────────────────── */}
        <div className="pb-14 px-6">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm transition group"
            >
              <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
              Back to All Projects
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-[11px] text-slate-600 bg-slate-950 border-t border-slate-900">
        © 2026 Ryan Febrianto. Built with React & Tailwind CSS.
      </footer>
    </>
  );
}
