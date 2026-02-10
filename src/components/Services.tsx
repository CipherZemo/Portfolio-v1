import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building complete web applications from frontend to backend with modern technologies like React, Node.js, and Express.',
    skills: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    icon: Palette,
    title: 'UI/UX Development',
    description: 'Creating beautiful, responsive, and intuitive user interfaces that provide seamless experiences across all devices.',
    skills: ['Tailwind CSS', 'Responsive Design', 'Figma', 'Accessibility'],
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Designing and implementing scalable REST APIs, database architectures, and server-side logic for robust applications.',
    skills: ['REST APIs', 'MongoDB', 'PostgreSQL', 'Authentication'],
  },
  {
    icon: Globe,
    title: 'Web Performance',
    description: 'Optimizing applications for speed, performance, and SEO to deliver the best possible user experience.',
    skills: ['Performance', 'SEO', 'Best Practices', 'PWA'],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What I Do <span className="text-muted-foreground">/</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I specialize in building full-stack web applications that are fast, reliable, and user-friendly.
            With a solid foundation in both frontend and backend technologies, I help bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover p-8 border border-border rounded-2xl bg-card"
              >
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
