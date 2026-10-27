import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenHandoverModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHandoverModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'projects', 'skills', 'process', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B12]/90 backdrop-blur-md border-b border-[#232236] shadow-lg shadow-black/40'
          : 'bg-[#0B0B12]/50 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#F5F3FF] hover:text-[#A78BFA] transition-colors whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-md px-1 py-0.5"
          aria-label="Sreenithi V. - Return to top"
        >
          <span className="w-8 h-8 rounded-lg bg-[#171725] border border-[#8B5CF6]/40 flex items-center justify-center text-xs font-black text-[#A78BFA] group-hover:border-[#A78BFA] transition-colors">
            {BRAND_INFO.monogram}
          </span>
          <span>
            {BRAND_INFO.name}
          </span>
        </a>

        {/* Zone 2: Navigation Links (single line, clean typography) */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#AAA7BD]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-[#A78BFA] ${
                  isActive ? 'text-[#F5F3FF] font-semibold' : 'hover:text-[#F5F3FF]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B5CF6] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Guide trigger */}
        <div className="flex items-center gap-3 shrink-0">
          {onOpenHandoverModal && (
            <button
              onClick={onOpenHandoverModal}
              type="button"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#AAA7BD] hover:text-[#F5F3FF] bg-[#12121D] hover:bg-[#171725] border border-[#232236] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              title="View standalone code & setup guide"
            >
              <span className="text-[#A78BFA]">Code Export & Guide</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg shadow-sm shadow-[#8B5CF6]/30 transition-all hover:shadow-[#8B5CF6]/50 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
          >
            Start a Project
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#AAA7BD] hover:text-white hover:bg-[#171725] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B12]/98 border-b border-[#232236] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#171725] text-[#A78BFA] font-semibold'
                    : 'text-[#AAA7BD] hover:bg-[#12121D] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#232236] flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg shadow-sm transition-colors"
            >
              Start a Project
            </a>
            {onOpenHandoverModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHandoverModal();
                }}
                className="w-full text-center py-2 px-3 text-xs font-medium text-[#AAA7BD] bg-[#12121D] border border-[#232236] rounded-lg hover:text-white"
              >
                Handover Guide & HTML Code
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
