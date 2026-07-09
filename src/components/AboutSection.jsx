import React from 'react';
import { Briefcase, Gamepad2, ExternalLink, Crown, Waves } from 'lucide-react';
import { workExperience, hobbies } from '../data';

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-900/30 py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* ── Kolom Pengalaman Kerja ────────────────────────────────── */}
        <div className="space-y-6 fade-up">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase size={22} className="text-emerald-400" /> Pengalaman Kerja
          </h3>

          {workExperience.map((work, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 space-y-2"
            >
              <span className="text-xs text-emerald-400 font-mono">{work.period}</span>
              <h4 className="text-lg font-bold text-white">{work.role}</h4>
              <p className="text-sm font-medium text-slate-400">{work.company}</p>
              <p className="text-xs text-slate-500">{work.location}</p>
              <p className="text-sm text-slate-400 text-justify pt-2 leading-relaxed">{work.desc}</p>
              <div className="pt-2">
                <a
                  href={work.web}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-teal-400 hover:underline inline-flex items-center gap-1"
                >
                  Website Immanuel <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Kolom Minat & Hobi ───────────────────────────────────── */}
        <div className="space-y-6 fade-up fade-delay-2">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Gamepad2 size={24} className="text-emerald-400" /> Minat & Hobi
          </h3>

          <div className="grid gap-4">
            {hobbies.map((hobby, idx) => {
              const icons = [
                <Gamepad2 size={18} />,
                <Crown size={18} />,
                <Waves size={18} />,
              ];
              return (
                <div
                  key={idx}
                  className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/60 flex gap-4 items-start"
                >
                  <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0">
                    {icons[idx] ?? <Gamepad2 size={18} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">{hobby.name}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{hobby.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
