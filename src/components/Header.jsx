import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-40 border-b border-border-gray bg-pitch-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-mono text-xl font-bold tracking-widest flex items-center gap-2">
          <span>AL</span>
          <span className="opacity-50">//</span>
          <span>ENG</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Breadcrumb style navigation */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-sm mr-8">
            <a href="#hero" className="hover:opacity-80 transition-opacity">
              // 01 ARCHITECTURE
            </a>
            <a href="#skills" className="hover:opacity-80 transition-opacity">
              // 02 SYSTEMS
            </a>
            <a href="#projects" className="hover:opacity-80 transition-opacity">
              // 03 DEPLOYMENTS
            </a>
          </nav>

          {/* Status Badge */}
          <div className="flex items-center gap-3 px-4 py-2 border border-border-gray rounded-full bg-slate-noir">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-crimson"></span>
            </div>
            <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline-block">
              Available for PFE / New Opportunities 2026
            </span>
            <span className="text-xs font-mono uppercase tracking-wider sm:hidden">
              Available '26
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
