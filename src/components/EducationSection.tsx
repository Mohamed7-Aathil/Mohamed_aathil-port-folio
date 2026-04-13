import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    college: "M.A.M B-School, Trichy",
    cgpa: "7.85 / 10",
    year: "2024 - 2026",
  },
  {
    degree: "B.Sc Computer Science",
    college: "Sadakathullah Appa College, Tirunelveli",
    cgpa: "7.05 / 10",
    year: "2021 - 2024",
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
        {/* Vertical line with gradient */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.25, duration: 0.6, type: "spring", stiffness: 80 }}
            className={`relative flex items-start gap-6 mb-14 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Animated Dot */}
            <motion.div
              className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary z-10 mt-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.25 + 0.3, type: "spring", stiffness: 200 }}
            >
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
            </motion.div>

            {/* Card */}
            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-6 hover:neon-glow transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    <Calendar size={12} />
                    {edu.year}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">{edu.college}</p>
                <p className="text-sm font-mono text-primary mt-2">CGPA: {edu.cgpa}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
