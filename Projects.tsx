import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ShieldAlert, Bot, Globe, CheckCircle2, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ScrollReveal } from './ScrollReveal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const renderCardMockup = (project: Project) => {
    switch (project.visualType) {
      case 'cybersecurity':
        return (
          <div className="relative h-48 bg-[#0B0B12] rounded-xl border border-[#232236] p-4 flex flex-col justify-between overflow-hidden group-hover:border-[#8B5CF6]/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#AAA7BD] border-b border-[#232236] pb-2">
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span className="text-[#F5F3FF]">SEC-DASHBOARD v1.0</span>
              </div>
              <span className="text-emerald-400 font-sans">MySQL Connected</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2 rounded bg-[#171725] border border-[#232236]">
                <div className="text-[10px] text-[#AAA7BD]">Attack Prediction</div>
                <div className="text-xs font-bold text-[#A78BFA] font-mono mt-0.5">DDoS Risk: 88%</div>
              </div>
              <div className="p-2 rounded bg-[#171725] border border-[#232236]">
                <div className="text-[10px] text-[#AAA7BD]">Status Monitor</div>
                <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">Live Auth Guard</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#AAA7BD] pt-2 border-t border-[#232236]">
              <span>Vector: Ingress Port 443</span>
              <span className="text-[#A78BFA]">Click to Simulate</span>
            </div>
          </div>
        );

      case 'chatbot':
        return (
          <div className="relative h-48 bg-[#0B0B12] rounded-xl border border-[#232236] p-4 flex flex-col justify-between overflow-hidden group-hover:border-[#8B5CF6]/50 transition-colors">
            <div className="flex items-center justify-between text-[11px] text-[#AAA7BD] border-b border-[#232236] pb-2">
              <div className="flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span className="text-[#F5F3FF] font-semibold">Medical Info Assistant</span>
              </div>
              <span className="text-[10px] text-[#A78BFA] bg-[#8B5CF6]/15 px-1.5 py-0.5 rounded">Python AI</span>
            </div>

            <div className="space-y-2 my-auto text-xs">
              <div className="bg-[#171725] border border-[#232236] p-2 rounded-lg text-[11px] text-[#AAA7BD] max-w-[85%]">
                How can I prepare for a healthy morning routine?
              </div>
              <div className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 p-2 rounded-lg text-[11px] text-[#F5F3FF] max-w-[90%] ml-auto">
                Prioritize 500ml water, light mobility stretching, and balanced proteins...
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#AAA7BD] pt-2 border-t border-[#232236]">
              <span>Natural Language UI</span>
              <span className="text-[#A78BFA]">Interactive Chat</span>
            </div>
          </div>
        );

      case 'portfolio':
      default:
        return (
          <div className="relative h-48 bg-[#0B0B12] rounded-xl border border-[#232236] p-4 flex flex-col justify-between overflow-hidden group-hover:border-[#8B5CF6]/50 transition-colors">
            {/* Browser top */}
            <div className="flex items-center justify-between pb-2 border-b border-[#232236]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              </div>
              <span className="text-[10px] font-mono text-[#AAA7BD]">sreenithi-portfolio.html</span>
              <span className="text-[10px] text-[#A78BFA]">HTML5 & CSS3</span>
            </div>

            {/* Inner miniature */}
            <div className="p-3 bg-[#171725] rounded-lg border border-[#232236] my-auto space-y-2">
              <div className="text-xs font-bold text-[#F5F3FF]">Your Ideas Deserve a Beautiful Website.</div>
              <div className="h-1.5 w-3/4 bg-[#232236] rounded" />
              <div className="flex gap-1.5 pt-1">
                <span className="text-[9px] bg-[#8B5CF6] text-white px-1.5 py-0.5 rounded">CTA Button</span>
                <span className="text-[9px] bg-[#12121D] text-[#AAA7BD] px-1.5 py-0.5 rounded">Portfolio Grid</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#AAA7BD] pt-2 border-t border-[#232236]">
              <span>Zero Build-Step Architecture</span>
              <span className="text-[#A78BFA]">Clean Code</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#12121D]/50 border-t border-[#232236]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
              Practical Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3FF]">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-[#AAA7BD] mt-2">
              A selection of projects that reflect my learning, problem-solving approach, and interest in practical web development.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              delay={idx * 120}
              className="flex flex-col justify-between p-5 rounded-2xl bg-[#171725] border border-[#232236] hover:border-[#8B5CF6]/50 transition-all duration-200 group"
            >
              <div>
                {/* Visual Preview Container */}
                <div className="mb-5">
                  {renderCardMockup(project)}
                </div>

                {/* Metadata row */}
                <div className="flex items-center gap-2 text-xs text-[#AAA7BD] mb-2">
                  <span className="text-[#A78BFA] font-medium">{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.status}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F5F3FF] mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#AAA7BD] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technology Tags (unboxed text with separators) */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#A78BFA] font-mono mb-4">
                  {project.techStack.map((tech, idx) => (
                    <React.Fragment key={idx}>
                      <span className="bg-[#12121D] px-2 py-0.5 rounded border border-[#232236]">
                        {tech}
                      </span>
                      {idx < project.techStack.length - 1 && <span className="text-slate-600">/</span>}
                    </React.Fragment>
                  ))}
                </div>

                {/* Key Implemented Features */}
                <div className="pt-3 border-t border-[#232236] space-y-1.5 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#AAA7BD]">
                    Core Implemented Features:
                  </div>
                  <ul className="space-y-1 text-xs text-[#AAA7BD]">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-[#232236]">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Interactive Demo</span>
                </button>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 text-[#AAA7BD] hover:text-[#F5F3FF] bg-[#12121D] hover:bg-[#1f1f33] border border-[#232236] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                    title="View Source Code on GitHub"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                ) : (
                  <span
                    className="p-2.5 text-slate-600 bg-[#12121D] border border-[#232236] rounded-xl text-xs cursor-not-allowed"
                    title="Repository available upon request"
                  >
                    <Github className="w-4 h-4" />
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
