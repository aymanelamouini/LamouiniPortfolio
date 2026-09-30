import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Cpu, Smartphone, ShieldCheck, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Multiplatform Booking Ecosystem",
      year: "2026",
      type: "PFE Final-Year Project",
      stack: ["Flutter", "Spring Boot (Java)", "PostgreSQL"],
      desc: "Conception, development, and deployment of a multi-platform (web and mobile) booking application hosted on a server.",
      icon: <Smartphone size={20} />
    },
    {
      title: "Ghana Real Estate Cross-Platform Booking Engine",
      year: "2026",
      type: "Client Project (BITS)",
      stack: ["Multi-platform", "Cross-Platform Ecosystem"],
      desc: "Designed and developed a multi-platform booking application intended for a Ghanaian real estate agency.",
      icon: <Globe size={20} />
    },
    {
      title: "InsurBT Enterprise Management Portal",
      year: "2024–2025",
      type: "Professional Experience",
      stack: ["React.js", "Java Spring Boot"],
      desc: "Developed a web app for internal project management, improving project tracking, workflow visibility, and global productivity.",
      icon: <LayoutGrid size={20} />
    },
    {
      title: "AI-Driven Smart E-Commerce Platform",
      year: "2025",
      type: "PFA 5th Year",
      stack: ["AI Integration", "Full Stack"],
      desc: "Designed and developed an e-commerce site integrating AI assistance, including stock management and product availability tracking.",
      icon: <Cpu size={20} />
    },
    {
      title: "Cybersecurity Audit & Infrastructure Automation",
      year: "July 2024",
      type: "Wafa Assurance",
      stack: ["Bash", "Wireshark", "TCP/IP", "Windows Server"],
      desc: "Executed security audits, developed Bash automation scripts, and contributed to cybersecurity awareness initiatives.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "EMSI Campus Instant Messaging Hub",
      year: "2024",
      type: "PFA 4th Year",
      stack: ["Laravel"],
      desc: "Developed an instant messaging app for EMSI students featuring user authentication and group chat capabilities.",
      icon: <LayoutGrid size={20} />
    },
    {
      title: "Enterprise Appointment Scheduling System",
      year: "2023",
      type: "3rd Year Project",
      stack: ["Python", "Django"],
      desc: "Developed a complete web platform inspired by Microsoft Booking, implementing appointment scheduling, user management, and admin dashboards.",
      icon: <LayoutGrid size={20} />
    },
    {
      title: "Hotel Operations & Room Allocation System",
      year: "2022",
      type: "2nd Year Project",
      stack: ["C", "C++"],
      desc: "Conceived and developed a desktop application for hotel reservation management, client management, and room availability.",
      icon: <LayoutGrid size={20} />
    }
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-border-gray">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="font-mono text-xs mb-2 opacity-70">// 03</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">
              Project<br/>Matrix
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4 font-mono text-xs">
            <span>[ 8 ACTIVE DEPLOYMENTS ]</span>
            <div className="w-16 h-px bg-crimson"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="group flex flex-col border border-border-gray bg-slate-noir p-6 hover:border-crimson transition-all duration-300 min-h-[320px]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="font-mono text-xs px-2 py-1 border border-border-gray bg-pitch-black group-hover:border-crimson transition-colors">
                  {project.year} // {project.type}
                </div>
                <div className="opacity-50 group-hover:opacity-100 group-hover:text-crimson transition-all">
                  {project.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-4 uppercase leading-tight group-hover:text-crimson">
                {project.title}
              </h3>
              
              <p className="text-sm opacity-80 mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border-gray">
                {project.stack.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-mono uppercase opacity-70 before:content-['>'] before:mr-1 group-hover:opacity-100 transition-opacity"
                  >
                    {tech}
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

export default Projects;
