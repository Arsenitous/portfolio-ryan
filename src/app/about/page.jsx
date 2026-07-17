'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  User, MapPin, Calendar, Droplets, Heart,
  BookOpen, Briefcase, Crown, Gamepad2, Waves,
  GraduationCap, ExternalLink, ChevronRight, Mail
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import { personalInfo, hobbies, workExperience, education } from '../../data';
import { useScrollFade } from '../../hooks/useScrollFade';
import ryanPhoto from '../../assets/Ryan-W (2).png';

/* ── Hobby icons mapping ────────────────────────────────────────────────────── */
const hobbyConfig = [
  {
    icon: <Crown size={32} />,
    emoji: '♟️',
    color: 'from-amber-500 to-yellow-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-400',
  },
  {
    icon: <Gamepad2 size={32} />,
    emoji: '🎮',
    color: 'from-violet-500 to-purple-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
  },
  {
    icon: <Waves size={32} />,
    emoji: '🏊',
    color: 'from-sky-500 to-cyan-500',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    text: 'text-sky-400',
  },
];

/* ── Education level icons ──────────────────────────────────────────────────── */
const eduIcons = ['🏫', '📚', '🏫', '🎓', '🎓'];

export default function AboutPage() {
  useScrollFade();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const infoRows = [
    { icon: <User size={15} />, label: 'Full Name', value: personalInfo.name },
    { icon: <Calendar size={15} />, label: 'Date of Birth', value: personalInfo.birthDate },
    { icon: <MapPin size={15} />, label: 'Place of Birth', value: personalInfo.birthPlace },
    { icon: <User size={15} />, label: 'Gender', value: personalInfo.gender },
    { icon: <Heart size={15} />, label: 'Religion', value: personalInfo.religion },
    { icon: <Droplets size={15} />, label: 'Blood Type', value: personalInfo.bloodType },
    { icon: <MapPin size={15} />, label: 'Address', value: personalInfo.address },
    { icon: <BookOpen size={15} />, label: 'Motivation', value: personalInfo.motto },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        {/* ══ SECTION 1: Personal Bio ════════════════════════════════════ */}
        <section className="py-16 px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-8 fade-up">
              <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
              <ChevronRight size={12} />
              <span className="text-slate-300">About Me</span>
            </div>

            {/* Section badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-4 fade-up fade-delay-1">
              <User size={14} /> Personal Profile
            </div>

            <div className="grid md:grid-cols-5 gap-10 items-start md:pb-0 pb-12">

              {/* Photo */}
              <div className="md:col-span-2 flex flex-col items-center gap-4 fade-up fade-delay-1">
                <div className="relative w-full flex justify-center">
                  {/* Glow ring */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 blur-xl" />
                  <div className="relative w-full max-w-xs md:max-w-sm rounded-2xl overflow-hidden ring-2 ring-emerald-400/30 shadow-2xl shadow-emerald-500/20">
                    <Image
                      src={ryanPhoto}
                      alt="Ryan Febrianto"
                      className="w-full h-full object-cover object-top"
                      width={384}
                      height={480}
                    />
                  </div>
                </div>
                {/* Contact CTA Button */}
                <Link
                  href="/contact"
                  className="mt-4 w-full max-w-xs md:max-w-sm flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-sm font-bold py-3 rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/25"
                >
                  <Mail size={15} />
                  Contact Me
                </Link>
              </div>

              {/* Bio + Info */}
              <div className="md:col-span-3 space-y-6 fade-up fade-delay-2">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                    Hello, I'm{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                      Ryan Febrianto
                    </span>{' '}👋
                  </h1>
                  <p className="text-slate-400 leading-relaxed">
                    I'd like to take this opportunity to share a little bit about myself.
                    Hopefully, this will help us get to know each other better.
                    I'm an IT practitioner from Pontianak with a deep passion for{' '}
                    <span className="text-emerald-300 font-semibold">Data Analytics</span>{' '}
                    and building intelligent applications.
                  </p>
                </div>

                {/* Info card */}
                <div className="bg-slate-900/60 rounded-2xl border border-slate-800 overflow-hidden">
                  <div className="px-5 py-3 border-b border-slate-800 flex items-center gap-2">
                    <User size={15} className="text-emerald-400" />
                    <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Profile Summary</span>
                  </div>
                  <div className="divide-y divide-slate-800/60">
                    {infoRows.map((row, i) => (
                      <div key={i} className="flex items-start gap-3 px-5 py-3 hover:bg-slate-800/30 transition-colors">
                        <span className="text-slate-500 mt-0.5 shrink-0">{row.icon}</span>
                        <span className="text-slate-500 text-xs w-28 shrink-0 pt-0.5 font-mono">{row.label}</span>
                        <span className="text-slate-200 text-sm leading-snug">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 2: Hobbies ════════════════════════════════════════ */}
        <section className="py-16 px-6 border-b border-slate-800 bg-slate-900/20">
          <div className="max-w-5xl mx-auto space-y-10">

            <div className="text-center fade-up">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-3">
                <Gamepad2 size={14} /> Interests &amp; Hobbies
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                What I Do{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Outside Work
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {hobbies.map((hobby, idx) => {
                const cfg = hobbyConfig[idx];
                return (
                  <div
                    key={idx}
                    className={`fade-up fade-delay-${idx + 1} group relative bg-slate-900/60 rounded-2xl border ${cfg.border} p-7 text-center overflow-hidden hover:-translate-y-1 transition-transform duration-300`}
                  >
                    {/* Background glow */}
                    <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${cfg.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

                    {/* Icon */}
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl ${cfg.bg} ${cfg.text} mb-4 mx-auto`}>
                      {cfg.icon}
                    </div>

                    <h3 className={`text-lg font-bold ${cfg.text} mb-2`}>{hobby.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{hobby.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ SECTION 3: Education ══════════════════════════════════════ */}
        <section className="py-16 px-6 border-b border-slate-800">
          <div className="max-w-5xl mx-auto">

            <div className="mb-10 fade-up">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-3">
                <GraduationCap size={14} /> Education
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Academic{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Journey
                </span>
              </h2>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                For 17 years and continuing to this day, I have been pursuing my journey
                in the world of education. Each step serves as a solid foundation to build
                my dreams and achieve my goals.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/60 via-slate-700 to-transparent" />

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`fade-up fade-delay-${idx + 1} relative flex items-start gap-5 pl-14`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${edu.current ? 'bg-emerald-500/20 ring-2 ring-emerald-400/60' : 'bg-slate-800 border border-slate-700'}`}>
                      {eduIcons[idx]}
                    </div>

                    {/* Card */}
                    <div className={`flex-1 rounded-xl border p-4 ${edu.current ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-slate-900/40 border-slate-800'}`}>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className={`font-bold text-sm ${edu.current ? 'text-emerald-300' : 'text-white'}`}>
                          {edu.school}
                          {edu.current && (
                            <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono align-middle">
                              CURRENT
                            </span>
                          )}
                        </h4>
                        <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{edu.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ SECTION 4: Work Experience ════════════════════════════════ */}
        <section className="py-16 px-6 bg-slate-900/20">
          <div className="max-w-5xl mx-auto space-y-8">

            <div className="fade-up">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-3">
                <Briefcase size={14} /> Work Experience
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Professional{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Experience
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              {workExperience.map((work, idx) => (
                <div
                  key={idx}
                  className={`fade-up fade-delay-${idx + 1} bg-slate-900/60 rounded-2xl border border-slate-800 p-6 space-y-2 hover:border-emerald-500/30 transition-colors`}
                >
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <span className="text-xs text-emerald-400 font-mono">{work.period}</span>
                      <h4 className="text-base font-bold text-white mt-0.5">{work.role}</h4>
                      <p className="text-sm font-medium text-slate-400">{work.company}</p>
                      <p className="text-xs text-slate-500">{work.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed pt-1">{work.desc}</p>
                  <a
                    href={work.web}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 transition mt-1"
                  >
                    Visit Website <ExternalLink size={12} />
                  </a>
                </div>
              ))}
            </div>

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
