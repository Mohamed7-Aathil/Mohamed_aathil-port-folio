import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import profileImg from "@/assets/Aathil.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full bg-primary/50 mt-2" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left — avatar area */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl glass-card neon-glow overflow-hidden">
              <img src={profileImg} alt="Mohamed Aathil K" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
              Passionate Full Stack Developer with a strong interest in{" "}
              <span className="text-foreground font-medium">Python, Django, and React</span>.
              Skilled in building scalable web applications and continuously learning new
              technologies to deliver high-quality software solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Code2, label: "Clean Code", desc: "Writing maintainable, efficient code" },
                { icon: Lightbulb, label: "Problem Solver", desc: "Creative solutions to complex challenges" },
                { icon: Rocket, label: "Fast Learner", desc: "Quick to adapt new technologies" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-4 text-center hover:neon-glow transition-all duration-300">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold text-sm text-foreground">{item.label}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
