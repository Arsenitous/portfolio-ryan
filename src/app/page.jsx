'use client';

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsPreviewSection from '../components/SkillsPreviewSection';
import ContactSection from '../components/ContactSection';
import { useScrollFade } from '../hooks/useScrollFade';

export default function HomePage() {
  useScrollFade();

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsPreviewSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
