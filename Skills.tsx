import React from 'react';
import { Code, Terminal, Database, GitBranch, Layers, Cpu, Server } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
              Technical Foundation
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3FF]">
              Tools I Work With
            </h2>
            <p className="text-sm sm:text-base text-[#AAA7BD] mt-2">
              An honest overview of technologies I actively use and study to build clean, functional web solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {/* Frontend Core Section */}
          <ScrollReveal delay={100}>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-4 h-4 text-[#A78BFA]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F3FF]">
                Core Web Technologies
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILLS_DATA.frontend.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#171725] border border-[#232236] hover:border-[#8B5CF6]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-[#F5F3FF] font-mono">
                      {skill.name}
                    </span>
                    <span className="text-[11px] text-[#A78BFA] font-medium bg-[#12121D] px-2 py-0.5 rounded border border-[#232236]">
                      Primary
                    </span>
                  </div>
                  <p className="text-xs text-[#AAA7BD] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Additional Skills & Programming Languages */}
          <ScrollReveal delay={200}>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-[#A78BFA]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F3FF]">
                Computer Science & Programming Languages
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS_DATA.additional.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#171725] border border-[#232236] hover:border-[#8B5CF6]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-[#F5F3FF] font-mono">
                      {skill.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#AAA7BD] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Honest Note About Frameworks & Tools */}
        <ScrollReveal delay={250}>
          <div className="mt-8 p-4 rounded-xl bg-[#12121D] border border-[#232236] text-xs text-[#AAA7BD] leading-relaxed">
            <strong className="text-[#F5F3FF]">Realistic Learning Path:</strong> Rather than listing dozens of complex frameworks prematurely, I focus on mastering core web fundamentals — semantic HTML, responsive CSS, and clean JavaScript logic. When projects require specific tools or deployment workflows, I learn and adopt them with structured precision.
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
