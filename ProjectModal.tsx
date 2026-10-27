import React, { useState } from 'react';
import { X, ExternalLink, Github, ShieldAlert, Bot, Globe, CheckCircle2, AlertTriangle, Send } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Chat state for Medical Chatbot demo
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! I am a demonstration medical information assistant. How can I help you explore general health information today?' },
    { sender: 'user', text: 'What is the recommended daily water intake for adults?' },
    { sender: 'bot', text: 'For most healthy adults, general guidelines recommend approximately 2.7 liters (91 ounces) of total fluids daily for women and 3.7 liters (125 ounces) for men. This includes fluids from water, beverages, and food.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Cyber threat state for Cyber Attack Prediction demo
  const [selectedThreatFilter, setSelectedThreatFilter] = useState<'all' | 'high' | 'medium'>('all');

  if (!project) return null;

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setInputMessage('');
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);

    // Simulated response with educational disclaimer
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Thank you for your question regarding "${userText}". In this demonstration interface, medical information is structured for educational exploration. Always consult a licensed healthcare professional for individual diagnosis or treatment.`,
        },
      ]);
    }, 600);
  };

  const threatEvents = [
    { id: 'EVT-104', type: 'DDoS Amplification Vector', severity: 'high', score: '88% Probability', time: '10:04:12', status: 'Flagged' },
    { id: 'EVT-105', type: 'SQL Injection Signature', severity: 'high', score: '92% Probability', time: '10:06:45', status: 'Blocked' },
    { id: 'EVT-106', type: 'SSH Brute Force Probe', severity: 'medium', score: '64% Probability', time: '10:08:19', status: 'Monitored' },
    { id: 'EVT-107', type: 'Port Sweep Scan Pattern', severity: 'medium', score: '58% Probability', time: '10:08:52', status: 'Logged' },
  ];

  const filteredThreats = threatEvents.filter((item) => {
    if (selectedThreatFilter === 'all') return true;
    return item.severity === selectedThreatFilter;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#171725] border border-[#232236] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#12121D] border-b border-[#232236] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-[#AAA7BD]">{project.status}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#AAA7BD] hover:text-white hover:bg-[#171725] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-[#F5F3FF]">
              {project.title}
            </h3>
            <p className="text-sm text-[#AAA7BD] mt-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Interactive Simulation Preview Container */}
          <div className="rounded-xl border border-[#232236] bg-[#0B0B12] overflow-hidden">
            <div className="px-4 py-2.5 bg-[#12121D] border-b border-[#232236] flex items-center justify-between text-xs text-[#AAA7BD]">
              <span className="font-mono text-[11px] text-[#A78BFA]">
                Interactive Project Demonstration
              </span>
              <span>Web Interface Preview</span>
            </div>

            {/* CYBERSECURITY SIMULATION */}
            {project.visualType === 'cybersecurity' && (
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[#F5F3FF] font-semibold">
                    <ShieldAlert className="w-4 h-4 text-[#A78BFA]" />
                    <span>Attack Prediction Console</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#171725] p-1 rounded-lg border border-[#232236]">
                    <button
                      type="button"
                      onClick={() => setSelectedThreatFilter('all')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                        selectedThreatFilter === 'all'
                          ? 'bg-[#8B5CF6] text-white'
                          : 'text-[#AAA7BD] hover:text-white'
                      }`}
                    >
                      All Events
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedThreatFilter('high')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                        selectedThreatFilter === 'high'
                          ? 'bg-[#8B5CF6] text-white'
                          : 'text-[#AAA7BD] hover:text-white'
                      }`}
                    >
                      High Risk
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedThreatFilter('medium')}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                        selectedThreatFilter === 'medium'
                          ? 'bg-[#8B5CF6] text-white'
                          : 'text-[#AAA7BD] hover:text-white'
                      }`}
                    >
                      Medium Risk
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-[#171725] border border-[#232236]">
                    <div className="text-[11px] text-[#AAA7BD]">Monitored Ingest</div>
                    <div className="text-base font-bold text-[#F5F3FF] font-mono mt-0.5">14,280 pkts/s</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#171725] border border-[#232236]">
                    <div className="text-[11px] text-[#AAA7BD]">Predicted Threats</div>
                    <div className="text-base font-bold text-[#A78BFA] font-mono mt-0.5">4 Anomalies</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#171725] border border-[#232236]">
                    <div className="text-[11px] text-[#AAA7BD]">Database Backend</div>
                    <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">MySQL Connected</div>
                  </div>
                </div>

                {/* Threat event list */}
                <div className="space-y-2">
                  <div className="text-[11px] font-semibold text-[#AAA7BD] uppercase tracking-wider">
                    Recent Prediction Telemetry
                  </div>
                  {filteredThreats.map((evt) => (
                    <div
                      key={evt.id}
                      className="p-2.5 rounded-lg bg-[#171725] border border-[#232236] flex items-center justify-between text-xs font-mono"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[#A78BFA] text-[11px]">{evt.id}</span>
                        <span className="text-[#F5F3FF] font-sans font-medium">{evt.type}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-[11px] px-1.5 py-0.5 rounded ${
                          evt.severity === 'high' ? 'bg-red-500/20 text-red-300' : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {evt.score}
                        </span>
                        <span className="text-slate-400 text-[10px] hidden sm:inline">{evt.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-[#12121D] border border-[#232236] text-[11px] text-[#AAA7BD] flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#F5F3FF]">Academic Context:</strong> Developed to demonstrate web dashboard data presentation and prediction visualization with relational MySQL storage. Real-time production threat mitigation requires enterprise intrusion detection infrastructure.
                  </p>
                </div>
              </div>
            )}

            {/* CHATBOT SIMULATION */}
            {project.visualType === 'chatbot' && (
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#F5F3FF] font-semibold pb-2 border-b border-[#232236]">
                  <Bot className="w-4 h-4 text-[#A78BFA]" />
                  <span>Medical Information Assistant Demo</span>
                </div>

                {/* Chat window */}
                <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-3.5 py-2 text-xs leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-[#8B5CF6] text-white'
                            : 'bg-[#171725] text-[#F5F3FF] border border-[#232236]'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat input */}
                <form onSubmit={handleSendChatMessage} className="flex gap-2 pt-2 border-t border-[#232236]">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask a general health question..."
                    className="flex-1 bg-[#171725] border border-[#232236] rounded-lg px-3 py-2 text-xs text-[#F5F3FF] placeholder-[#AAA7BD] focus:outline-none focus:border-[#8B5CF6]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-xs font-medium rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Send</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>

                <div className="text-[11px] text-[#AAA7BD] bg-[#12121D] p-2.5 rounded-lg border border-[#232236]">
                  <strong className="text-[#F5F3FF]">Medical Disclaimer:</strong> This chatbot is an academic demonstration of natural language user interface design. It does not provide medical diagnoses, prescriptions, or clinical treatment advice.
                </div>
              </div>
            )}

            {/* PORTFOLIO WEBSITE PREVIEW */}
            {project.visualType === 'portfolio' && (
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#F5F3FF] font-semibold">
                  <Globe className="w-4 h-4 text-[#A78BFA]" />
                  <span>Responsive Website Architecture</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#171725] border border-[#232236]">
                    <div className="text-[#A78BFA] font-bold mb-1">Semantic Landmarks</div>
                    <p className="text-[#AAA7BD] text-[11px] leading-relaxed">
                      Built with standard &lt;header&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, and &lt;footer&gt; elements for screen-reader compatibility and natural search indexing.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#171725] border border-[#232236]">
                    <div className="text-[#A78BFA] font-bold mb-1">Fluid CSS Architecture</div>
                    <p className="text-[#AAA7BD] text-[11px] leading-relaxed">
                      Custom responsive CSS grid and flexbox rules tested to scale cleanly from 320px mobile screens to 1440px+ ultra-wide desktop monitors.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#12121D] border border-[#232236] text-[11px] text-[#AAA7BD]">
                  <strong className="text-[#F5F3FF]">Vanilla Technologies:</strong> Designed to run on any web server without Node.js, external build steps, or runtime bloat.
                </div>
              </div>
            )}
          </div>

          {/* Implemented Features List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A78BFA] mb-3">
              Implemented Technical Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#AAA7BD]">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-[#12121D]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#AAA7BD] mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#12121D] text-[#A78BFA] border border-[#232236]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#12121D] border-t border-[#232236] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#AAA7BD]">
            Questions about this project? Let's discuss in the contact section.
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#F5F3FF] bg-[#171725] hover:bg-[#232236] border border-[#232236] rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-[#AAA7BD]" />
              </a>
            ) : (
              <span className="text-xs text-[#AAA7BD] italic">Source repository upon request</span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
