import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const experiences = [
    {
      period: "2026",
      role: "Client Project (BITS)",
      company: "Ghana Real Estate",
      desc: "Designed and developed a cross-platform booking engine."
    },
    {
      period: "2024 - 2025",
      role: "Full Stack Developer",
      company: "InsurBT",
      desc: "Developed an enterprise management portal for internal project management, improving workflow visibility."
    },
    {
      period: "July 2024",
      role: "Cybersecurity Auditor",
      company: "Wafa Assurance",
      desc: "Executed security audits, developed Bash automation scripts, and contributed to infrastructure automation."
    },
    {
      period: "2021 - 2026",
      role: "Computer Engineering Degree (5IIR)",
      company: "EMSI",
      desc: "École Marocaine des Sciences de l'Ingénieur. Comprehensive study in full stack development, AI, and systems engineering."
    }
  ];

  return (
    <section id="timeline" className="py-24 relative border-t border-border-gray">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <div className="font-mono text-xs mb-2 opacity-70">// 04</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">
            Trajectory
          </h2>
        </div>

        <div className="relative border-l border-border-gray ml-3 md:ml-1/2 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative pl-8 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
            >
              {/* Node connecting EMSI Engineering Degree alongside work */}
              <div className="absolute top-0 left-[-5px] md:left-auto md:right-[-5px] w-3 h-3 bg-crimson shadow-[0_0_10px_rgba(220,20,60,0.8)] z-10 
                             transform md:translate-x-[5px]" 
                   style={idx % 2 === 0 ? { right: '-5px' } : { left: '-5px' }} 
              />
              
              <div className="flex flex-col border border-border-gray bg-slate-noir p-6 hover:border-crimson transition-colors relative group">
                <span className="font-mono text-xs mb-2 text-crimson uppercase tracking-widest">{exp.period}</span>
                <h3 className="text-xl font-display font-bold uppercase mb-1 group-hover:text-crimson transition-colors">{exp.role}</h3>
                <span className="text-sm font-mono opacity-70 mb-4">{exp.company}</span>
                <p className="text-sm opacity-80 leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
