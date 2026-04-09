import { motion } from "framer-motion";

const projects = [
  {
    title: "Asset Management System (AMS)",
    description: "Manage organizational assets efficiently with tracking and reporting.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
  },
  {
    title: "Smart Intern Management System (SIMS)",
    description: "Tracks interns, roles, payments, and dashboards for seamless management.",
    tech: ["React", "Django REST API"],
  },
  {
    title: "Dynamic Timesheet Management System (DTMS)",
    description: "Tracks employee work hours, attendance, and project time allocation.",
    tech: ["React", "Vite", "Python", "Django"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-primary/50 mt-2" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass-card p-6 flex flex-col group cursor-pointer hover:neon-glow transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="text-2xl font-bold gradient-text">{i + 1}</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
