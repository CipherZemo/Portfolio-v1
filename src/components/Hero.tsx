import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-0">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              👋 Available for work
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
          >
            Full Stack
            <br />
            <span className="gradient-text">Developer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Passionate about building polished, intuitive, and thoughtful digital experiences
            that leave a mark. Specializing in modern web technologies and full-stack development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-border rounded-lg font-medium hover:bg-secondary transition-all hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 border border-border rounded-lg hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
