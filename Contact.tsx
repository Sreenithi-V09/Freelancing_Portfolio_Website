import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types/portfolio';
import { ScrollReveal } from './ScrollReveal';

interface ContactProps {
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: initialProjectType || 'Business Website',
    budgetRange: 'Flexible / To be discussed',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submittedDraft, setSubmittedDraft] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project or website goals.';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters describing what you need.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Compose formatted inquiry
    const draftText = `Hi Sreenithi,

I would like to inquire about a website project.

• Name: ${formData.fullName}
• Email: ${formData.email}
• Project Type: ${formData.projectType}
• Budget Range: ${formData.budgetRange}

Project Overview:
${formData.projectDescription}

Looking forward to hearing from you!`;

    setSubmittedDraft(draftText);

    // Open mailto link
    const subject = encodeURIComponent(`Website Inquiry: ${formData.projectType} from ${formData.fullName}`);
    const body = encodeURIComponent(draftText);
    const mailtoUrl = `mailto:${BRAND_INFO.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  };

  const handleCopyDraft = () => {
    if (!submittedDraft) return;
    navigator.clipboard.writeText(submittedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#A78BFA] mb-2">
              Let's Connect
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F3FF]">
              Have a Website Idea? Let's Talk.
            </h2>
            <p className="text-sm sm:text-base text-[#AAA7BD] mt-2">
              Tell me a little about your project, and let's explore how I can help you build a professional online presence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Direct Info */}
          <ScrollReveal delay={100} className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#171725] border border-[#232236] space-y-5">
              <h3 className="text-base font-bold text-[#F5F3FF]">
                Direct Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#AAA7BD] leading-relaxed">
                Prefer reaching out directly? Feel free to send an email or connect through professional networks:
              </p>

              <div className="space-y-3 text-xs">
                {/* Email */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#12121D] border border-[#232236] hover:border-[#8B5CF6]/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#171725] border border-[#232236] flex items-center justify-center text-[#A78BFA] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] text-[#AAA7BD]">Direct Email</div>
                    <div className="font-medium text-[#F5F3FF] truncate">{BRAND_INFO.email}</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#12121D] border border-[#232236] hover:border-[#8B5CF6]/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#171725] border border-[#232236] flex items-center justify-center text-[#A78BFA] group-hover:text-white transition-colors shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden flex-1">
                    <div className="text-[11px] text-[#AAA7BD]">LinkedIn Profile</div>
                    <div className="font-medium text-[#F5F3FF] truncate">linkedin.com/in/sreenithi-v-7a24692a4</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#AAA7BD]" />
                </a>

                {/* GitHub */}
                <a
                  href={BRAND_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#12121D] border border-[#232236] hover:border-[#8B5CF6]/50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#171725] border border-[#232236] flex items-center justify-center text-[#A78BFA] group-hover:text-white transition-colors shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden flex-1">
                    <div className="text-[11px] text-[#AAA7BD]">GitHub Repositories</div>
                    <div className="font-medium text-[#F5F3FF] truncate">github.com/Sreenithi-V09</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#AAA7BD]" />
                </a>
              </div>
            </div>

            {/* Response Time Expectation */}
            <div className="p-4 rounded-xl bg-[#12121D] border border-[#232236] text-xs text-[#AAA7BD] space-y-1">
              <div className="font-semibold text-[#F5F3FF]">Fast Response Guarantee</div>
              <p>
                I review every message personally and aim to respond within 24 to 48 business hours with next steps or clarifying questions.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Inquiry Form */}
          <ScrollReveal delay={200} className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#171725] border border-[#232236] shadow-xl">
              <h3 className="text-lg font-bold text-[#F5F3FF] mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-xs text-[#AAA7BD] mb-6">
                Fill in the details below to generate a formatted project briefing ready for email transmission.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#F5F3FF] mb-1.5">
                    Your Full Name <span className="text-[#A78BFA]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Maya Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#12121D] border text-xs sm:text-sm text-[#F5F3FF] placeholder-[#AAA7BD]/60 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-[#232236]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#F5F3FF] mb-1.5">
                    Email Address <span className="text-[#A78BFA]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#12121D] border text-xs sm:text-sm text-[#F5F3FF] placeholder-[#AAA7BD]/60 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all ${
                      errors.email ? 'border-red-500' : 'border-[#232236]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Grid: Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-semibold text-[#F5F3FF] mb-1.5">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#12121D] border border-[#232236] text-xs sm:text-sm text-[#F5F3FF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    >
                      <option value="Business Website">Business Website</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Other">Other / Custom Request</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budgetRange" className="block text-xs font-semibold text-[#F5F3FF] mb-1.5">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budgetRange"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#12121D] border border-[#232236] text-xs sm:text-sm text-[#F5F3FF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    >
                      <option value="Flexible / To be discussed">Flexible / To be discussed</option>
                      <option value="Under $250">Under $250</option>
                      <option value="$250 – $500">$250 – $500</option>
                      <option value="$500 – $1,000">$500 – $1,000</option>
                      <option value="$1,000+">$1,000+</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-xs font-semibold text-[#F5F3FF] mb-1.5">
                    Project Description <span className="text-[#A78BFA]">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Tell me about what you want to achieve, any pages you need, inspiration links, or key deadlines..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#12121D] border text-xs sm:text-sm text-[#F5F3FF] placeholder-[#AAA7BD]/60 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all resize-y ${
                      errors.projectDescription ? 'border-red-500' : 'border-[#232236]'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-xl shadow-lg shadow-[#8B5CF6]/20 transition-all hover:shadow-[#8B5CF6]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>

              {/* Success / Draft Modal Feedback Box */}
              {submittedDraft && (
                <div className="mt-6 p-4 rounded-xl bg-[#12121D] border border-emerald-500/40 space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Inquiry Generated Successfully!</span>
                  </div>
                  <p className="text-xs text-[#AAA7BD] leading-relaxed">
                    Your email client should have opened automatically with the inquiry formatted to <strong className="text-[#F5F3FF]">{BRAND_INFO.email}</strong>. If your email app did not launch, you can copy the draft below with one click and paste it into Gmail or Outlook:
                  </p>
                  <div className="p-3 bg-[#0B0B12] rounded-lg border border-[#232236] font-mono text-[11px] text-[#AAA7BD] whitespace-pre-wrap max-h-40 overflow-y-auto">
                    {submittedDraft}
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#171725] hover:bg-[#232236] border border-[#232236] rounded-lg transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Draft'}</span>
                    </button>
                    <a
                      href={`mailto:${BRAND_INFO.email}?subject=${encodeURIComponent('Website Inquiry')}&body=${encodeURIComponent(submittedDraft)}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#A78BFA] hover:text-white transition-colors"
                    >
                      <span>Open in Email App</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Form Technical Transparency Note */}
              <div className="mt-6 pt-4 border-t border-[#232236] text-[11px] text-[#AAA7BD] leading-relaxed">
                <span className="font-semibold text-[#F5F3FF]">Technical Note:</span> As this is a pure client-side portfolio without a paid backend server, form submission opens your mail app with a formatted briefing. To enable zero-email direct submissions on GitHub Pages, this form can effortlessly connect to free endpoints like Formspree or EmailJS.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
