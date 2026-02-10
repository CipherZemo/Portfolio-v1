import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'Authentication', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Firebase', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'Vite', level: 85 },
      { name: 'npm/yarn', level: 90 },
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 border border-border rounded-2xl bg-card"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Logos/Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 border border-border rounded-2xl bg-card"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React',
              'Node.js',
              'TypeScript',
              'MongoDB',
              'Express',
              'Tailwind',
              'Git',
              'Firebase',
              'PostgreSQL',
              'Vite',
              'Docker',
              'Next.js',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:scale-110 transition-transform cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
