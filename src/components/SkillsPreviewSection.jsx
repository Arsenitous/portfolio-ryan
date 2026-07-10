import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ArrowRight } from 'lucide-react';
import { featuredSkills } from '../data';

export default function SkillsPreviewSection() {
  return (
    <section className="py-20 border-t border-b border-slate-800 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* ── Left: Copy ───────────────────────────────────────────────── */}
          <div className="space-y-5 fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono">
              <Code2 size={14} /> Tech Stack
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              My Skills at a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Glance
              </span>
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed">
              From data analytics to web development — here are the technologies
              I use to build meaningful solutions.
            </p>

            {/* Category legend */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                Data &amp; Analytics
              </span>
              <span className="inline-flex items-center gap-1.5 text-violet-400">
                <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
                Web &amp; Dev
              </span>
              <span className="inline-flex items-center gap-1.5 text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
                Tools
              </span>
            </div>

            {/* CTA */}
            <Link
              to="/skills"
              id="cta-view-all-skills"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5 hover:shadow-emerald-400/40"
            >
              <Code2 size={16} />
              View All Skills
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ── Right: Skill pills grid ───────────────────────────────────── */}
          <div className="fade-up fade-delay-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {featuredSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-2.5 border rounded-lg px-3 py-2.5 ${skill.bg} hover:-translate-y-0.5 transition-transform duration-200 cursor-default`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {/* Logo: imgUrl, else simpleicon if available, else devicon, else icon, else dot fallback */}
                  {skill.imgUrl
                    ? <img src={skill.imgUrl} alt={skill.name} className="w-4 h-4 shrink-0 object-contain" />
                    : skill.simpleicon
                      ? <img src={`https://cdn.simpleicons.org/${skill.simpleicon}`} alt={skill.name} className="w-4 h-4 shrink-0" />
                      : skill.devicon
                        ? <i className={`${skill.devicon} text-base leading-none shrink-0`} />
                        : skill.icon
                          ? <span className="text-sm leading-none shrink-0">{skill.icon}</span>
                          : <span className={`w-2 h-2 rounded-full ${skill.dot} shrink-0`} />
                  }
                  <span className="text-xs font-medium truncate">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* More hint */}
            <p className="text-xs text-slate-600 font-mono mt-3 text-right">
              +{Math.max(0, 33 - featuredSkills.length)} more skills →{' '}
              <Link to="/skills" className="text-emerald-500 hover:text-emerald-400 transition">
                see all
              </Link>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
