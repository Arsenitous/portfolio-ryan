import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, Mail, Send, MessageSquare,
  ChevronRight, User, AtSign, FileText,
  CheckCircle2
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, GmailIcon, LinkedInIcon } from '../components/icons';
import Navbar from '../components/Navbar';
import { useScrollFade } from '../hooks/useScrollFade';

/* ── Social contact cards ───────────────────────────────────────────────────── */
const socialLinks = [
  {
    id:      'contact-email',
    label:   'Email',
    value:   'ryanjecary@gmail.com',
    href:    'https://mail.google.com/mail/?view=cm&to=ryanjecary@gmail.com',
    icon:    <GmailIcon size={24} />,
    color:   'hover:border-red-500/40 hover:bg-red-500/5',
    iconBg:  'bg-red-500/10 text-red-400',
  },
  {
    id:      'contact-whatsapp',
    label:   'WhatsApp',
    value:   '0853-4500-5955',
    href:    'https://wa.me/6285345005955',
    icon:    <Phone size={24} />,
    color:   'hover:border-green-500/40 hover:bg-green-500/5',
    iconBg:  'bg-green-500/10 text-green-400',
  },
  {
    id:      'contact-facebook',
    label:   'Facebook',
    value:   'Ryan Febrianto',
    href:    'https://www.facebook.com/profile.php?id=100018578925323',
    icon:    <FacebookIcon size={24} />,
    color:   'hover:border-blue-500/40 hover:bg-blue-500/5',
    iconBg:  'bg-blue-500/10 text-blue-400',
  },
  {
    id:      'contact-instagram',
    label:   'Instagram',
    value:   '@ryanfebriantozzz',
    href:    'https://www.instagram.com/ryanfebriantozzz/?hl=en',
    icon:    <InstagramIcon size={24} />,
    color:   'hover:border-pink-500/40 hover:bg-pink-500/5',
    iconBg:  'bg-pink-500/10 text-pink-400',
  },
  {
    id:      'contact-linkedin',
    label:   'LinkedIn',
    value:   'ryan-febrianto',
    href:    'https://www.linkedin.com/in/ryan-febrianto-b10524315/',
    icon:    <LinkedInIcon size={24} />,
    color:   'hover:border-blue-500/40 hover:bg-blue-500/5',
    iconBg:  'bg-blue-500/10 text-blue-400',
  },
];

export default function ContactPage() {
  useScrollFade();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent]       = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;

    // Build mailto URL — opens Gmail compose pre-filled
    const body = `Hi Ryan,%0A%0A${encodeURIComponent(message)}%0A%0A----%0ASent by: ${encodeURIComponent(name)}%0AReply to: ${encodeURIComponent(email)}`;
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&to=ryanjecary@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`;
    window.open(mailtoUrl, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const isValid = form.name.trim() && form.email.trim() && form.subject.trim() && form.message.trim();

  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        {/* ── Page Header ─────────────────────────────────────────────── */}
        <section className="py-14 px-6 border-b border-slate-800">
          <div className="max-w-4xl mx-auto">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-6 fade-up">
              <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
              <ChevronRight size={12} />
              <span className="text-slate-300">Contact</span>
            </div>

            <div className="fade-up fade-delay-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-4">
                <MessageSquare size={14} /> Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                Let's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Connect
                </span>
              </h1>
              <p className="text-slate-400 max-w-xl leading-relaxed">
                Open to internship opportunities, data analysis collaborations, or just a tech discussion.
                Pick any channel below or send me a message directly.
              </p>
            </div>
          </div>
        </section>

        {/* ── Social Cards ────────────────────────────────────────────── */}
        <section className="py-12 px-6 border-b border-slate-800">
          <div className="max-w-4xl mx-auto space-y-6">

            <h2 className="text-lg font-bold text-white fade-up">Find me on</h2>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`fade-up fade-delay-${idx + 1} group flex flex-col items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${link.color}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${link.iconBg} group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-300">{link.label}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 break-all">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Send Message Form ────────────────────────────────────────── */}
        <section className="py-14 px-6 bg-slate-900/20">
          <div className="max-w-4xl mx-auto">

            <div className="mb-8 fade-up">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono mb-3">
                <Mail size={14} /> Send a Message
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Drop Me an{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Email
                </span>
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Fill in the form below and click "Send via Gmail" — it will open Gmail
                with everything pre-filled, ready to send.
              </p>
            </div>

            <form
              onSubmit={handleSend}
              className="fade-up fade-delay-1 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5"
            >
              {/* Row 1: Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <User size={13} /> Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 focus:bg-slate-800 transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <AtSign size={13} /> Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. john@email.com"
                    required
                    className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 focus:bg-slate-800 transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <FileText size={13} /> Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  required
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 focus:bg-slate-800 transition"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <MessageSquare size={13} /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 focus:bg-slate-800 transition resize-none"
                />
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-slate-600">
                📌 Clicking the button below will open <strong className="text-slate-500">Gmail</strong> in a new tab
                with your message pre-filled. No data is stored on this site.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isValid}
                id="btn-send-email"
                className={`w-full flex items-center justify-center gap-2 font-bold px-6 py-3.5 rounded-xl text-sm transition-all
                  ${isValid
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5'
                    : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700'
                  }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={17} />
                    Gmail Opened — Check Your Browser!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send via Gmail
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-[11px] text-slate-600 bg-slate-950 border-t border-slate-900">
        © 2026 Ryan Febrianto. Built with React & Tailwind CSS.
      </footer>
    </>
  );
}
