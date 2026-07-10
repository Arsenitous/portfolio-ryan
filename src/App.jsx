import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage          from './pages/HomePage';
import ProjectsPage      from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage         from './pages/AboutPage';
import SkillsPage        from './pages/SkillsPage';
import ContactPage       from './pages/ContactPage';

/* ── Global animation styles (shared across all pages) ─────────────────────── */
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  /* Base: hidden + shifted down */
  .fade-up {
    opacity: 0;
    transform: translateY(36px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  /* Triggered by IntersectionObserver */
  .fade-up--visible {
    opacity: 1;
    transform: translateY(0);
  }
  /* Staggered delay helpers */
  .fade-delay-1 { transition-delay: 0.1s; }
  .fade-delay-2 { transition-delay: 0.2s; }
  .fade-delay-3 { transition-delay: 0.3s; }
  .fade-delay-4 { transition-delay: 0.4s; }
  .fade-delay-5 { transition-delay: 0.5s; }
  .fade-delay-6 { transition-delay: 0.6s; }
  .fade-delay-7 { transition-delay: 0.7s; }

  /* Project card hover effect */
  .proj-card {
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.25s;
  }
  .proj-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px -8px rgba(52,211,153,0.18);
  }
  .proj-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top left, rgba(52,211,153,0.06) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
  }
  .proj-card:hover::before { opacity: 1; }
`;

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>
      <div className="bg-[#0f172a] text-slate-100 min-h-screen font-sans antialiased">
        <Routes>
          <Route path="/"                  element={<HomePage />} />
          <Route path="/about"             element={<AboutPage />} />
          <Route path="/skills"            element={<SkillsPage />} />
          <Route path="/projects"          element={<ProjectsPage />} />
          <Route path="/projects/:slug"    element={<ProjectDetailPage />} />
          <Route path="/contact"           element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}