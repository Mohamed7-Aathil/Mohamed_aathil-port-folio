import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Asset Management System (AMS)",
    description: "Manage organizational assets efficiently with tracking and reporting.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    abstract: [
      "Asset Management system is used to maintain assets of company requires a significant amount of time if we do it without software. Every organization has their own Asset Management System in order to perform the resource activities.",
      "Managing Asset or utilizing assets or keeping track of assets are significant task of IT team. The main work of the IT team is to maintain all assets of the company like laptop and any other devices and also maintain the condition of that Asset.",
      "In order to support the IT's, there are some electronic based systems called AMS- Asset management system. Organizations maintained assets with excel sheets which is a very tedious job. But this application is cost effective one that allows them to manage their asset's data in a simple manner.",
      "This project belongs to a category of web application that can be accessed through PC with internet connection. This Asset Management System allows the IT team to provide various types of permission to other IT members and also manage Asset's data, status, category, location, etc.",
    ],
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
] as Array<{
  title: string;
  description: string;
  tech: string[];
  abstract?: string[];
}>;

const ProjectsSection = () => {
  const [selected, setSelected] = useState<null | (typeof projects)[number]>(null);

  return (
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
            onClick={() => project.abstract && setSelected(project)}
            role={project.abstract ? "button" : undefined}
            tabIndex={project.abstract ? 0 : undefined}
            onKeyDown={(e) => {
              if (project.abstract && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                setSelected(project);
              }
            }}
            className="glass-card p-6 flex flex-col group cursor-pointer hover:neon-glow transition-shadow duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:neon-glow rounded-xl"
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

    <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
      <DialogContent className="glass-card max-w-2xl max-h-[85vh] overflow-y-auto border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">
            {selected?.title}
          </DialogTitle>
          <DialogDescription className="text-sm uppercase tracking-wider text-primary/80 pt-1">
            Abstract
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-2 text-foreground/90 leading-relaxed">
          {selected?.abstract?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  </section>
  );
};

export default ProjectsSection;
