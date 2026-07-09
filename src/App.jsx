import React from 'react';
import {
  User, Database, Briefcase, Gamepad2,
  Mail, Phone, ExternalLink, Terminal
} from 'lucide-react';

const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function App() {
  // --- BIODATA PRIBADI[cite: 1, 7] ---
  const personalInfo = {
    name: "Ryan Febrianto", //[cite: 1, 7]
    nickname: "Ryan", //[cite: 1]
    birthPlace: "Pontianak", //[cite: 7]
    gender: "Laki-Laki", //[cite: 7]
    religion: "Katolik", //[cite: 7]
    bloodType: "O", //[cite: 7]
    motto: "Berusaha menjadi lebih baik dengan mencoba hal-hal baru" //[cite: 7]
  };

  // --- WADAH PROYEK PYTHON & STREAMLIT KAMU ---
  const projects = [
    {
      title: "Model Prediksi Machine Learning - Streamlit",
      description: "Aplikasi web interaktif untuk melakukan pengujian model training secara langsung (live testing) menggunakan framework Streamlit.",
      tech: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
      github: "https://github.com/Arsenitous",
      live: "https://share.streamlit.io/"
    },
    {
      title: "Exploratory Data Analysis Dashboard",
      description: "Dashboard interaktif yang menyajikan visualisasi data analitik untuk menemukan wawasan atau tren tersembunyi dari dataset.",
      tech: ["Python", "Streamlit", "Plotly", "Pandas"],
      github: "https://github.com/Arsenitous",
      live: "https://share.streamlit.io/"
    }
  ];

  // --- RIWAYAT PEKERJAAN[cite: 10] ---
  const workExperience = [
    {
      role: "Staf Administrasi Sarana & Prasarana", //[cite: 10]
      company: "Sekolah Immanuel", //[cite: 10]
      location: "Jl. Sutoyo Indah, Pontianak, Kalimantan Barat", //[cite: 10]
      period: "2023 - Sekarang", //[cite: 10]
      desc: "Bertanggung jawab atas pengelolaan data administrasi, pencatatan inventarisasi aset, serta koordinasi operasional sarana dan prasarana sekolah.", //[cite: 10]
      web: "https://ski.sch.id/" //[cite: 10]
    }
  ];

  // --- HOBI[cite: 9] ---
  const hobbies = [
    { name: "Bermain Game", desc: "Mengisi waktu luang dengan bermain game mobile untuk melatih fokus dan strategi bersama tim." }, //[cite: 9]
    { name: "Catur Online", desc: "Mengasah kemampuan berpikir kritis, analisis risiko, dan problem solving melalui catur daring." }, //[cite: 9]
    { name: "Berenang", desc: "Menjaga kebugaran fisik dan stamina tubuh di kala senggang bersama teman-teman dekat." } //[cite: 9]
  ];

  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen font-sans antialiased">

      {/* NAVBAR */}
      <nav className="p-5 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50 flex justify-between items-center border-b border-slate-800 px-6 md:px-12">
        <h1 className="text-xl font-bold tracking-wider text-emerald-400 flex items-center gap-2">
          <Terminal size={22} /> RYAN.DATA
        </h1>
        <div className="flex gap-6 md:gap-8 text-sm font-medium text-slate-400">
          <a href="#home" className="hover:text-emerald-400 transition">Home</a>
          <a href="#about" className="hover:text-emerald-400 transition">About Me</a>
          <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
        </div>
      </nav>

      {/* SECTION 1: HOME */}
      <section id="home" className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 space-y-5">
          <div className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-xs font-mono">
            🚀 Available for Data Analyst Roles
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{personalInfo.name}</span> {/*[cite: 1, 7] */}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed text-justify">
            Seorang praktisi IT yang berfokus pada bidang **Data Analytics**. Senang mengolah data mentah menjadi wawasan visual yang bernilai, serta membangun aplikasi web testing model kecerdasan buatan menggunakan Python dan Streamlit.
          </p>
          <div className="pt-2">
            <a href="#projects" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition shadow-lg shadow-emerald-500/10 inline-block">
              Lihat Proyek Streamlit
            </a>
          </div>
        </div>

        {/* KOTAK PROFIL */}
        <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4">
          <h3 className="text-base font-bold text-emerald-400 border-b border-slate-800 pb-2 flex items-center gap-2">
            <User size={18} /> Ringkasan Profil
          </h3>
          <div className="text-xs space-y-2.5 text-slate-300 font-mono">
            <p><span className="text-slate-500">Panggilan:</span> {personalInfo.nickname}</p> {/*[cite: 1] */}
            <p><span className="text-slate-500">Domisili:</span> {personalInfo.birthPlace}</p> {/*[cite: 7] */}
            <p><span className="text-slate-500">Gender:</span> {personalInfo.gender}</p> {/*[cite: 7] */}
            <p><span className="text-slate-500">Agama:</span> {personalInfo.religion}</p> {/*[cite: 7] */}
            <p><span className="text-slate-500">Darah:</span> {personalInfo.bloodType}</p> {/*[cite: 7] */}
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" className="bg-slate-900/30 py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Kolom Kerja[cite: 10] */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Briefcase size={22} className="text-emerald-400" /> Pengalaman Kerja
            </h3>
            {workExperience.map((work, idx) => (
              <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs text-emerald-400 font-mono">{work.period}</span> {/*[cite: 10] */}
                <h4 className="text-lg font-bold text-white">{work.role}</h4> {/*[cite: 10] */}
                <p className="text-sm font-medium text-slate-400">{work.company}</p> {/*[cite: 10] */}
                <p className="text-xs text-slate-500">{work.location}</p> {/*[cite: 10] */}
                <p className="text-sm text-slate-400 text-justify pt-2 leading-relaxed">{work.desc}</p> {/*[cite: 10] */}
                <div className="pt-2">
                  <a href={work.web} target="_blank" rel="noreferrer" className="text-xs text-teal-400 hover:underline inline-flex items-center gap-1">
                    Website Immanuel <ExternalLink size={12} /> {/*[cite: 10] */}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom Hobi[cite: 9] */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Gamepad2 size={24} className="text-emerald-400" /> Minat & Hobi
            </h3>
            <div className="grid gap-4">
              {hobbies.map((hobby, idx) => (
                <div key={idx} className="p-4 bg-slate-900/40 rounded-xl border border-slate-800/60 flex gap-4 items-start">
                  <div className="p-2 bg-emerald-500/5 text-emerald-400 rounded-lg shrink-0">
                    <Terminal size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-200">{hobby.name}</h4> {/*[cite: 9] */}
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{hobby.desc}</p> {/*[cite: 9] */}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: PROJECTS */}
      <section id="projects" className="py-20 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Database size={22} className="text-emerald-400" /> Data Science Showcase
            </h3>
            <p className="text-sm text-slate-400 mt-1">Daftar model interaktif Python yang di-host menggunakan Streamlit Share.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition duration-300 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{proj.title}</h4>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed text-justify">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] bg-slate-900 text-emerald-300 px-2.5 py-1 rounded-md font-mono border border-slate-800">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-5 border-t border-slate-800/80 pt-4 text-xs font-medium">
                  <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-400 hover:text-white transition">
                    <Github size={14} /> Repository
                  </a>
                  <a href={proj.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT[cite: 2] */}
      <section id="contact" className="bg-slate-950 py-20 border-t border-slate-800 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white">Hubungi Ryan</h3>
            <p className="text-xs text-slate-400 mt-1">Buka untuk peluang magang, kerja sama analisis data, atau sekadar diskusi teknologi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs font-mono">
            <a href="mailto:ryan.febrianto@itbss.ac.id" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 p-4 rounded-xl transition border border-slate-800">
              <Mail className="text-emerald-400" size={16} /> ryan.febrianto@itbss.ac.id {/*[cite: 3] */}
            </a>
            <a href="https://wa.me/6285345005955" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 p-4 rounded-xl transition border border-slate-800">
              <Phone className="text-emerald-400" size={16} /> 0853-4500-5955 {/*[cite: 2] */}
            </a>
            <a href="#" className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 p-4 rounded-xl transition border border-slate-800">
              <Facebook className="text-emerald-400" size={16} /> Ryan Febrianto {/*[cite: 2] */}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-[11px] text-slate-600 bg-slate-950 border-t border-slate-900">
        &copy; 2026 Ryan Febrianto. Built with React & Tailwind CSS.
      </footer>

    </div>
  );
}