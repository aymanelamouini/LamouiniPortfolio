import { motion } from 'framer-motion';

const timeline = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'InsurBT',
    date: '2024 - 2025',
    type: 'Professional Experience',
    description: 'Developed internal project orchestration software optimizing resource allocation, sprint milestone visibility, and cross-departmental productivity.',
  },
  {
    id: 2,
    role: 'Security Engineering Intern',
    company: 'Wafa Assurance',
    date: 'July 2024',
    type: 'Internship',
    description: 'Executed enterprise vulnerability assessments, automated recurring audit pipelines with Bash scripts, and diagnosed network traffic anomalies.',
  },
  {
    id: 3,
    role: 'Cross-Platform Developer',
    company: 'BITS (Ghana)',
    date: '2026',
    type: 'Client Project',
    description: 'Built an international real estate scheduling and booking mobile/web app tailored for the Ghanaian real estate market.',
  },
  {
    id: 4,
    role: 'Computer Engineering Degree (5IIR)',
    company: 'EMSI',
    date: '2021 - 2026',
    type: 'Education',
    description: 'Final-year student specializing in Software Engineering and Distributed Systems. Capstone project (PFE) involves building a multi-tenant enterprise reservation ecosystem.',
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-border/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <div className="font-mono text-muted mb-4 flex items-center gap-4 text-sm">
            <span className="text-accent font-bold">// 01</span>
            ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
            Experience & Education
          </h2>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-6 pl-8 md:pl-12 space-y-16">
          {timeline.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 bg-background border-2 border-accent rounded-full group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(220,20,60,0.5)] transition-all" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-primary">{item.role}</h3>
                <div className="text-sm font-mono text-muted bg-surface border border-border px-3 py-1 rounded-full self-start md:self-auto">
                  {item.date}
                </div>
              </div>
              
              <div className="text-accent font-medium mb-4 flex items-center gap-2">
                {item.company}
                <span className="text-muted/30 text-sm font-mono">// {item.type}</span>
              </div>
              
              <p className="text-muted max-w-2xl leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
