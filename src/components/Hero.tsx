import React from 'react';
import { ArrowDownRight, ArrowUpRight, Compass } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onConnect }) => {
  return (
    <section className="relative min-h-[92vh] pt-28 md:pt-36 pb-16 flex flex-col justify-between border-b border-[#171717]/10 bg-[#F5F2EB] bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Editorial Top Metadata Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#171717]/10 text-xs font-mono uppercase tracking-widest text-[#77746F]">
          <div className="flex items-center gap-3">
            <span className="text-[#244C3B] font-semibold">PORTFOLIO / 2026</span>
            <span aria-hidden="true">·</span>
            <span>FAST-NUCES</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#244C3B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#244C3B]" aria-hidden="true" />
              <span className="text-[#171717] font-medium">Open to opportunities</span>
            </div>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="hidden sm:inline">Faisalabad / Remote</span>
          </div>
        </div>

        {/* Asymmetrical Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-10 lg:pt-14 items-center">
          {/* Left Column: Dominated by Bold Architectural Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#244C3B] border-b border-[#244C3B]/40 pb-1">
                  FULL-STACK DEVELOPER / AI ENGINEER
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#171717] font-display leading-[1.04] text-balance">
                Building thoughtful <br />
                <span className="italic font-light font-display text-[#244C3B]">digital</span> experiences.
              </h1>
            </div>

            <p className="text-lg md:text-xl text-[#77746F] leading-relaxed max-w-xl font-normal">
              I’m <strong className="text-[#171717] font-medium">Nimrah</strong> — a Computer Science student at FAST-NUCES exploring the intersection of software engineering, artificial intelligence, and creative technology.
            </p>

            {/* Editorial Metadata & Vertical Divider Line */}
            <div className="flex items-start gap-6 pt-2">
              <div className="w-[1.5px] h-14 bg-[#244C3B]" aria-hidden="true" />
              <div className="space-y-1 text-xs text-[#77746F] font-mono">
                <p className="text-[#171717] font-semibold uppercase tracking-wider">Beyond the Code</p>
                <p>Full-stack web systems · Applied generative AI · Autonomous agents</p>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#244C3B] hover:bg-[#19362A] text-[#F5F2EB] text-sm font-medium tracking-wide uppercase rounded-xs transition-all duration-200 cursor-pointer shadow-xs group"
              >
                <span>Explore my work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onConnect}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#171717]/5 text-[#171717] text-sm font-medium tracking-wide uppercase border border-[#171717]/30 hover:border-[#171717] rounded-xs transition-colors cursor-pointer"
              >
                <span>Let's connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Reserved Portrait Container with Editorial Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Fine Editorial Frame */}
              <div className="relative p-2 bg-[#FAF8F4] border border-[#171717]/15 shadow-sm">
                {/* Corner Marks */}
                <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#244C3B]" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#244C3B]" />
                <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#244C3B]" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#244C3B]" />

                {/* Portrait Image */}
                <div className="relative aspect-[1069/691] overflow-hidden bg-[#ECE7DA]">
                  <img
                    src="/src/assets/images/hero_portrait_nimrah_1794128993367.jpeg"
                    alt="Nimrah Shahid — Computer Science student, Full-Stack Developer and AI Engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle tonal scrim for editorial cohesion */}
                  <div className="absolute inset-0 bg-[#244C3B]/5 mix-blend-multiply pointer-events-none" />
                </div>

                {/* Micro Editorial Caption */}
                <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-mono text-[#77746F]">
                  <span>FIG 01. NIMRAH SHAHID</span>
                  <span>EST. 2026</span>
                </div>
              </div>

              {/* Architectural accent note */}
              <div className="hidden sm:flex items-center gap-2 mt-4 text-[11px] font-mono text-[#77746F]">
                <Compass className="w-3.5 h-3.5 text-[#244C3B]" />
                <span>31.5204° N, 74.3587° E · FAST-NUCES CFD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar & Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 flex items-center justify-between text-xs font-mono text-[#77746F]">
        <div className="flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#171717]/20" aria-hidden="true" />
          <span>SCROLL TO EXPLORE ARCHIVE</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>01 / 05 SECTIONS</span>
          <span>CURATED WORKS</span>
        </div>
      </div>
    </section>
  );
};
