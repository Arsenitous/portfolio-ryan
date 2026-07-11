import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Database, FlaskConical,
  GitBranch, Lightbulb, ChevronRight, Rocket,
  BarChart2, CheckCircle2, Zap, ArrowRight, Code2
} from 'lucide-react';
import { GithubIcon } from '../components/icons';
import Navbar from '../components/Navbar';
import { projects } from '../data';
import { useScrollFade } from '../hooks/useScrollFade';

// ── Sub-components ────────────────────────────────────────────────────────────

/** Animated number stat card */
function StatCard({ label, value, unit }) {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col gap-1 hover:border-slate-600 transition-colors">
      <span className="text-[11px] text-slate-500 font-mono uppercase tracking-widest">{label}</span>
      <span className="text-2xl font-black text-white leading-none">{value}</span>
      {unit && <span className="text-[11px] text-slate-400 font-mono">{unit}</span>}
    </div>
  );
}

/** Color-coded metric pill/badge */
function MetricBadge({ label, value, color }) {
  const colorMap = {
    emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    sky:     'bg-sky-500/10 border-sky-500/20 text-sky-400',
    violet:  'bg-violet-500/10 border-violet-500/20 text-violet-400',
    amber:   'bg-amber-500/10 border-amber-500/20 text-amber-400',
    rose:    'bg-rose-500/10 border-rose-500/20 text-rose-400',
    orange:  'bg-orange-500/10 border-orange-500/20 text-orange-400',
    pink:    'bg-pink-500/10 border-pink-500/20 text-pink-400',
    red:     'bg-red-500/10 border-red-500/20 text-red-400',
    teal:    'bg-teal-500/10 border-teal-500/20 text-teal-400',
  };
  return (
    <div className={`flex flex-col gap-0.5 border rounded-lg px-4 py-3 ${colorMap[color] || colorMap.sky}`}>
      <span className="text-[10px] font-mono uppercase tracking-widest opacity-70">{label}</span>
      <span className="text-sm font-bold leading-tight">{value}</span>
    </div>
  );
}

/** Horizontal feature importance bar */
function ImportanceBar({ name, pct, color }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 120);
    return () => clearTimeout(t);
  }, [pct]);

  const barColor = color || 'from-violet-500 to-purple-400';
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-slate-400 font-mono">{pct}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barColor} transition-all duration-700 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

/** Model pipeline step */
function PipelineStep({ step, detail, index, total, accentColor }) {
  const isLast = index === total - 1;
  return (
    <div className="flex gap-3">
      {/* Connector */}
      <div className="flex flex-col items-center">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0
          ${accentColor ? accentColor : 'bg-violet-500/20 text-violet-400 border border-violet-500/30'}`}>
          {index + 1}
        </div>
        {!isLast && <div className="w-px flex-1 bg-slate-700/60 my-1" />}
      </div>
      {/* Content */}
      <div className={`pb-${isLast ? '0' : '4'} space-y-0.5`}>
        <p className="text-sm font-bold text-white">{step}</p>
        <p className="text-xs text-slate-400 leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

/** Section wrapper card */
function SectionCard({ icon, label, color, bg, border, children }) {
  return (
    <div className={`bg-slate-900/50 rounded-2xl border ${border} p-6 md:p-8 space-y-5`}>
      <div className={`inline-flex items-center gap-2.5 ${bg} ${color} px-3 py-1.5 rounded-lg text-sm font-bold`}>
        {icon}
        {label}
      </div>
      {children}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
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

  const d = proj.detail;

  // Derive accent step color from project categoryColor
  const accentStepMap = {
    'from-emerald-500 to-teal-500':    'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    'from-sky-500 to-blue-500':        'bg-sky-500/20 text-sky-400 border border-sky-500/30',
    'from-violet-500 to-purple-500':   'bg-violet-500/20 text-violet-400 border border-violet-500/30',
    'from-orange-500 to-amber-500':    'bg-orange-500/20 text-orange-400 border border-orange-500/30',
    'from-pink-500 to-rose-500':       'bg-pink-500/20 text-pink-400 border border-pink-500/30',
    'from-red-500 to-orange-500':      'bg-red-500/20 text-red-400 border border-red-500/30',
    'from-teal-500 to-cyan-500':       'bg-teal-500/20 text-teal-400 border border-teal-500/30',
  };
  const stepAccent = accentStepMap[proj.categoryColor] || 'bg-violet-500/20 text-violet-400 border border-violet-500/30';

  // Bar gradient per project
  const barGradMap = {
    'from-pink-500 to-rose-500':   'from-pink-500 to-rose-400',
    'from-teal-500 to-cyan-500':   'from-teal-500 to-cyan-400',
    'from-violet-500 to-purple-500': 'from-violet-500 to-purple-400',
  };
  const barGradient = barGradMap[proj.categoryColor] || 'from-violet-500 to-purple-400';

  return (
    <>
      <Navbar />
      <main className="min-h-screen">

        {/* ── Hero Banner ──────────────────────────────────────────────── */}
        <div className={`relative py-16 bg-gradient-to-br ${proj.categoryColor} overflow-hidden`}>
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 50%)',
              backgroundSize: '16px 16px',
            }}
          />
          {/* Glow blobs */}
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-black/20 blur-3xl" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-5">
            {/* Breadcrumb */}
            <div className="fade-up flex items-center gap-2 text-xs text-white/70 font-mono">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <ChevronRight size={12} />
              <Link to="/projects" className="hover:text-white transition">Projects</Link>
              <ChevronRight size={12} />
              <span className="text-white">{proj.title}</span>
            </div>

            {/* Category badge */}
            <div className="fade-up fade-delay-1 inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">
              {proj.icon} {proj.category}
            </div>

            {/* Title */}
            <h1 className="fade-up fade-delay-2 text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow">
              {proj.title}
            </h1>

            {/* Overview */}
            {d.overview && (
              <p className="fade-up fade-delay-3 text-white/80 text-sm md:text-base max-w-2xl leading-relaxed">
                {d.overview}
              </p>
            )}

            {/* Tech tags */}
            <div className="fade-up fade-delay-4 flex flex-wrap gap-2 pt-1">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stats Row ────────────────────────────────────────────────── */}
        {d.stats && d.stats.length > 0 && (
          <div className="max-w-5xl mx-auto px-6 pt-8">
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-3`}>
              {d.stats.map((s, i) => (
                <div key={i} className={`fade-up fade-delay-${i + 1}`}>
                  <StatCard label={s.label} value={s.value} unit={s.unit} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Main Content ─────────────────────────────────────────────── */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto space-y-8">

            {/* ── 1. Background & Problem ── */}
            <div className="fade-up">
            <SectionCard
              icon={<FlaskConical size={18} />}
              label="Background & Problem"
              color="text-rose-400"
              bg="bg-rose-500/10"
              border="border-rose-500/20"
            >
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                {d.problem}
              </p>
            </SectionCard>
            </div>

            {/* ── 2. Dataset & EDA ── */}
            <div className="fade-up">
            <SectionCard
              icon={<Database size={18} />}
              label="Dataset & EDA"
              color="text-sky-400"
              bg="bg-sky-500/10"
              border="border-sky-500/20"
            >
              {d.highlights && d.highlights.length > 0 && (
                <ul className="space-y-2.5">
                  {d.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-sky-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </SectionCard>
            </div>

            {/* ── 3. Methodology & Model Architecture ── */}
            <div className="fade-up">
            <SectionCard
              icon={<GitBranch size={18} />}
              label="Methodology & Model Architecture"
              color="text-violet-400"
              bg="bg-violet-500/10"
              border="border-violet-500/20"
            >
              {d.modelSteps && d.modelSteps.length > 0 && (
                <div className="space-y-0">
                  {d.modelSteps.map((s, i) => (
                    <PipelineStep
                      key={i}
                      step={s.step}
                      detail={s.detail}
                      index={i}
                      total={d.modelSteps.length}
                      accentColor={stepAccent}
                    />
                  ))}
                </div>
              )}
            </SectionCard>
            </div>

            {/* ── 4. Performance Metrics ── */}
            {d.metrics && d.metrics.length > 0 && (
              <div className="fade-up">
              <SectionCard
                icon={<BarChart2 size={18} />}
                label="Performance Metrics"
                color="text-amber-400"
                bg="bg-amber-500/10"
                border="border-amber-500/20"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {d.metrics.map((m, i) => (
                    <MetricBadge key={i} label={m.label} value={m.value} color={m.color} />
                  ))}
                </div>
              </SectionCard>
              </div>
            )}

            {/* ── 5. Feature Importance (optional) ── */}
            {d.featureImportance && d.featureImportance.length > 0 && (
              <div className="fade-up">
              <SectionCard
                icon={<Zap size={18} />}
                label="Feature Importance"
                color="text-fuchsia-400"
                bg="bg-fuchsia-500/10"
                border="border-fuchsia-500/20"
              >
                <div className="space-y-4">
                  {d.featureImportance.map((f, i) => (
                    <ImportanceBar key={i} name={f.name} pct={f.pct} color={barGradient} />
                  ))}
                </div>
              </SectionCard>
              </div>
            )}

            {/* ── 6. App Features & Impact ── */}
            <div className="fade-up">
            <SectionCard
              icon={<Lightbulb size={18} />}
              label="App Features & Impact"
              color="text-emerald-400"
              bg="bg-emerald-500/10"
              border="border-emerald-500/20"
            >
              {/* App feature bullets */}
              {d.appFeatures && d.appFeatures.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">What the app does</p>
                  <ul className="space-y-2">
                    {d.appFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <ArrowRight size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Divider */}
              {d.appFeatures && d.impact && (
                <hr className="border-slate-800" />
              )}

              {/* Impact paragraph */}
              {d.impact && (
                <div className="space-y-2">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Key Insights</p>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">{d.impact}</p>
                </div>
              )}
            </SectionCard>
            </div>

          </div>
        </section>

        {/* ── CTA Buttons ──────────────────────────────────────────────── */}
        <section className="py-12 px-6 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <div className="fade-up bg-slate-900/60 rounded-2xl border border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
                  Launch Live App
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

        {/* ── Back Link ────────────────────────────────────────────────── */}
        <div className="pb-14 px-6">
          <div className="max-w-5xl mx-auto">
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
