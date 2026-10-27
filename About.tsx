import React from 'react';
import { BookOpen, Compass, Monitor, CheckCircle, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const highlights = [
    {
      title: 'Practical Learning Approach',
      desc: 'Building working websites and coding from the ground up to deeply understand core browser technologies rather than relying on heavy abstractions.',
      icon: BookOpen,
    },
    {
      title: 'Responsive Design & Usability',
      desc: 'Prioritizing clear typography, straightforward navigation, and layouts that look intentional on screens of any size.',
      icon: Monitor,
    },
    {
      title: 'Clear 1-on-1 Communication',
      desc: 'Listening closely to project goals, asking clarifying questions early, and explaining technical decisions in plain language.',
      icon: Compass,
    },
    {
      title: 'Continuous Improvement',
      desc: 'Refining code structure, following web standards, and consistently learning how to translate real-world client needs into functional web experiences.',
      icon: CheckCircle,
    },
  ];

  const focusAreas = [
    { title: 'Frontend Development', detail: 'HTML5, CSS3, modern JavaScript' },
    { title: 'Responsive Websites', detail: 'Mobile-first layout & cross-device testing' },
    { title: 'Personal & Business Websites', detail: 'Clean portfolios, local business sites & landing pages' },
  ];

  return (
    <section id="about" className="py-20 bg-[#12121D]/50 border-y border-[#232236]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
              Background & Approach
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3FF]">
              A Little About Me
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative */}
          <ScrollReveal delay={100} className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#AAA7BD] leading-relaxed">
            <p className="text-[#F5F3FF] font-medium leading-relaxed">
              {BRAND_INFO.aboutIntro}
            </p>
            <p className="text-sm sm:text-base">
              My interest in web development comes from the excitement of turning ideas into interactive, visually appealing realities that people can immediately access in their browsers. Combining Computer Science foundations with Business Systems allows me to think not just about code syntax, but about how a website serves the real goals of a business or professional.
            </p>
            <p className="text-sm sm:text-base">
              I believe that honest, transparent relationships make the best projects. As I build my freelance practice, my commitment to every client is simple: thoughtful attention to your project, prompt communication, clean code, and a website you are proud to share.
            </p>

            {/* Currently Focused On Box */}
            <div className="pt-4">
              <div className="p-5 rounded-xl bg-[#171725] border border-[#232236]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A78BFA] mb-3">
                  Currently Focused On
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {focusAreas.map((area, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-[#12121D] border border-[#232236]/60">
                      <div className="text-xs font-semibold text-[#F5F3FF]">{area.title}</div>
                      <div className="text-[11px] text-[#AAA7BD] mt-0.5">{area.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights Cards */}
          <ScrollReveal delay={200} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#171725] border border-[#232236] hover:border-[#8B5CF6]/40 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#12121D] border border-[#8B5CF6]/30 flex items-center justify-center text-[#A78BFA] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F5F3FF]">{item.title}</h4>
                      <p className="text-xs text-[#AAA7BD] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="p-4 rounded-xl bg-gradient-to-br from-[#8B5CF6]/10 to-transparent border border-[#8B5CF6]/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#F5F3FF]">Interested in collaborating?</div>
                <div className="text-[11px] text-[#AAA7BD] mt-0.5">Let's discuss your project requirements</div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#A78BFA] hover:text-white transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
