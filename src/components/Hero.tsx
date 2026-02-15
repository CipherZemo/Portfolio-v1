// src/components/Hero.tsx

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/CipherZemo',
      color: 'hover:text-pink-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/krishnan-acharya-99341a300',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:acharyakrishnan9@gmail.com',
      color: 'hover:text-red-600',
    },
    {
      name: 'Resume',
      icon: FileDown,
      href: '/resume.pdf',
      color: 'hover:text-green-600',
      download: true,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24 md:pt-0 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge - Updated for Dark Mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-slate-200 dark:bg-green-950 text-gray-700 dark:text-green-300 border border-slate-200 dark:border-green-800 rounded-full text-sm font-medium inline-flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Open to opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              Full Stack
              <br />
              <span className="gradient-text">Developer</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
Passionate about building scalable, user-focused web applications that solve real-world problems. Fresh Computer Science graduate with hands-on experience in full-stack development, RESTful APIs, and modern web technologies.
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
            
              <a href="#projects"
              className="px-8 py-4 border-2 border-border rounded-lg font-medium hover:bg-secondary transition-all hover:scale-105"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social Links with Tooltips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  
                    <a href={social.href}
                    target={social.download ? undefined : "_blank"}
                    rel={social.download ? undefined : "noopener noreferrer"}
                    download={social.download}
                    className={`p-3 border border-border rounded-lg hover:bg-secondary transition-all hover:scale-110 block ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon size={24} />
                  </a>
                  
                  {/* Tooltip */}
                  {hoveredIcon === social.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-foreground text-background text-sm font-medium rounded-md whitespace-nowrap pointer-events-none"
                    >
                      {social.name}
                      {/* Tooltip Arrow */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Side - Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-72 h-72 border border-primary/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/3 right-1/4 w-96 h-96 border border-primary/10 rounded-full"
            />
          </div>

          {/* Main Image Container */}
          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
              
              {/* Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                onClick={scrollToAbout}
                style={{ cursor: 'pointer' }}
                className="absolute -bottom-4 -right-4 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold shadow-lg"
              >
              Check out more about me!
              </motion.div>

              {/* Decorative Dots */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-4 h-4 bg-primary rounded-full"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -right-8 w-4 h-4 bg-primary rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;