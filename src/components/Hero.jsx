import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Coordinate tick-marks decoration */}
      <div className="absolute left-6 top-1/4 font-mono text-xs opacity-50 flex flex-col gap-8 hidden lg:flex">
        <span>+ LAT: 33.5731</span>
        <span>+ LNG: -7.5898</span>
        <span>:: SYS_ACTIVE</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-border-gray bg-slate-noir mb-6"
            >
              <Terminal size={14} />
              <span className="font-mono text-xs">INITIATING_SEQUENCE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4 uppercase"
            >
              Aymane<br />Lamouini
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-mono border-l-4 border-crimson pl-4 mb-8"
            >
              Software Engineer | Full Stack & AI Developer
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg max-w-2xl leading-relaxed mb-10 opacity-90"
            >
              Final-year Computer Engineering Student (5IIR) at EMSI (École Marocaine des Sciences de l'Ingénieur), graduating in 2026. Passionate about AI and emerging technologies, motivated, autonomous, and results-oriented.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="group flex items-center gap-2 px-8 py-4 bg-crimson border border-crimson hover:bg-transparent transition-all duration-300"
              >
                <span className="font-mono font-bold uppercase text-pitch-black group-hover:text-crimson transition-colors">Explore Systems</span>
                <ChevronRight size={18} className="text-pitch-black group-hover:text-crimson transition-colors" />
              </a>
              <a 
                href="#contact" 
                className="group flex items-center gap-2 px-8 py-4 border border-border-gray hover:border-crimson transition-colors bg-slate-noir"
              >
                <span className="font-mono font-bold uppercase">Initiate Contact</span>
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-4"
          >
            {/* Key Metric Bento-Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-border-gray bg-slate-noir flex flex-col justify-center relative overflow-hidden group hover:border-crimson transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-30 font-mono text-xs">+</div>
                <h3 className="text-5xl font-display font-bold mb-2 group-hover:scale-110 origin-left transition-transform">5+</h3>
                <p className="font-mono text-xs uppercase tracking-widest opacity-70">Years Engineering Rigor</p>
              </div>
              <div className="p-6 border border-border-gray bg-slate-noir flex flex-col justify-center relative overflow-hidden group hover:border-crimson transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-30 font-mono text-xs">+</div>
                <h3 className="text-5xl font-display font-bold mb-2 group-hover:scale-110 origin-left transition-transform">8</h3>
                <p className="font-mono text-xs uppercase tracking-widest opacity-70">Major Deployments</p>
              </div>
              <div className="col-span-2 p-6 border border-border-gray bg-slate-noir flex flex-col justify-center relative overflow-hidden group hover:border-crimson transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-30 font-mono text-xs">+</div>
                <h3 className="text-4xl font-display font-bold mb-2 group-hover:scale-105 origin-left transition-transform">3</h3>
                <p className="font-mono text-xs uppercase tracking-widest opacity-70">Core Disciplines: Full Stack, AI, Systems</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
