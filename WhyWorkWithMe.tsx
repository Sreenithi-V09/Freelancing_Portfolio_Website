import React from 'react';
import { Target, Smartphone, MessageSquare, Sparkles } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const WhyWorkWithMe: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-[#A78BFA]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#A78BFA]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-[#A78BFA]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#A78BFA]" />;
    }
  };

  return (
    <section id="why-work-with-me" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
              Why Partner With Me
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3FF]">
              A Thoughtful Approach to Every Project
            </h2>
            <p className="text-sm sm:text-base text-[#AAA7BD] mt-2">
              What you can expect when working together on your website: personal attention, honest advice, and dependable delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 90}
              className="p-5 rounded-2xl bg-[#171725] border border-[#232236] hover:border-[#8B5CF6]/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#12121D] border border-[#232236] flex items-center justify-center mb-4 group-hover:border-[#8B5CF6]/40 transition-colors">
                  {getFeatureIcon(item.icon)}
                </div>
                <h3 className="text-base font-bold text-[#F5F3FF] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#AAA7BD] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#232236]/80 text-[11px] font-medium text-[#A78BFA]">
                Core Value #{idx + 1}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
