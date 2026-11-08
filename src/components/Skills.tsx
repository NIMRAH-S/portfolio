import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skills';
import { Terminal, Layers, Cpu, Server } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(SKILL_CATEGORIES[0].id);

  const activeCategory = SKILL_CATEGORIES.find((cat) => cat.id === selectedCategory) || SKILL_CATEGORIES[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-intelligent-systems':
        return <Cpu className="w-4 h-4 text-[#244C3B]" />;
      case 'frontend-engineering':
        return <Layers className="w-4 h-4 text-[#244C3B]" />;
      case 'backend-data':
        return <Server className="w-4 h-4 text-[#244C3B]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#244C3B]" />;
    }
  };

  return (
    <section id="toolkit" className="py-24 md:py-32 bg-[#FAF8F4] border-b border-[#171717]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#171717]/10 mb-16 text-xs font-mono uppercase tracking-widest text-[#77746F]">
          <span>03 / MY TOOLKIT</span>
          <span>SYSTEMS & SPECIALIZATIONS</span>
        </div>

        {/* 2-Column Typographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Category Index */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#171717] leading-[1.1] text-balance">
                Different tools. <br />
                <span className="italic font-light text-[#244C3B]">One</span> mindset.
              </h2>
              <p className="text-base text-[#77746F] max-w-md">
                A disciplined engineering toolkit structured around building resilient architectures, intuitive interfaces, and intelligent automation.
              </p>
            </div>

            {/* Category Navigation (Clean typographic list, zero-pill) */}
            <div className="pt-4 space-y-2 border-t border-[#171717]/10">
              <p className="text-xs font-mono uppercase tracking-widest text-[#77746F] mb-3">
                Focus Areas
              </p>
              {SKILL_CATEGORIES.map((cat) => {
                const isSelected = cat.id === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left py-3 px-4 border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[#244C3B] bg-[#244C3B]/5 text-[#171717]'
                        : 'border-transparent hover:border-[#171717]/15 text-[#77746F] hover:text-[#171717]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#244C3B]">{cat.number}</span>
                      <span className="text-sm font-semibold font-display">{cat.title}</span>
                    </div>
                    <span className="text-xs font-mono text-[#77746F]">
                      ({cat.skills.length})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Subtle engineering quote */}
            <div className="p-5 bg-[#F5F2EB] border border-[#171717]/10 text-xs font-mono text-[#77746F] leading-relaxed">
              <span className="text-[#244C3B] font-semibold">PRINCIPLE:</span> "Code is a medium for thought and human enablement chosen for precision, maintainability, and impact."
            </div>
          </div>

          {/* Right Column: Active Category Matrix */}
          <div className="lg:col-span-7 bg-[#F5F2EB] border border-[#171717]/15 p-8 md:p-12">
            <div className="pb-6 border-b border-[#171717]/10 mb-8 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#244C3B] uppercase tracking-wider">
                  {getCategoryIcon(activeCategory.id)}
                  <span>Category {activeCategory.number}</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-[#171717] mt-1">
                  {activeCategory.title}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#77746F]">
                {activeCategory.skills.length} Capabilities
              </span>
            </div>

            <p className="text-sm text-[#77746F] mb-8 font-normal">
              {activeCategory.subtitle}
            </p>

            {/* Typographic Skills System (No progress bars, no percentage ratings, no logo clouds) */}
            <div className="divide-y divide-[#171717]/10">
              {activeCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="py-5 group transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-mono text-[#244C3B] mt-1 shrink-0">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold font-display text-[#171717] group-hover:text-[#244C3B] transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-[#77746F] mt-1 leading-normal max-w-lg">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-[11px] font-mono text-[#77746F]/50 group-hover:text-[#244C3B] self-start mt-1 transition-colors">
                    ACTIVE
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
