import React from 'react';
import { Compass, Sparkles, Binary, HeartHandshake } from 'lucide-react';

export const Personality: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Exploring Intelligent Systems',
      text: 'Fascinated by how artificial intelligence, autonomous agents, and foundation models can extend human capabilities rather than merely automate routines.',
      icon: <Sparkles className="w-5 h-5 text-[#244C3B]" />
    },
    {
      num: '02',
      title: 'Building Meaningful Products',
      text: 'Focused on digital tools that solve tangible challenges — from educational platforms to career suites and accessible e-commerce.',
      icon: <Compass className="w-5 h-5 text-[#244C3B]" />
    },
    {
      num: '03',
      title: 'Research & Experimentation',
      text: 'Deepening foundational knowledge in computer vision, Vision Transformers, and algorithm optimization through academic research and competitive programming.',
      icon: <Binary className="w-5 h-5 text-[#244C3B]" />
    },
    {
      num: '04',
      title: 'Collaboration & Community',
      text: 'Dedicated to empowering peers and future developers through Women Techmakers and campus technical societies.',
      icon: <HeartHandshake className="w-5 h-5 text-[#244C3B]" />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F4] border-b border-[#171717]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#171717]/10 mb-16 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#77746F] mb-4">
              PERSPECTIVE / BEYOND THE WORK
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#171717] leading-[1.1] text-balance">
              Always learning. <br />
              <span className="italic font-light text-[#244C3B]">Always exploring</span>.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#77746F] max-w-sm">
            Core principles shaping my direction as an engineer, student, and collaborator.
          </p>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 bg-[#F5F2EB] border border-[#171717]/12 flex flex-col justify-between space-y-6 hover:border-[#244C3B]/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#77746F]">
                  <span className="text-[#244C3B] font-semibold">{pillar.num}</span>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold font-display text-[#171717] leading-snug">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-sm text-[#77746F] leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
