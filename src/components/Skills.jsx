import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Server, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: <MonitorSmartphone size={24} />,
      skills: ["React.js", "Angular", "Flutter", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      title: "Backend & Systems",
      icon: <Server size={24} />,
      skills: ["Java", "Python", "C", "C++", "C#", "Spring / Spring Boot", "Laravel", "Django"]
    },
    {
      title: "Databases & DevOps",
      icon: <Database size={24} />,
      skills: ["PostgreSQL", "SQL", "PL/SQL", "T-SQL", "Bash", "Wireshark", "Windows Server", "TCP/IP"]
    },
    {
      title: "Linguistic Protocols",
      icon: <Globe size={24} />,
      skills: ["Arabic (Native)", "French (Bilingual)", "English (Advanced)"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-border-gray">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="font-mono text-xs mb-2 opacity-70">// 02</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
              Technical<br/>Arsenal
            </h2>
          </div>
          <div className="hidden md:block w-1/3 h-px bg-border-gray relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-crimson"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group border border-border-gray bg-slate-noir p-8 hover:border-crimson transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-500">
                {React.cloneElement(category.icon, { size: 120 })}
              </div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 border border-border-gray bg-pitch-black group-hover:border-crimson transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-mono uppercase tracking-wider">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-sm border border-border-gray bg-pitch-black group-hover:border-crimson/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
