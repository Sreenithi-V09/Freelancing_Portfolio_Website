import React from 'react';
import { Briefcase, User, Layout, CheckCircle2, ArrowRight, Info } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#A78BFA]" />;
      case 'User':
        return <User className="w-5 h-5 text-[#A78BFA]" />;
      case 'Layout':
      default:
        return <Layout className="w-5 h-5 text-[#A78BFA]" />;
    }
  };

  const handleDiscussClick = (serviceTitle: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
              Tailored Development
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3FF]">
              Websites Built Around Your Goals
            </h2>
            <p className="text-sm sm:text-base text-[#AAA7BD] mt-2">
              Clear, practical packages designed to help businesses and individuals establish an effective web presence without unnecessary complexity.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              delay={idx * 120}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#171725] border border-[#232236] hover:border-[#8B5CF6]/50 transition-all duration-200 group"
            >
              <div>
                {/* Header with icon & badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#12121D] border border-[#232236] flex items-center justify-center group-hover:border-[#8B5CF6]/40 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-medium text-[#AAA7BD] bg-[#12121D] px-2.5 py-1 rounded-md border border-[#232236]">
                    {service.recommendedFor}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[#F5F3FF] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AAA7BD] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-4 border-t border-[#232236]/80 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#A78BFA]">
                    Key Deliverables
                  </div>
                  <ul className="space-y-2 text-xs text-[#AAA7BD]">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => handleDiscussClick(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#F5F3FF] bg-[#12121D] hover:bg-[#8B5CF6] hover:text-white border border-[#232236] hover:border-[#8B5CF6] rounded-xl transition-all duration-200 group-hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Honest Transparency Note */}
        <ScrollReveal delay={250}>
          <div className="mt-8 p-4 rounded-xl bg-[#12121D] border border-[#232236] flex items-start gap-3 text-xs text-[#AAA7BD]">
            <Info className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#F5F3FF]">Scope Transparency:</strong> All core deliverables above are built using pure, accessible HTML5, CSS3, and JavaScript for static hosting. If your project requires database storage, user authentication, or third-party automated email delivery services, we can discuss integrating suitable backend tools or external providers.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
