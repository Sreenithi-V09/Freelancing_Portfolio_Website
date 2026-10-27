import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { HandoverModal } from './components/HandoverModal';
import { ParticleBackground } from './components/ParticleBackground';

export default function App() {
  const [isHandoverOpen, setIsHandoverOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState('Business Website');
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#0B0B12] text-[#F5F3FF] selection:bg-[#8B5CF6] selection:text-white relative overflow-hidden">
      {/* =========================================================================
          BACKGROUND EFFECTS (Simple, subtle, non-intrusive)
          1. Dot Grid Texture
          2. Three Soft Ambient Floating Orbs (Purple & Indigo)
          3. Dynamic Cursor Spotlight
          ========================================================================= */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* 1. Subtle Dot Grid Pattern */}
        <div className="absolute inset-0 bg-grid-dots opacity-45" />

        {/* 2. Lightweight Drifting Particle System */}
        <ParticleBackground />

        {/* 2. Ambient Floating Purple Glow Orbs */}
        {/* Top-Right Orb near Hero */}
        <div
          className="absolute -top-32 right-[-10%] w-[550px] h-[550px] rounded-full bg-[#8B5CF6] blur-[150px] animate-ambient-1"
        />

        {/* Mid-Left Orb near Services & Projects */}
        <div
          className="absolute top-[35%] -left-32 w-[600px] h-[600px] rounded-full bg-[#A78BFA] blur-[170px] animate-ambient-2"
        />

        {/* Bottom-Right Orb near Contact & Footer */}
        <div
          className="absolute bottom-[8%] right-[-8%] w-[580px] h-[580px] rounded-full bg-[#7C3AED] blur-[160px] animate-ambient-3"
        />

        {/* 3. Interactive Mouse Spotlight (Subtle cursor illumination) */}
        <div
          className="hidden md:block absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(167, 139, 250, 0.05), transparent 80%)`,
          }}
        />
      </div>

      {/* Top Navbar */}
      <Navbar onOpenHandoverModal={() => setIsHandoverOpen(true)} />

      {/* Main Content Landmarks */}
      <main id="main-content" className="relative z-0">
        <Hero />
        <About />
        <Services onSelectServiceForInquiry={handleSelectService} />
        <Projects />
        <Skills />
        <Process />
        <WhyWorkWithMe />
        <Faq />
        <Contact initialProjectType={selectedServiceForInquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenHandoverModal={() => setIsHandoverOpen(true)} />

      {/* Handover & Standalone Static Code Modal */}
      <HandoverModal
        isOpen={isHandoverOpen}
        onClose={() => setIsHandoverOpen(false)}
      />
    </div>
  );
}

