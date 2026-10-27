import React from 'react';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenHandoverModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHandoverModal }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B0B12] border-t border-[#232236] pt-16 pb-12 text-xs text-[#AAA7BD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#232236]">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#171725] border border-[#8B5CF6]/40 flex items-center justify-center text-xs font-bold text-[#A78BFA]">
                {BRAND_INFO.monogram}
              </span>
              <span className="text-base font-bold text-[#F5F3FF]">
                {BRAND_INFO.name}
              </span>
            </div>
            <div className="text-xs text-[#A78BFA] font-medium">
              {BRAND_INFO.title}
            </div>
            <p className="text-xs text-[#AAA7BD] leading-relaxed max-w-sm">
              {BRAND_INFO.tagline}
            </p>
            <p className="text-[11px] text-slate-500">
              Crafted with clean HTML5, CSS3, and modern frontend design principles.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F5F3FF]">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="hover:text-[#F5F3FF] transition-colors py-0.5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Handover */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F5F3FF]">
              Connect
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-[#171725] border border-[#232236] flex items-center justify-center text-[#AAA7BD] hover:text-[#A78BFA] hover:border-[#8B5CF6]/50 transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#171725] border border-[#232236] flex items-center justify-center text-[#AAA7BD] hover:text-[#A78BFA] hover:border-[#8B5CF6]/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#171725] border border-[#232236] flex items-center justify-center text-[#AAA7BD] hover:text-[#A78BFA] hover:border-[#8B5CF6]/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {onOpenHandoverModal && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenHandoverModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12121D] border border-[#232236] hover:border-[#8B5CF6]/40 text-[11px] text-[#A78BFA] hover:text-white transition-colors"
                >
                  <span>Handover Guide & Static Source</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {currentYear} {BRAND_INFO.name}. All rights reserved. Built with modern, honest web design.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#AAA7BD] hover:text-[#F5F3FF] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
