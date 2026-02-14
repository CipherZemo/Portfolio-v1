import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Me <span className="text-muted-foreground">/</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                <img
                  src="/1.webp"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="font-semibold text-foreground">Full Stack Developer</span> with
              a knack for building modern web applications using the MERN stack. My journey into tech began
              with a curiosity for solving real-world problems through innovative solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What drives me is the intersection of <span className="font-semibold text-foreground">design and
              functionality</span>. I believe that great software should not only work flawlessly but also
              provide an intuitive and delightful user experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems
              with creative solutions. I'm always learning new technologies and best practices to stay at
              the forefront of web development.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Currently Learning</h4>
                  <p className="text-muted-foreground">Advanced system design, microservices architecture, and cloud deployment strategies.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Interests</h4>
                  <p className="text-muted-foreground">Web performance optimization, UI/UX design, open-source contributions, and tech blogging.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Fun Fact</h4>
                  <p className="text-muted-foreground">When I'm not coding, you'll find me exploring new coffee shops or hiking trails!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
