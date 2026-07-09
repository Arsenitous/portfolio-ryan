import React from 'react';
import { Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, GmailIcon } from './icons';

export default function ContactSection() {
  return (
    <>
      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="bg-slate-950 py-20 border-t border-slate-800 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <div className="fade-up">
            <h3 className="text-2xl font-bold text-white">Hubungi Ryan</h3>
            <p className="text-xs text-slate-400 mt-1">
              Buka untuk peluang magang, kerja sama analisis data, atau sekadar diskusi teknologi.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto fade-up fade-delay-2">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=ryanjecary@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 p-5 rounded-xl transition border border-slate-800 group"
            >
              <GmailIcon className="text-emerald-400 group-hover:scale-110 transition-transform" size={22} />
              <span className="text-[11px] font-mono text-slate-300 text-center leading-tight">ryanjecary@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6285345005955"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 p-5 rounded-xl transition border border-slate-800 group"
            >
              <Phone className="text-emerald-400 group-hover:scale-110 transition-transform" size={22} />
              <span className="text-[11px] font-mono text-slate-300 text-center leading-tight">0853-4500-5955</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100018578925323"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 p-5 rounded-xl transition border border-slate-800 group"
            >
              <FacebookIcon className="text-emerald-400 group-hover:scale-110 transition-transform" size={22} />
              <span className="text-[11px] font-mono text-slate-300 text-center leading-tight">Ryan Febrianto</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ryanfebriantozzz/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 p-5 rounded-xl transition border border-slate-800 group"
            >
              <InstagramIcon className="text-emerald-400 group-hover:scale-110 transition-transform" size={22} />
              <span className="text-[11px] font-mono text-slate-300 text-center leading-tight">ryanfebriantozzz</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="text-center py-8 text-[11px] text-slate-600 bg-slate-950 border-t border-slate-900">
        &copy; 2026 Ryan Febrianto. Built with React & Tailwind CSS.
      </footer>
    </>
  );
}
