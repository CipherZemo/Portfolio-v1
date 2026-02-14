// src/components/Skills.tsx

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML/CSS',
      'Tailwind CSS',
      'Next.js',
      'Redux',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
      'GraphQL',
      'Authentication',
      'JWT',
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'Firebase',
      'Postman',
      'Vite',
      'npm/yarn',
      'VS Code',
    ],
  },
];

const coretech = [
  'React',
  'Node.js',
  'TypeScript',
  'MongoDB',
  'Express.js',
  'Tailwind CSS',
  'PostgreSQL',
  'JavaScript',
  'Git',
  'Next.js',
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & Technologies <span className="text-muted-foreground">/</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A comprehensive toolkit of modern technologies and frameworks I use to build
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 border border-border rounded-2xl bg-card"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate={isVisible ? 'show' : 'hidden'}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium cursor-default hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Core Technologies - Full Width */}
      <div className="relative w-full overflow-hidden py-12 my-16">
        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate array multiple times for seamless infinite scroll */}
            {[...coretech, ...coretech, ...coretech].map((tech, index) => (
              <span
                key={index}
                className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-foreground via-foreground/60 to-foreground bg-clip-text text-transparent tracking-tight"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;