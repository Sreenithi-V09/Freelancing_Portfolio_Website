import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#12121D]/50 border-t border-[#232236]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
              Clear Answers
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3FF]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#AAA7BD] mt-2">
              Straightforward details on what to expect when hiring me for your freelance website project.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <ScrollReveal delay={120}>
          <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={index}
                className="rounded-xl bg-[#171725] border border-[#232236] overflow-hidden transition-colors hover:border-[#8B5CF6]/30"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#F5F3FF] hover:text-[#A78BFA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#AAA7BD] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#A78BFA]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#AAA7BD] leading-relaxed border-t border-[#232236]/60 animate-fadeIn"
                  >
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
          </div>
        </ScrollReveal>

        {/* Still have questions prompt */}
        <ScrollReveal delay={200}>
          <div className="mt-8 text-center text-xs text-[#AAA7BD]">
            Have a question not listed here?{' '}
            <a
              href="#contact"
              className="text-[#A78BFA] hover:text-white underline underline-offset-4 font-medium transition-colors"
            >
              Ask directly in the contact form below
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
