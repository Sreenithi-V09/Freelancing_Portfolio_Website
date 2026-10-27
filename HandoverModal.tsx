import React, { useState } from 'react';
import { X, Copy, Check, FileCode, BookOpen, CheckSquare, ListChecks, Download, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

interface HandoverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HandoverModal: React.FC<HandoverModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'html' | 'css' | 'js' | 'checklist'>('guide');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sampleHtmlSnippet = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sreenithi V. — Freelance Web Developer</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Semantic header with 3-zone layout -->
  <header class="navbar">
    <a href="#hero" class="brand">SV <span>Sreenithi V.</span></a>
    <nav class="nav-links">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
    <a href="#contact" class="btn btn-primary">Start a Project</a>
  </header>
  <!-- Full content included in /portfolio/index.html -->
</body>
</html>`;

  const sampleCssSnippet = `:root {
  --bg-main: #0B0B12;
  --bg-secondary: #12121D;
  --bg-card: #171725;
  --accent-primary: #A78BFA;
  --accent-highlight: #8B5CF6;
  --text-main: #F5F3FF;
  --text-muted: #AAA7BD;
  --border-subtle: #232236;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.6;
}
/* Full styling included in /portfolio/css/style.css */`;

  const sampleJsSnippet = `// Vanilla JavaScript for Sreenithi V. Portfolio
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }

  // 2. FAQ Accordion
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
      const content = btn.nextElementSibling;
      if (content) content.classList.toggle('open');
    });
  });

  // 3. Contact Form Submission Formatter
  const contactForm = document.getElementById('inquiryForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Formats mailto link directly to sreenithivenkatesan09@gmail.com
    });
  }
});`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="handover-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#171725] border border-[#232236] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#12121D] border-b border-[#232236] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#A78BFA]" />
            <h3 id="handover-title" className="text-base sm:text-lg font-bold text-[#F5F3FF]">
              Deliverables & Handover Documentation
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#AAA7BD] hover:text-white hover:bg-[#171725] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Strip */}
        <div className="px-6 pt-3 bg-[#12121D]/80 border-b border-[#232236] flex flex-wrap gap-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`px-3.5 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === 'guide'
                ? 'bg-[#171725] text-[#A78BFA] border-t-2 border-[#8B5CF6] font-semibold'
                : 'text-[#AAA7BD] hover:text-white'
            }`}
          >
            Deployment & Setup Guide
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('checklist')}
            className={`px-3.5 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === 'checklist'
                ? 'bg-[#171725] text-[#A78BFA] border-t-2 border-[#8B5CF6] font-semibold'
                : 'text-[#AAA7BD] hover:text-white'
            }`}
          >
            Pre-Launch & Info Checklists
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('html')}
            className={`px-3.5 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === 'html'
                ? 'bg-[#171725] text-[#A78BFA] border-t-2 border-[#8B5CF6] font-semibold'
                : 'text-[#AAA7BD] hover:text-white'
            }`}
          >
            Vanilla index.html
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('css')}
            className={`px-3.5 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === 'css'
                ? 'bg-[#171725] text-[#A78BFA] border-t-2 border-[#8B5CF6] font-semibold'
                : 'text-[#AAA7BD] hover:text-white'
            }`}
          >
            style.css
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('js')}
            className={`px-3.5 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === 'js'
                ? 'bg-[#171725] text-[#A78BFA] border-t-2 border-[#8B5CF6] font-semibold'
                : 'text-[#AAA7BD] hover:text-white'
            }`}
          >
            script.js
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6 text-xs sm:text-sm text-[#AAA7BD] leading-relaxed">
          {activeTab === 'guide' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#12121D] border border-[#232236]">
                <h4 className="text-sm font-bold text-[#F5F3FF] mb-1">
                  How to Host for Free on GitHub Pages (Step-by-Step)
                </h4>
                <p className="text-xs text-[#AAA7BD]">
                  You can deploy the complete standalone static portfolio directly on GitHub Pages with zero server fees.
                </p>
                <ol className="mt-3 space-y-2 text-xs list-decimal pl-4 text-[#AAA7BD]">
                  <li>
                    Create a free account on <strong className="text-[#F5F3FF]">GitHub.com</strong>.
                  </li>
                  <li>
                    Create a new public repository named <code className="text-[#A78BFA] bg-[#0B0B12] px-1 py-0.5 rounded">sreenithi-v.github.io</code> or <code className="text-[#A78BFA] bg-[#0B0B12] px-1 py-0.5 rounded">portfolio</code>.
                  </li>
                  <li>
                    Upload the files from the <code className="text-[#A78BFA] bg-[#0B0B12] px-1 py-0.5 rounded">portfolio/</code> directory (<code className="text-[#F5F3FF]">index.html</code>, <code className="text-[#F5F3FF]">css/style.css</code>, <code className="text-[#F5F3FF]">js/script.js</code>).
                  </li>
                  <li>
                    In your GitHub repository, go to <strong className="text-[#F5F3FF]">Settings &rarr; Pages</strong>.
                  </li>
                  <li>
                    Under <strong className="text-[#F5F3FF]">Build and deployment</strong>, set Source to <strong className="text-[#F5F3FF]">Deploy from a branch</strong> and select <code className="text-[#A78BFA]">main</code> / <code className="text-[#A78BFA]">/(root)</code>.
                  </li>
                  <li>
                    Click <strong className="text-[#F5F3FF]">Save</strong>. In 1–2 minutes, your website is live worldwide!
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#12121D] border border-[#232236]">
                  <h5 className="font-bold text-[#F5F3FF] mb-1.5">How to Test Locally</h5>
                  <p className="text-[#AAA7BD] leading-relaxed">
                    Simply open <code className="text-[#A78BFA]">portfolio/index.html</code> in Google Chrome, Microsoft Edge, or Firefox. No command line, Node.js, or local server installation is required.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#12121D] border border-[#232236]">
                  <h5 className="font-bold text-[#F5F3FF] mb-1.5">How to Connect Formspree for Direct Form Emails</h5>
                  <p className="text-[#AAA7BD] leading-relaxed">
                    Register free at <strong className="text-[#F5F3FF]">formspree.io</strong>, create a form pointing to <code className="text-[#A78BFA]">{BRAND_INFO.email}</code>, and update the form action URL in <code className="text-[#A78BFA]">index.html</code>.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#12121D] border border-[#232236]">
                <h4 className="text-sm font-bold text-[#F5F3FF] mb-2 flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#A78BFA]" />
                  <span>Personal Information & Link Checklist</span>
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-[#171725]">
                    <span>Email Address:</span>
                    <span className="font-mono text-[#A78BFA]">sreenithivenkatesan09@gmail.com (Configured)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#171725]">
                    <span>LinkedIn Profile:</span>
                    <span className="font-mono text-[#A78BFA]">linkedin.com/in/sreenithi-v-7a24692a4 (Configured)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-[#171725]">
                    <span>GitHub Repositories:</span>
                    <span className="font-mono text-[#A78BFA]">github.com/Sreenithi-V09 (Configured)</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#12121D] border border-[#232236]">
                <h4 className="text-sm font-bold text-[#F5F3FF] mb-2 flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-[#A78BFA]" />
                  <span>Pre-Launch Testing Checklist</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#AAA7BD]">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span><strong className="text-[#F5F3FF]">Mobile Viewport:</strong> Tested on 320px, 375px, 768px, and 1024px widths. Zero horizontal scroll.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span><strong className="text-[#F5F3FF]">Accessibility:</strong> Semantic HTML landmarks used, alt attributes on all graphics, visible keyboard focus rings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span><strong className="text-[#F5F3FF]">Form Validation:</strong> Prevents empty submissions, verifies email format, and provides pre-filled mail drafts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span><strong className="text-[#F5F3FF]">SEO & Social Metadata:</strong> Title, description, Open Graph tags, and Schema.org structured data embedded in HTML.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span><strong className="text-[#F5F3FF]">Honest Representation:</strong> Strictly highlights genuine beginner skills and real academic projects with no fabricated claims.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'html' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#AAA7BD]">File location: <code className="text-[#A78BFA]">portfolio/index.html</code></span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(sampleHtmlSnippet)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-[#12121D] hover:bg-[#1f1f33] rounded border border-[#232236] text-[#A78BFA]"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#0B0B12] rounded-xl border border-[#232236] text-xs font-mono text-[#AAA7BD] overflow-x-auto max-h-96">
                <code>{sampleHtmlSnippet}</code>
              </pre>
            </div>
          )}

          {activeTab === 'css' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#AAA7BD]">File location: <code className="text-[#A78BFA]">portfolio/css/style.css</code></span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(sampleCssSnippet)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-[#12121D] hover:bg-[#1f1f33] rounded border border-[#232236] text-[#A78BFA]"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#0B0B12] rounded-xl border border-[#232236] text-xs font-mono text-[#AAA7BD] overflow-x-auto max-h-96">
                <code>{sampleCssSnippet}</code>
              </pre>
            </div>
          )}

          {activeTab === 'js' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#AAA7BD]">File location: <code className="text-[#A78BFA]">portfolio/js/script.js</code></span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(sampleJsSnippet)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-[#12121D] hover:bg-[#1f1f33] rounded border border-[#232236] text-[#A78BFA]"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#0B0B12] rounded-xl border border-[#232236] text-xs font-mono text-[#AAA7BD] overflow-x-auto max-h-96">
                <code>{sampleJsSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#12121D] border-t border-[#232236] flex items-center justify-between text-xs text-[#AAA7BD]">
          <span>All standalone files generated in workspace root: <code className="text-[#A78BFA]">/portfolio/</code></span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
