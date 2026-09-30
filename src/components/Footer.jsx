import React, { useState } from 'react';
import { Mail, Phone, Download, Copy, Check } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "aymanelamouini1@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-border-gray bg-pitch-black py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <span className="text-[20vw] font-display font-bold whitespace-nowrap uppercase">TERMINAL</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Awaiting Command
          </h2>
          <p className="font-mono text-sm opacity-70">
            SYSTEM_STATUS: ONLINE // READY FOR NEW DIRECTIVES
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-16 w-full max-w-2xl">
          <button 
            onClick={handleCopyEmail}
            className="flex-1 group flex items-center justify-between p-4 border border-border-gray bg-slate-noir hover:border-crimson transition-colors"
          >
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-crimson" />
              <span className="font-mono text-sm truncate">{email}</span>
            </div>
            {copied ? <Check size={16} className="text-crimson" /> : <Copy size={16} className="opacity-50 group-hover:opacity-100 group-hover:text-crimson transition-all" />}
          </button>

          <a 
            href="https://www.linkedin.com/in/aymane-lamouini-aa8b482b1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 group flex items-center justify-between p-4 border border-border-gray bg-slate-noir hover:border-crimson transition-colors"
          >
            <div className="flex items-center gap-3">
              <FaLinkedin size={18} className="text-crimson" />
              <span className="font-mono text-sm uppercase">LinkedIn Network</span>
            </div>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-border-gray/50 w-full pt-8 justify-between">
          <div className="flex items-center gap-2 font-mono text-xs opacity-70">
            <Phone size={14} />
            <span>+212 707 185 671</span>
          </div>

          <a 
            href="#" // No actual PDF path was given, using '#'
            className="group flex items-center gap-2 px-6 py-2 border border-crimson bg-crimson/10 hover:bg-crimson transition-colors"
          >
            <Download size={14} className="text-crimson group-hover:text-pitch-black transition-colors" />
            <span className="font-mono text-xs font-bold uppercase text-crimson group-hover:text-pitch-black transition-colors">
              Extract Protocol.PDF
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
