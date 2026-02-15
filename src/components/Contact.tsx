// src/components/Contact.tsx

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xojndnzp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "acharyakrishnan9@gmail.com",
      href: "mailto:acharyakrishnan9@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9539571610",
      href: "tel:+919539571610",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kollam, Kerala, India",
      href: "https://maps.app.goo.gl/Bh4iwbrbT39FeFr18",
    },
  ];

  return (
    <section id="contact" className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's Work Together <span className="text-muted-foreground">/</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
            I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 rounded-lg"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 rounded-lg"
                >
                  ✗ Something went wrong. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="p-8 border border-border rounded-2xl bg-card">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="p-8 border border-border rounded-2xl bg-card">
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/CipherZemo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all hover:scale-105 font-medium"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/krishnan-acharya-99341a300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all hover:scale-105 font-medium"
                >
                  LinkedIn
                </a>

                <a
                  href="mailto:acharyakrishnan9@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all hover:scale-105 font-medium"
                >
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
