'use client';

import React from 'react';
import { User, ArrowRight, BarChart3, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../data';
import ryanPhoto from '../assets/Ryan-W (2).png';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full py-10 px-5 md:px-6 grid md:grid-cols-3 gap-8 md:gap-12 items-center">

        {/* ── Mobile: Photo first (hidden on md+, shown on sm) ─────────── */}
        <div className="md:hidden flex flex-col items-center gap-4 fade-up">
          <div className="relative">
            <div className="w-36 h-36 rounded-full ring-4 ring-emerald-400/70 ring-offset-4 ring-offset-slate-950 overflow-hidden shadow-2xl shadow-emerald-500/30">
              <Image
                src={ryanPhoto}
                alt="Ryan Febrianto"
                className="w-full h-full object-cover object-top"
                width={144}
                height={144}
              />
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-950 shadow animate-pulse" />
          </div>
        </div>

        {/* ── Left: Intro text ─────────────────────────────────────────── */}
        <div className="md:col-span-2 space-y-5 fade-up text-center md:text-left">
          <div className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono">
            🚀 Available for Data Analyst & Data Science Roles
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              {personalInfo.name}
            </span>
          </h1>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            An IT practitioner focused on{' '}
            <strong className="text-emerald-300">Data Analytics & Data Science</strong>. Passionate about
            transforming raw data into meaningful visual insights, and building intelligent
            web applications using Python and Streamlit.
          </p>

          {/* ── High-Visibility CTA ──────────────────────────────────── */}
          <div className="pt-1 flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
            <Link
              href="/projects"
              id="cta-explore-projects"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:-translate-y-0.5"
            >
              <BarChart3 size={18} />
              Explore My Data Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="/CV-Ryan-Febrianto.pdf"
              download="CV-Ryan-Febrianto.pdf"
              id="cta-download-cv"
              className="group inline-flex items-center justify-center gap-2 bg-slate-900/70 hover:bg-slate-800/80 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5"
            >
              <Download size={17} className="transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
          </div>
        </div>

        {/* ── Right: Photo + Profile card (desktop only) ─────────────── */}
        <div className="hidden md:flex flex-col items-center gap-4 fade-up fade-delay-2">
          {/* Photo */}
          <div className="relative">
            <div className="w-52 h-52 rounded-full ring-4 ring-emerald-400/70 ring-offset-4 ring-offset-slate-950 overflow-hidden shadow-2xl shadow-emerald-500/30">
              <Image
                src={ryanPhoto}
                alt="Ryan Febrianto"
                className="w-full h-full object-cover object-top"
                width={208}
                height={208}
              />
            </div>
            {/* Online dot */}
            <span className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-400 rounded-full border-2 border-slate-950 shadow animate-pulse" />
          </div>

          {/* Profile card */}
          <div className="w-full bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <h2 className="text-base font-bold text-emerald-400 border-b border-slate-800 pb-2 flex items-center gap-2">
              <User size={18} /> Profile Summary
            </h2>
            <div className="text-xs space-y-2.5 text-slate-300 font-mono">
              <p><span className="text-slate-500">Nickname:  </span> {personalInfo.nickname}</p>
              <p><span className="text-slate-500">Birth Date:</span> {personalInfo.birthDate}</p>
              <p><span className="text-slate-500">Location:  </span> {personalInfo.birthPlace}</p>
              <p><span className="text-slate-500">Gender:    </span> {personalInfo.gender}</p>
              <p><span className="text-slate-500">Religion:  </span> {personalInfo.religion}</p>
              <p><span className="text-slate-500">Blood Type:</span> {personalInfo.bloodType}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
