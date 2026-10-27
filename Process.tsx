import React from 'react';
import { Search, Compass, Code2, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Process: React.FC = () => {
  const getStepIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Search className="w-4 h-4 text-[#A78BFA]" />;
      case '02':
        return <Compass className="w-4 h-4 text-[#A78BFA]" />;
      case '03':
        return <Code2 className="w-4 h-4 text-[#A78BFA]" />;
      case '04':
        return <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />;
      case '05':
      default:
        return <Rocket className="w-4 h-4 text-[#A78BFA]" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-[#12121D]/50 border-t border-[#232236]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
              Structured Workflow
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3FF]">
              From Idea to Website
            </h2>
            <p className="text-sm sm:text-base text-[#AAA7BD] mt-2">
              A step-by-step collaborative process ensuring complete transparency, clear expectations, and timely delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal
              key={step.number}
              delay={idx * 80}
              className="p-5 rounded-2xl bg-[#171725] border border-[#232236] hover:border-[#8B5CF6]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-black font-mono text-[#8B5CF6] group-hover:text-[#A78BFA] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#12121D] border border-[#232236] flex items-center justify-center">
                    {getStepIcon(step.number)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#F5F3FF] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#AAA7BD] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#232236] text-[11px] font-medium text-[#A78BFA]">
                {step.focus}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Scope and Hosting Agreement Notice */}
        <ScrollReveal delay={200}>
          <div className="mt-8 p-4 rounded-xl bg-[#171725] border border-[#232236] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#AAA7BD]">
            <p className="leading-relaxed max-w-3xl">
              <strong className="text-[#F5F3FF]">Clear Agreement Ahead of Time:</strong> Project scope, milestones, delivery timelines, hosting options (e.g. GitHub Pages or client domain), and any third-party expenses are clearly agreed upon before any coding starts. No surprise invoices.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] px-4 py-2 rounded-lg shrink-0 transition-colors"
            >
              <span>Start Step 01</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
