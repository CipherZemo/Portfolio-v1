import { motion } from 'framer-motion';
import { Github } from 'lucide-react';//add ExternalLink if you want to add live demo links
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'Short.ly - URL Shortener Service',
    description: 'Full-stack URL shortening platform with click analytics and authenticated dashboard. Built with MERN stack, features private link management, real-time tracking, and seamless redirection with invisible analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/CipherZemo/url-shortner-service',
  },
  {
    title: 'Automated Waste Management Robot',
    description: 'AI-powered robotic system using YOLO ML model for waste detection and segregation with 86.3% accuracy. Integrated ESP32 microcontroller for movement control and Arduino Nano for robotic arm operations.',
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&h=600&fit=crop',
    tags: ['Python', 'YOLO', 'ESP32', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: 'https://github.com/CipherZemo',
  },
  {
    title: 'Employee Management System',
    description: 'Comprehensive EMS application for managing employee data with full CRUD operations. Built with Node.js backend, MongoDB database, and responsive Bootstrap frontend for efficient organizational data management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['Node.js', 'MongoDB', 'Bootstrap', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/CipherZemo',
  },
  {
    title: 'Full-Stack Blog Platform',
    description: 'Interactive blog application where users can create, view, comment, and like posts. Features complete CRUD operations, user authentication, and dynamic content rendering using EJS templates.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    tags: ['Node.js', 'MongoDB', 'EJS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/CipherZemo/blog-app-node',
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Selected Works <span className="text-muted-foreground">/</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Thoughtfully crafted digital experiences that blend utility and aesthetics into something
            functional, memorable, and refined.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-hover border border-border rounded-2xl overflow-hidden bg-card"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {/* <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a> */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
