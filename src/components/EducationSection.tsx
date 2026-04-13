import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MCA",
    college: "M.A.M B-School, Trichy",
    cgpa: "7.85 / 10",
  },
  {
    degree: "B.Sc Computer Science",
    college: "Sadakathullah Appa College, Tirunelveli",
    cgpa: "7.05 / 10",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Education</span>
        </h2>
        <div className="w-20 h-1 mx-auto rounded-full bg-primary/50 mt-2" />
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className={`relative flex items-start gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow z-10 mt-1" />

            {/* Card */}
            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
              <div className="glass-card p-6 hover:neon-glow transition-all duration-300">
                <GraduationCap className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">{edu.college}</p>
                <p className="text-sm font-mono text-primary mt-2">CGPA: {edu.cgpa}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
