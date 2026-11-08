import React, { useEffect } from 'react';
import { X, ArrowUpRight, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171A18]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F4] border border-[#171717]/15 shadow-2xl flex flex-col overflow-hidden text-[#171717]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#171717]/10 bg-[#F5F2EB]">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#77746F]">
            <span className="text-[#244C3B] font-semibold">{project.number}</span>
            <span aria-hidden="true">/</span>
            <span>{project.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#77746F] hover:text-[#171717] hover:bg-[#171717]/5 rounded-xs transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8">
          {/* Main Title */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-[#171717]">
              {project.title}
            </h2>
            <p className="text-base text-[#77746F] mt-2 max-w-2xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Visual Showcase (if image exists) */}
          {project.image ? (
            <div className="relative aspect-video w-full overflow-hidden border border-[#171717]/10 bg-[#171A18]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ) : (
            <div className="w-full p-8 bg-[#ECE7DA] border border-[#171717]/10 font-mono text-xs text-[#77746F] flex flex-col justify-between min-h-[180px]">
              <div className="flex items-center justify-between text-[#244C3B]">
                <span>SCHEMATIC SPECIFICATION</span>
                <span>PROJECT ID: {project.id}</span>
              </div>
              <p className="text-base font-display text-[#171717] italic">
                "{project.shortDescription}"
              </p>
              <div className="text-[11px]">ARCHITECTURAL STACK: {project.technologies.join(' · ')}</div>
            </div>
          )}

          {/* Full Narrative Overview */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#77746F]">
              Project Overview & Architecture
            </h3>
            <p className="text-base text-[#171717] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-[#171717]/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#77746F]">
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#244C3B] mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack (Zero-Pill Unboxed Text with Separator) */}
          <div className="pt-4 border-t border-[#171717]/10 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#77746F]">
              Technology Stack
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-mono text-[#244C3B]">
              {project.technologies.map((tech, index) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {index < project.technologies.length - 1 && (
                    <span className="text-[#77746F]/50" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 md:px-10 py-4 border-t border-[#171717]/10 bg-[#F5F2EB]">
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-[#171717]/25 hover:border-[#171717] text-xs font-mono uppercase tracking-wider text-[#171717] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#244C3B] hover:bg-[#19362A] text-[#F5F2EB] text-xs font-mono uppercase tracking-wider transition-colors shadow-xs"
              >
                <span>Live View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-[#77746F] hover:text-[#171717] cursor-pointer"
          >
            [Close Window]
          </button>
        </div>
      </div>
    </div>
  );
};
