import React, { useState } from 'react';
import { EXPERIENCES, LEADERSHIP_ROLES, ACADEMIC_MILESTONES } from '../data/experience';
import { Briefcase, Users, GraduationCap, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'leadership' | 'education'>('work');

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F5F2EB] border-b border-[#171717]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#171717]/10 mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#77746F] mb-4">
              04 / EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-[#171717] leading-[1.08] text-balance">
              Learning through <br />
              <span className="italic font-light text-[#244C3B]">building</span> & collaboration.
            </h2>
          </div>

          {/* Clean Segmented Tab Controller */}
          <div className="flex items-center gap-1.5 p-1 bg-[#ECE7DA] border border-[#171717]/10 rounded-xs self-start md:self-end">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'work'
                  ? 'bg-[#171717] text-[#F5F2EB]'
                  : 'text-[#77746F] hover:text-[#171717]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Roles</span>
            </button>
            <button
              onClick={() => setActiveTab('leadership')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'leadership'
                  ? 'bg-[#171717] text-[#F5F2EB]'
                  : 'text-[#77746F] hover:text-[#171717]'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Community</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-[#171717] text-[#F5F2EB]'
                  : 'text-[#77746F] hover:text-[#171717]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Professional & Volunteer Experience */}
        {activeTab === 'work' && (
          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#171717]/10 last:border-b-0"
              >
                {/* Meta Column */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#244C3B] uppercase tracking-wider">
                    <span>0{index + 1}</span>
                    <span aria-hidden="true">/</span>
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#171717]">
                    {exp.organization}
                  </h3>
                  <p className="text-sm font-semibold text-[#244C3B]">
                    {exp.role}
                  </p>
                  <div className="text-xs font-mono text-[#77746F] pt-1">
                    <p>{exp.period}</p>
                    {exp.location && <p>{exp.location}</p>}
                  </div>
                </div>

                {/* Narrative & Impact Column */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-base text-[#171717] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#77746F]">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-sm text-[#77746F]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#244C3B] mt-2 shrink-0" aria-hidden="true" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills / Tech */}
                  <div className="pt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#244C3B]">
                    <span className="text-[#77746F]">Stack:</span>
                    {exp.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span>{skill}</span>
                        {sIdx < exp.skills.length - 1 && <span className="text-[#77746F]/40">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Leadership & Community */}
        {activeTab === 'leadership' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LEADERSHIP_ROLES.map((role, idx) => (
              <div
                key={`${role.organization}-${role.role}`}
                className="p-8 bg-[#FAF8F4] border border-[#171717]/15 flex flex-col justify-between space-y-4 hover:border-[#244C3B]/60 transition-colors"
              >
                <div>
                  <div className="text-xs font-mono text-[#244C3B] uppercase tracking-wider mb-2">
                    Leadership 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#171717]">
                    {role.organization}
                  </h3>
                  <p className="text-sm font-semibold text-[#244C3B] mt-1">
                    {role.role}
                  </p>
                  <p className="text-sm text-[#77746F] mt-4 leading-relaxed">
                    {role.focus}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#171717]/10 text-xs font-mono text-[#77746F] flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#244C3B]" />
                  <span>Active Community Contributor</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Academic Foundations */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ACADEMIC_MILESTONES.map((item, idx) => (
              <div
                key={item.title}
                className="p-8 bg-[#FAF8F4] border border-[#171717]/15 space-y-4 hover:border-[#244C3B]/60 transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#77746F]">
                  <span className="text-[#244C3B]">ACADEMIC 0{idx + 1}</span>
                  <span>{item.period}</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-[#171717]">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-[#244C3B]">
                  {item.institution}
                </p>
                <p className="text-sm text-[#77746F] leading-relaxed pt-2">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
