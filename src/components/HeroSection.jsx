'use client';

import React from 'react';
import { User, ArrowRight, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { personalInfo } from '../data';
import ryanPhoto from '../assets/Ryan-W (2).png';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-73px)] flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full py-12 px-6 grid md:grid-cols-3 gap-12 items-center">

        {/* ── Left: Intro text ─────────────────────────────────────────── */}
        <div className="md:col-span-2 space-y-6 fade-up">
          <div className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono">
            🚀 Available for Data Analyst Roles
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Hi, I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              {personalInfo.name}
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed text-justify">
            An IT practitioner focused on{' '}
            <strong className="text-emerald-300">Data Analytics</strong>. Passionate about
            transforming raw data into meaningful visual insights, and building intelligent
            web applications using Python and Streamlit.
          </p>

          {/* ── High-Visibility CTA ──────────────────────────────────── */}
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/projects"
              id="cta-explore-projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 hover:-translate-y-0.5"
            >
              <BarChart3 size={18} />
              Explore My Data Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Right: Photo + Profile card ───────────────────────────────── */}
        <div className="flex flex-col items-center gap-4 fade-up fade-delay-2">
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
            <h3 className="text-base font-bold text-emerald-400 border-b border-slate-800 pb-2 flex items-center gap-2">
              <User size={18} /> Profile Summary
            </h3>
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
