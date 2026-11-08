import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const highlights = [
    {
      title: 'BS Computer Science',
      institution: 'FAST-NUCES',
      detail: 'Class of 2027 · Strong theoretical grounding in algorithms, operating systems, and intelligent systems.',
      index: '01'
    },
    {
      title: 'Women Techmakers Ambassador',
      institution: 'Google Developer Ecosystem',
      detail: 'Advocating for inclusion, community-driven technical education, and mentorship for young women in technology.',
      index: '02'
    },
    {
      title: 'ICPC Asia Topi 2025',
      institution: 'Algorithm Alchemists',
      detail: 'ICPC Asia Topi Online Preliminary 2025 contestant with team Algorithm Alchemists.',
      index: '03'
    },
    {
      title: 'Full-Stack & Applied AI',
      institution: 'Engineering Philosophy',
      detail: 'Bridging modern reactive frontend architecture with robust backend APIs, autonomous pipelines, and foundation models.',
      index: '04'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F4] border-b border-[#171717]/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Index Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#171717]/10 mb-16 text-xs font-mono uppercase tracking-widest text-[#77746F]">
          <span>01 / A LITTLE ABOUT ME</span>
          <span>DISCIPLINE & ETHOS</span>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Expressive Headline & Anchor Statement */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#171717] leading-[1.1] text-balance">
              Curious by nature. <br />
              <span className="italic font-light text-[#244C3B]">Builder</span> by choice.
            </h2>

            <p className="text-sm font-mono uppercase tracking-widest text-[#244C3B] pt-2">
              FAST-NUCES · Class of 2027
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#171717] hover:text-[#244C3B] border-b border-[#171717]/40 hover:border-[#244C3B] pb-1 transition-colors cursor-pointer"
              >
                <span>Read complete curriculum vitae</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Narrative Prose + Editorial Milestone Grid */}
          <div className="lg:col-span-7 space-y-12">
            {/* Primary Narrative */}
            <div className="space-y-6 text-base sm:text-lg text-[#171717] leading-relaxed font-normal">
              <p>
                I'm a Computer Science student at <span className="font-semibold text-[#244C3B]">FAST-NUCES</span> with a passion for building meaningful digital products. I work across full-stack development and AI, turning ideas into functional, intuitive experiences.
              </p>
              <p className="text-[#77746F]">
                From developing web applications to exploring intelligent systems and automation, I enjoy understanding how technology can solve real-world problems. Whether building accessible reactive interfaces or researching deep learning architectures for clinical scan verification, I prioritize engineering discipline and user clarity.
              </p>
              <p className="text-[#77746F]">
                Beyond code, I contribute to communities, collaborate with teams, and continuously explore new ideas — organizing developer gatherings as a Women Techmakers Ambassador and coordinating campus tech initiatives.
              </p>
            </div>

            {/* Editorial Highlights System (No Generic Cards or Pill Badges) */}
            <div className="pt-8 border-t border-[#171717]/10">
              <p className="text-xs font-mono uppercase tracking-widest text-[#77746F] mb-6">
                Key Milestones & Roles
              </p>

              <div className="divide-y divide-[#171717]/10">
                {highlights.map((item) => (
                  <div
                    key={item.index}
                    className="py-6 group transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono text-[#244C3B] mt-1 shrink-0">
                        ({item.index})
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold font-display text-[#171717] group-hover:text-[#244C3B] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-[#77746F] mt-0.5">
                          {item.institution}
                        </p>
                        <p className="text-sm text-[#77746F] mt-2 max-w-xl leading-normal">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
