import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Github, Linkedin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'nimrahshahid744@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi Nimrah,\n\n${message}\n\nFrom: ${name} (${email})`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#171A18] text-[#F5F2EB] relative overflow-hidden bg-grain-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-16 text-xs font-mono uppercase tracking-widest text-[#77746F]">
          <span className="text-[#C7D89B]">05 / INITIATE CONTACT</span>
          <span>AVAILABLE FOR 2026 OPPORTUNITIES</span>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Dominant Editorial Headline & Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-[#F5F2EB] leading-[1.05] text-balance">
              Have an idea? <br />
              <span className="italic font-light text-[#C7D89B]">Let's build it</span>.
            </h2>

            <p className="text-lg md:text-xl text-[#A3A09A] max-w-xl font-normal leading-relaxed">
              I’m always interested in meaningful projects, creative collaborations, and opportunities to build something impactful.
            </p>

            {/* Direct Email Interaction Lockup */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C7D89B] hover:bg-[#D6E8AE] text-[#171A18] text-sm font-semibold tracking-wider uppercase rounded-xs transition-colors shadow-sm cursor-pointer group"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#202422] hover:bg-[#282E2A] text-xs font-mono text-[#F5F2EB] border border-white/10 rounded-xs transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#C7D89B]" />
                    <span className="text-[#C7D89B]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#A3A09A]" />
                    <span>Copy: {emailAddress}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Quick Note Trigger */}
            <div className="pt-2">
              <button
                onClick={() => setFormOpen(!formOpen)}
                className="text-xs font-mono text-[#C7D89B] hover:underline flex items-center gap-2 cursor-pointer"
              >
                <span>{formOpen ? '[-] Close direct message panel' : '[+] Send a quick inquiry directly here'}</span>
              </button>
            </div>

            {/* Interactive Direct Message Panel */}
            {formOpen && (
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 bg-[#202422] border border-white/10 rounded-xs space-y-4 max-w-xl animate-fade-in"
              >
                <div className="text-xs font-mono text-[#C7D89B] uppercase tracking-wider">
                  Direct Inquiry Composer
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A3A09A]">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3.5 py-2.5 bg-[#171A18] border border-white/10 text-sm text-[#F5F2EB] placeholder-[#77746F] focus:border-[#C7D89B] focus:outline-hidden rounded-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A3A09A]">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@studio.com"
                    className="w-full px-3.5 py-2.5 bg-[#171A18] border border-white/10 text-sm text-[#F5F2EB] placeholder-[#77746F] focus:border-[#C7D89B] focus:outline-hidden rounded-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#A3A09A]">Message</label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, idea, or collaboration..."
                    className="w-full px-3.5 py-2.5 bg-[#171A18] border border-white/10 text-sm text-[#F5F2EB] placeholder-[#77746F] focus:border-[#C7D89B] focus:outline-hidden rounded-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3 bg-[#244C3B] hover:bg-[#2E5F4A] text-[#F5F2EB] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 rounded-xs transition-colors cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-[#C7D89B]" />
                      <span>Draft Opened in Mail Client!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Direct Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Channels, Socials, & Architectural Signoff */}
          <div className="lg:col-span-5 space-y-12">
            {/* Direct Channels */}
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#77746F]">
                Digital Channels
              </p>

              <div className="divide-y divide-white/10 border-y border-white/10">
                <a
                  href={`mailto:${emailAddress}`}
                  className="py-4 flex items-center justify-between text-[#F5F2EB] hover:text-[#C7D89B] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C7D89B]" />
                    <span className="font-mono text-sm">{emailAddress}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77746F] group-hover:text-[#C7D89B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nimrah-shahid-b634b51ba"
                  target="_blank"
                  rel="noreferrer"
                  className="py-4 flex items-center justify-between text-[#F5F2EB] hover:text-[#C7D89B] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#C7D89B]" />
                    <span className="font-mono text-sm">linkedin.com/in/nimrah-shahid-b634b51ba</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77746F] group-hover:text-[#C7D89B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://github.com/NIMRAH-S"
                  target="_blank"
                  rel="noreferrer"
                  className="py-4 flex items-center justify-between text-[#F5F2EB] hover:text-[#C7D89B] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-[#C7D89B]" />
                    <span className="font-mono text-sm">github.com/NIMRAH-S</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#77746F] group-hover:text-[#C7D89B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Academic & Geographic Anchor */}
            <div className="p-6 bg-[#202422] border border-white/10 space-y-3 font-mono text-xs text-[#A3A09A]">
              <div className="flex items-center justify-between text-[#C7D89B]">
                <span>LOCATION & AFFILIATION</span>
                <span>PAKISTAN</span>
              </div>
              <p className="text-sm text-[#F5F2EB] font-display">
                Department of Computer Science
              </p>
              <p>National University of Computer & Emerging Sciences (FAST-NUCES)</p>
              <div className="pt-2 text-[11px] text-[#77746F] border-t border-white/5">
                UTC+5 (PKT) · Responses typically within 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
