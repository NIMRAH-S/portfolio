import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/projects';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'web' | 'research'>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    if (activeFilter === 'ai') {
      return PROJECTS.filter(
        (p) =>
          p.category.includes('AI') ||
          p.category.includes('Artificial Intelligence') ||
          p.category.includes('Generative AI')
      );
    }
    if (activeFilter === 'web') {
      return PROJECTS.filter(
        (p) =>
          p.category.includes('Web Development') ||
          p.category.includes('E-Commerce') ||
          p.category.includes('Enterprise')
      );
    }
    if (activeFilter === 'research') {
      return PROJECTS.filter(
        (p) =>
          p.category.includes('Research') ||
          p.category.includes('Automation') ||
          p.id === 'battle-city-ai'
      );
    }
    return PROJECTS;
  }, [activeFilter]);

  return (
    <section id="work" className="py-24 md:py-32 bg-[#F5F2EB] border-b border-[#171717]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#171717]/10 mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#77746F] mb-4">
              02 / SELECTED PROJECTS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#171717] leading-[1.08] text-balance">
              Things I've brought <br />
              <span className="italic font-light text-[#244C3B]">to life</span>.
            </h2>
          </div>

          {/* Functional Category Filter (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#ECE7DA] border border-[#171717]/10 rounded-xs self-start md:self-end">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#171717] text-[#F5F2EB]'
                  : 'text-[#77746F] hover:text-[#171717]'
              }`}
            >
              All (08)
            </button>
            <button
              onClick={() => setActiveFilter('ai')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'ai'
                  ? 'bg-[#171717] text-[#F5F2EB]'
                  : 'text-[#77746F] hover:text-[#171717]'
              }`}
            >
              AI & Systems
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-[#171717] text-[#F5F2EB]'
                  : 'text-[#77746F] hover:text-[#171717]'
              }`}
            >
              Web & Apps
            </button>
            <button
              onClick={() => setActiveFilter('research')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                activeFilter === 'research'
                  ? 'bg-[#171717] text-[#F5F2EB]'
                  : 'text-[#77746F] hover:text-[#171717]'
              }`}
            >
              Research & Algo
            </button>
          </div>
        </div>

        {/* Editorial Project Grid — Dynamic Asymmetrical Layout */}
        <div className="space-y-16 md:space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            // Wide Feature Layout for standout projects like Ilmigo Digital Academy, Luxe Couture, and Medical Scan
            if (project.layout === 'wide') {
              return (
                <div
                  key={project.id}
                  className="group relative border border-[#171717]/15 bg-[#FAF8F4] overflow-hidden hover:border-[#244C3B]/60 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Visual Media Column */}
                    <div
                      className={`lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#171A18] cursor-pointer ${
                        !isEven ? 'lg:order-2' : ''
                      }`}
                      onClick={() => onSelectProject(project)}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full p-8 flex flex-col justify-between bg-[#171A18] text-[#F5F2EB]">
                          <span className="font-mono text-xs text-[#C7D89B]">{project.number} / {project.category}</span>
                          <span className="font-display text-2xl font-bold">{project.title}</span>
                          <span className="font-mono text-xs text-[#77746F]">{project.technologies.join(' · ')}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[#244C3B]/5 mix-blend-multiply pointer-events-none" />
                      <div className="absolute top-4 left-4 bg-[#171717]/80 backdrop-blur-xs text-[#F5F2EB] px-2.5 py-1 text-[11px] font-mono tracking-widest">
                        {project.number} / SELECTED WORK
                      </div>
                    </div>

                    {/* Editorial Content Column */}
                    <div
                      className={`lg:col-span-5 p-8 md:p-12 flex flex-col justify-between ${
                        !isEven ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="space-y-6">
                        <div className="text-xs font-mono uppercase tracking-widest text-[#77746F]">
                          {project.category}
                        </div>

                        <h3
                          onClick={() => onSelectProject(project)}
                          className="text-2xl sm:text-3xl font-bold font-display text-[#171717] group-hover:text-[#244C3B] transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>

                        <p className="text-base text-[#77746F] leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* Unboxed Tech Stack */}
                        <div className="pt-2">
                          <p className="text-[11px] font-mono uppercase tracking-wider text-[#77746F] mb-1">
                            Technologies
                          </p>
                          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#244C3B]">
                            {project.technologies.map((t, idx) => (
                              <React.Fragment key={t}>
                                <span>{t}</span>
                                {idx < project.technologies.length - 1 && (
                                  <span className="text-[#77746F]/50">·</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-8 border-t border-[#171717]/10 flex items-center justify-between gap-4">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#244C3B] font-semibold cursor-pointer group-hover:underline"
                        >
                          <span>Case Details</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>

                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 text-[#77746F] hover:text-[#171717] border border-[#171717]/15 hover:border-[#171717] rounded-xs transition-colors"
                              aria-label={`${project.title} GitHub Repository`}
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 text-[#77746F] hover:text-[#244C3B] border border-[#171717]/15 hover:border-[#244C3B] rounded-xs transition-colors"
                              aria-label={`${project.title} Live Demo`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Split / Half Layout
            if (project.layout === 'split') {
              return (
                <div
                  key={project.id}
                  className="border border-[#171717]/15 bg-[#FAF8F4] p-8 md:p-10 group hover:border-[#244C3B]/60 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#77746F]">
                        <span className="text-[#244C3B] font-semibold">{project.number}</span>
                        <span>/</span>
                        <span>{project.category}</span>
                      </div>

                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-2xl sm:text-3xl font-bold font-display text-[#171717] group-hover:text-[#244C3B] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      <p className="text-base text-[#77746F] leading-relaxed">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#244C3B] pt-2">
                        {project.technologies.map((t, idx) => (
                          <React.Fragment key={t}>
                            <span>{t}</span>
                            {idx < project.technologies.length - 1 && (
                              <span className="text-[#77746F]/50">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <div className="flex lg:flex-col items-center lg:items-end justify-between gap-4 border-t lg:border-t-0 pt-6 lg:pt-0 border-[#171717]/10 shrink-0">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-5 py-2.5 bg-[#171717] hover:bg-[#244C3B] text-[#F5F2EB] text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                      >
                        Explore Project
                      </button>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-[#77746F] hover:text-[#171717] flex items-center gap-1"
                          >
                            Code <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono text-[#244C3B] hover:text-[#19362A] flex items-center gap-1"
                          >
                            Live <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Compact Grid Layout (Supporting projects)
            return (
              <div
                key={project.id}
                className="border border-[#171717]/15 bg-[#FAF8F4] p-6 md:p-8 hover:border-[#244C3B]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#77746F]">
                    <span className="text-[#244C3B] font-semibold">{project.number}</span>
                    <span className="uppercase">{project.category}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-xl sm:text-2xl font-bold font-display text-[#171717] group-hover:text-[#244C3B] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#77746F] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#244C3B] pt-2">
                    {project.technologies.map((t, idx) => (
                      <React.Fragment key={t}>
                        <span>{t}</span>
                        {idx < project.technologies.length - 1 && (
                          <span className="text-[#77746F]/50">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#171717]/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-mono uppercase tracking-wider text-[#171717] hover:text-[#244C3B] font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {(project.githubUrl || project.liveUrl) && (
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-[#77746F] hover:text-[#171717] transition-colors"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-[#77746F] hover:text-[#244C3B] transition-colors"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
