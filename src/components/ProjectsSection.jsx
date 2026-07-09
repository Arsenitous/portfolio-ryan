import React from 'react';
import { Database, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { projects } from '../data';

const stats = [
  { label: "Live Projects",  value: "7" },
  { label: "ML Frameworks",  value: "4+" },
  { label: "Algorithms",     value: "ANN, LSTM, AdaBoost, ..." },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {/* ── Section Header ──────────────────────────────────────────── */}
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-3">
            <Database size={14} /> Data Science Showcase
          </div>
          <h3 className="text-3xl font-extrabold text-white leading-tight">
            Machine Learning{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Projects
            </span>
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            7 aplikasi interaktif berbasis Python yang di-deploy secara live menggunakan Streamlit Share —
            dari prediksi klasifikasi hingga pemodelan bahasa.
          </p>
        </div>

        {/* ── Stats Bar ───────────────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-4 fade-up fade-delay-1">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center"
            >
              <p className="text-xl font-extrabold text-emerald-400">{s.value}</p>
              <p className="text-[11px] text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Project Cards ───────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              className={`proj-card fade-up fade-delay-${Math.min(idx + 1, 7)} bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/40 flex flex-col justify-between`}
            >
              {/* Icon + Badge */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${proj.accent} text-emerald-300 border border-emerald-500/10`}>
                    {proj.icon}
                  </div>
                  <span className="text-[10px] bg-slate-800/80 text-emerald-400 px-2.5 py-1 rounded-full font-mono border border-slate-700/60">
                    {proj.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 leading-snug">{proj.title}</h4>
                <p className="text-slate-400 text-xs mb-4 leading-relaxed">{proj.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
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

              {/* Links */}
              <div className="flex gap-5 border-t border-slate-800/80 pt-4 text-xs font-medium">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-white transition"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
