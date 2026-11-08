import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F5F2EB]/90 backdrop-blur-md border-b border-[#171717]/10 py-3 shadow-xs'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base md:text-lg font-semibold tracking-tight text-[#171717] hover:text-[#244C3B] transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-xs bg-[#244C3B]" aria-hidden="true" />
            <span>NIMRAH SHAHID</span>
          </a>

          {/* Zone 2: 4-5 concise single-line text links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#77746F]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#171717] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#244C3B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F5F2EB] bg-[#171717] hover:bg-[#244C3B] rounded-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171717] hover:text-[#244C3B] transition-colors focus:outline-hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Refined Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F5F2EB] flex flex-col justify-between pt-28 pb-12 px-8 md:hidden animate-fade-in border-b border-[#171717]/10">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#77746F] font-mono">Navigation</p>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-display font-medium text-[#171717] hover:text-[#244C3B] transition-colors flex items-center justify-between border-b border-[#171717]/10 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#77746F]">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#171717]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F2EB] bg-[#244C3B] rounded-xs"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>
            <div className="flex items-center justify-between text-xs text-[#77746F] font-mono pt-2">
              <span>nimrahshahid744@gmail.com</span>
              <a
                href="https://github.com/NIMRAH-S"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#171717] flex items-center gap-1"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
