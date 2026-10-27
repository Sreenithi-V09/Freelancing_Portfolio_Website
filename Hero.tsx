import React, { useState } from 'react';
import { ArrowRight, Code2, Sparkles, CheckCircle2, Monitor, Smartphone, Layers } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'deliverables'>('preview');

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#8B5CF6]/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow & Availability row */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-semibold tracking-wider text-[#A78BFA] uppercase">
                {BRAND_INFO.eyebrow}
              </span>
              <span className="text-[#232236] text-sm" aria-hidden="true">|</span>
              <div className="inline-flex items-center gap-1.5 text-[#AAA7BD] bg-[#12121D] px-2.5 py-1 rounded-md border border-[#232236]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" aria-hidden="true" />
                <span>{BRAND_INFO.availability}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F3FF] leading-[1.15] text-balance">
              Your Ideas Deserve a{' '}
              <span className="bg-gradient-to-r from-[#F5F3FF] via-[#DDD6FE] to-[#A78BFA] bg-clip-text text-transparent">
                Beautiful Website.
              </span>
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-[#AAA7BD] leading-relaxed max-w-xl">
              {BRAND_INFO.heroBio}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => handleScroll('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl shadow-lg shadow-[#8B5CF6]/25 transition-all hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
              >
                <span>Let's Build Your Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F5F3FF] bg-[#171725] hover:bg-[#1f1f33] border border-[#232236] hover:border-[#8B5CF6]/50 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              >
                <span>Explore My Work</span>
              </button>
            </div>

            {/* Honest credentials summary */}
            <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#AAA7BD] border-t border-[#232236]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
                Clean Semantic HTML & CSS
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
                Mobile & Tablet Responsive
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
                Direct 1-on-1 Communication
              </span>
            </div>
          </div>

          {/* Right Column: Refined Browser Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#12121D] border border-[#232236] shadow-2xl shadow-black/60 overflow-hidden group">
              {/* Browser chrome header */}
              <div className="px-4 py-3 bg-[#0B0B12] border-b border-[#232236] flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                </div>
                {/* Simulated URL bar */}
                <div className="flex-1 max-w-[200px] bg-[#171725] px-2.5 py-1 rounded text-[11px] font-mono text-[#AAA7BD] truncate text-center border border-[#232236]">
                  sreenithi.dev/client-preview
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-[#A78BFA] bg-[#8B5CF6]/15 px-1.5 py-0.5 rounded">
                    HTML5
                  </span>
                </div>
              </div>

              {/* Mockup Tab Selector */}
              <div className="px-4 pt-2.5 pb-2 bg-[#171725]/50 border-b border-[#232236] flex items-center gap-1 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'preview'
                      ? 'bg-[#171725] text-[#A78BFA] shadow-xs'
                      : 'text-[#AAA7BD] hover:text-[#F5F3FF]'
                  }`}
                >
                  Live Preview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'code'
                      ? 'bg-[#171725] text-[#A78BFA] shadow-xs'
                      : 'text-[#AAA7BD] hover:text-[#F5F3FF]'
                  }`}
                >
                  Clean Markup
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('deliverables')}
                  className={`px-3 py-1 rounded-md font-medium transition-colors ${
                    activeTab === 'deliverables'
                      ? 'bg-[#171725] text-[#A78BFA] shadow-xs'
                      : 'text-[#AAA7BD] hover:text-[#F5F3FF]'
                  }`}
                >
                  Deliverables
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="p-5 min-h-[300px] flex flex-col justify-between bg-gradient-to-b from-[#12121D] to-[#0B0B12]">
                {activeTab === 'preview' && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-[#171725] border border-[#232236]">
                      <div className="flex items-center justify-between text-xs text-[#AAA7BD] mb-2">
                        <span className="font-semibold text-[#F5F3FF]">Modern Business Front</span>
                        <span className="text-[#A78BFA]">100% Responsive</span>
                      </div>
                      <div className="h-2 w-3/4 bg-[#232236] rounded mb-2" />
                      <div className="h-2 w-1/2 bg-[#232236]/60 rounded" />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-lg bg-[#171725] border border-[#232236]">
                        <Smartphone className="w-4 h-4 text-[#A78BFA] mb-1.5" />
                        <div className="text-xs font-semibold text-[#F5F3FF]">Mobile First</div>
                        <div className="text-[11px] text-[#AAA7BD] mt-0.5">Tested across phones & tablets</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#171725] border border-[#232236]">
                        <Monitor className="w-4 h-4 text-[#A78BFA] mb-1.5" />
                        <div className="text-xs font-semibold text-[#F5F3FF]">Fast Loading</div>
                        <div className="text-[11px] text-[#AAA7BD] mt-0.5">Vanilla HTML/CSS, zero bloat</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-between text-xs">
                      <span className="text-[#F5F3FF] font-medium">Ready for your first client project?</span>
                      <span className="text-[#A78BFA] font-semibold text-[11px]">Free Consultation</span>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="space-y-2 font-mono text-[11px] text-[#AAA7BD] overflow-x-auto leading-relaxed">
                    <div><span className="text-[#8B5CF6]">&lt;header</span> <span className="text-[#A78BFA]">class</span>=<span className="text-emerald-400">"site-header"</span><span className="text-[#8B5CF6]">&gt;</span></div>
                    <div className="pl-3"><span className="text-[#8B5CF6]">&lt;h1&gt;</span>Your Business Brand<span className="text-[#8B5CF6]">&lt;/h1&gt;</span></div>
                    <div className="pl-3"><span className="text-[#8B5CF6]">&lt;nav&gt;</span>Home · Services · Contact<span className="text-[#8B5CF6]">&lt;/nav&gt;</span></div>
                    <div><span className="text-[#8B5CF6]">&lt;/header&gt;</span></div>
                    <div><span className="text-[#8B5CF6]">&lt;section</span> <span className="text-[#A78BFA]">id</span>=<span className="text-emerald-400">"services"</span><span className="text-[#8B5CF6]">&gt;</span></div>
                    <div className="pl-3 text-slate-500">&lt;!-- Clean, validated semantic structure --&gt;</div>
                    <div className="pl-3"><span className="text-[#8B5CF6]">&lt;article</span> <span className="text-[#A78BFA]">class</span>=<span className="text-emerald-400">"card"</span><span className="text-[#8B5CF6]">&gt;</span>...<span className="text-[#8B5CF6]">&lt;/article&gt;</span></div>
                    <div><span className="text-[#8B5CF6]">&lt;/section&gt;</span></div>
                  </div>
                )}

                {activeTab === 'deliverables' && (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 p-2 rounded bg-[#171725] text-[#AAA7BD]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Production-ready, formatted HTML5 & CSS3 code</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#171725] text-[#AAA7BD]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Tested for cross-browser & viewport responsiveness</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#171725] text-[#AAA7BD]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Deployment assistance to GitHub Pages or Netlify</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded bg-[#171725] text-[#AAA7BD]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Clear documentation on updating text & photos</span>
                    </div>
                  </div>
                )}

                {/* Footer status of mockup */}
                <div className="pt-4 border-t border-[#232236] flex items-center justify-between text-[11px] text-[#AAA7BD]">
                  <span>Status: Available for hire</span>
                  <span className="text-[#A78BFA]">Sreenithi V. Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Feature / Trust Strip below the split */}
        <div className="mt-14 pt-8 border-t border-[#232236] grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-3.5 rounded-xl bg-[#12121D]/60 border border-[#232236]/70">
            <div className="text-xs font-semibold text-[#F5F3FF]">Semantic Code</div>
            <div className="text-[12px] text-[#AAA7BD] mt-0.5">HTML5 structure designed for SEO & accessibility</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#12121D]/60 border border-[#232236]/70">
            <div className="text-xs font-semibold text-[#F5F3FF]">Responsive Design</div>
            <div className="text-[12px] text-[#AAA7BD] mt-0.5">Consistent experience on phones, tablets & desktops</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#12121D]/60 border border-[#232236]/70">
            <div className="text-xs font-semibold text-[#F5F3FF]">Clear Communication</div>
            <div className="text-[12px] text-[#AAA7BD] mt-0.5">Regular updates & agreed milestones prior to launch</div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#12121D]/60 border border-[#232236]/70">
            <div className="text-xs font-semibold text-[#F5F3FF]">Practical Solutions</div>
            <div className="text-[12px] text-[#AAA7BD] mt-0.5">Honest development focused on what works best for you</div>
          </div>
        </div>
      </div>
    </section>
  );
};
