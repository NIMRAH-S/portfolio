import React, { useEffect } from 'react';
import { X, Printer, ArrowUpRight, Mail, Github, Linkedin, Download } from 'lucide-react';
import { EXPERIENCES, LEADERSHIP_ROLES, ACADEMIC_MILESTONES } from '../data/experience';
import { PROJECTS } from '../data/projects';
import { SKILL_CATEGORIES } from '../data/skills';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#171A18]/85 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#FAF8F4] border border-[#171717]/15 shadow-2xl flex flex-col overflow-hidden text-[#171717] print:border-none print:shadow-none print:max-h-none print:w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#171717]/10 bg-[#F5F2EB] print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#77746F]">
            <span className="w-2 h-2 rounded-xs bg-[#244C3B]" />
            <span>NIMRAH SHAHID — CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] hover:bg-[#244C3B] text-[#F5F2EB] text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#77746F] hover:text-[#171717] hover:bg-[#171717]/5 rounded-xs transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-10 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-[#171717]/15 pb-8 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#171717] tracking-tight">
                Nimrah Shahid
              </h1>
              <p className="text-sm font-mono text-[#244C3B] uppercase tracking-wider">
                Full-Stack Developer / AI Engineer
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-xs font-mono text-[#77746F]">
              <span>+92 331 7684630</span>
              <span>·</span>
              <span>nimrahshahid744@gmail.com</span>
              <span>·</span>
              <a href="https://www.linkedin.com/in/nimrah-shahid-b634b51ba" target="_blank" rel="noreferrer" className="hover:text-[#171717]">
                linkedin.com/in/nimrah-shahid-b634b51ba
              </a>
              <span>·</span>
              <a href="https://github.com/NIMRAH-S" target="_blank" rel="noreferrer" className="hover:text-[#171717]">
                github.com/NIMRAH-S
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#244C3B] font-semibold border-b border-[#171717]/10 pb-1">
              01. Education
            </h2>
            <div className="space-y-4">
              {ACADEMIC_MILESTONES.map((edu) => (
                <div key={edu.title} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold font-display text-[#171717]">
                      {edu.title} — {edu.institution}
                    </h3>
                    <p className="text-xs text-[#77746F] mt-0.5">{edu.highlight}</p>
                  </div>
                  <span className="text-xs font-mono text-[#77746F] shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#244C3B] font-semibold border-b border-[#171717]/10 pb-1">
              02. Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-base font-bold font-display text-[#171717]">
                        {exp.role} · <span className="font-medium text-[#244C3B]">{exp.organization}</span>
                      </h3>
                      <p className="text-xs font-mono text-[#77746F]">{exp.type} {exp.location && `· ${exp.location}`}</p>
                    </div>
                    <span className="text-xs font-mono text-[#77746F] shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-xs text-[#171717] leading-relaxed">{exp.description}</p>
                  <ul className="list-disc list-inside text-xs text-[#77746F] space-y-1 pt-1">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-[#244C3B] pt-1">
                    Technologies: {exp.skills.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#244C3B] font-semibold border-b border-[#171717]/10 pb-1">
              03. Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 bg-[#F5F2EB] border border-[#171717]/10 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold font-display text-[#171717]">{proj.title}</span>
                    <span className="font-mono text-[10px] text-[#77746F]">{proj.number}</span>
                  </div>
                  <p className="text-xs text-[#77746F] line-clamp-2">{proj.shortDescription}</p>
                  <div className="text-[10px] font-mono text-[#244C3B]">
                    {proj.technologies.slice(0, 4).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills System */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#244C3B] font-semibold border-b border-[#171717]/10 pb-1">
              04. Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-1">
                  <span className="font-bold text-[#171717]">{cat.title}:</span>{' '}
                  <span className="text-[#77746F] font-mono">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Community */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#244C3B] font-semibold border-b border-[#171717]/10 pb-1">
              05. Leadership & Activities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {LEADERSHIP_ROLES.map((lead) => (
                <div key={`${lead.organization}-${lead.role}`} className="p-2 border border-[#171717]/10">
                  <p className="font-bold text-[#171717]">{lead.organization}</p>
                  <p className="text-[#244C3B] font-medium">{lead.role}</p>
                  {lead.period && <p className="text-[#77746F] text-[11px] mt-1">{lead.period}</p>}
                  <p className="text-[#77746F] text-[11px] mt-1">{lead.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
