import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce application with shopping cart, payment integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, team workspaces, and Kanban boards.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
    tags: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with forecasts, interactive maps, and location-based services.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    tags: ['React', 'TypeScript', 'API Integration', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Clone',
    description: 'Instagram-inspired social platform with posts, comments, likes, and user authentication.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'Firebase', 'Authentication', 'Cloud Storage'],
    liveUrl: '#',
    githubUrl: '#',
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
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
