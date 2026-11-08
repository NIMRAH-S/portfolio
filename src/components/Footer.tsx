import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#171A18] text-[#77746F] border-t border-white/10 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity and Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-[#F5F2EB] font-display font-bold tracking-wider">
            NIMRAH SHAHID
          </span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>© 2026. ALL RIGHTS RESERVED.</span>
        </div>

        {/* Center: Editorial Colophon */}
        <div className="text-center text-[11px] text-[#A3A09A]">
          DESIGNED WITH RESTRAINT · BEYOND THE CODE
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-[#F5F2EB] hover:text-[#C7D89B] transition-colors cursor-pointer group"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};
