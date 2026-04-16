import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderOpen, Camera } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import defaultProfile from "@/assets/Aathil.png";

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Python & Django Expert",
  "UI/UX Enthusiast",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [headingText, setHeadingText] = useState("");
  const fullHeading = "Mohamed Aathil K";

  useEffect(() => {
    if (headingText.length < fullHeading.length) {
      const timeout = setTimeout(() => {
        setHeadingText(fullHeading.slice(0, headingText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [headingText]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-[80px] animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative group"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/50 neon-glow animate-glow-pulse">
              <img src={profileImage || defaultProfile} alt="Mohamed Aathil K" className="w-full h-full object-cover object-top" />
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
            >
              <Camera size={18} className="text-primary-foreground" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Mohamed <span className="gradient-text">Aathil K</span>
            </h1>
            <div className="h-8 md:h-10 flex items-center justify-center">
              <span className="text-lg md:text-2xl text-muted-foreground font-mono typing-cursor">
                {text}
              </span>
            </div>
            <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-lg mx-auto">
              Building scalable and modern web applications
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <a href="#projects" className="gradient-btn px-6 py-3 rounded-lg flex items-center gap-2 text-sm">
              <FolderOpen size={18} /> View Projects
            </a>
            <a
              href="/K_Mohamed_Aathil_Resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-glass-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
