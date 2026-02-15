import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Code,
    title: 'Full-Stack Web Development',
    description: 'Building complete web applications from responsive frontends to robust backend systems. Specializing in MERN stack with authentication, RESTful APIs, and scalable database architecture.',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    icon: Palette,
    title: 'Frontend Development & UI',
    description: 'Creating responsive, user-friendly interfaces that work seamlessly across all devices. Focus on clean design, accessibility, and optimal user experience using modern frameworks.',
    skills: ['HTML/CSS', 'JavaScript', 'TailwindCSS', 'Bootstrap'],
  },
  {
    icon: Database,
    title: 'Backend & API Development',
    description: 'Designing and implementing RESTful APIs, authentication systems, and database management. Building secure, efficient server-side logic with proper error handling and testing.',
    skills: ['REST APIs', 'MongoDB', 'MySQL', 'Authentication'],
  },
  {
    icon: Globe,
    title: 'Deployment & Version Control',
    description: 'Managing complete development lifecycle from coding to deployment. Experienced in debugging, testing, Git workflows, and deploying production-ready applications.',
    skills: ['Git', 'GitHub', 'Postman', 'Testing'],
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
