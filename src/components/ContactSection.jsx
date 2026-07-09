import React from 'react';
import { Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, GmailIcon, LinkedInIcon } from './icons';

export default function ContactSection() {
  return (
    <>
      {/* ── CONTACT ─────────────────────────────────────────────────── */}
      <section id="contact" className="bg-slate-950 py-20 border-t border-slate-800 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <div className="fade-up">
            <h3 className="text-2xl font-bold text-white">Get in Touch with Ryan</h3>
            <p className="text-xs text-slate-400 mt-1">
              Open to internship opportunities, data analysis collaborations, or just a tech discussion.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto fade-up fade-delay-2">
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=ryanjecary@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/5"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-500/10 text-red-400 group-hover:scale-110 transition-transform">
                <GmailIcon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300">Email</p>
                <p className="text-[11px] text-slate-500 mt-0.5 break-all">ryanjecary@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6285345005955"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-green-500/5"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300">WhatsApp</p>
                <p className="text-[11px] text-slate-500 mt-0.5 break-all">0853-4500-5955</p>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100018578925323"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <FacebookIcon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300">Facebook</p>
                <p className="text-[11px] text-slate-500 mt-0.5 break-all">Ryan Febrianto</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ryanfebriantozzz/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/5"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                <InstagramIcon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300">Instagram</p>
                <p className="text-[11px] text-slate-500 mt-0.5 break-all">@ryanfebriantozzz</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ryan-febrianto-b10524315/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedInIcon size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-300">LinkedIn</p>
                <p className="text-[11px] text-slate-500 mt-0.5 break-all">ryan-febrianto</p>
              </div>
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
