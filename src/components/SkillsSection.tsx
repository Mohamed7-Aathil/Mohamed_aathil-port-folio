import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Vite", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 85 },
      { name: "Django", level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Git", level: 75 },
      { name: "REST APIs", level: 85 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-primary/50 mt-2" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
            className="glass-card p-6 hover:neon-glow transition-all duration-300"
          >
            <h3 className="text-lg font-bold gradient-text mb-6">{cat.title}</h3>
            <div className="space-y-5">
              {cat.skills.map((skill, si) => (
                <div key={si}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: si * 0.1 + ci * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
