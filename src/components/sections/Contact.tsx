"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiMapPin, FiCoffee, FiGithub, FiDownload } from "react-icons/fi";
import useScrollVisibility from "@/hooks/useScrollVisibility";
import ContactForm from "./ContactForm";

const Contact = () => {
  const isVisible = useScrollVisibility("contact");

  const contactMethods = [
    {
      icon: <FiMail className="text-lg" />,
      title: "Email",
      value: "mastud.yash7@gmail.com",
      action: "mailto:mastud.yash7@gmail.com",
      description: "For professional inquiries and collaboration opportunities"
    },
    {
      icon: <FiLinkedin className="text-lg" />,
      title: "LinkedIn",
      value: "Yash Mastud",
      action: "https://www.linkedin.com/in/yash-mastud-3355a3189/",
      description: "Connect with me professionally and view my complete profile"
    },
    {
      icon: <FiGithub className="text-lg" />,
      title: "GitHub",
      value: "ymastud7",
      action: "https://github.com/ymastud7",
      description: "View my code repositories and contributions"
    },
    {
      icon: <FiDownload className="text-lg" />,
      title: "Resume",
      value: "Download PDF",
      action: "/yash_mastud.pdf",
      description: "Download my complete professional resume"
    }
  ];

  return (
    <section 
      id="contact" 
      className="pt-12 pb-20 px-4 relative bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-40 w-60 h-60 rounded-full bg-primary/5 blur-3xl floating"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 rounded-full bg-accent-secondary/5 blur-3xl floating-slow"></div>
        <motion.div 
          className="absolute top-1/4 left-1/3 text-music-note text-5xl opacity-5"
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          ♩
        </motion.div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ 
            duration: 0.9,
            ease: "easeOut"
          }}
        >
          <div className="text-center mb-12">
            <h2 className="section-title justify-center">
              Let&apos;s Connect
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="apple-card p-8 h-full">
                <div className="flex items-center justify-center mb-5">
                  <FiCoffee className="text-3xl text-primary mr-3" />
                  <h3 className="text-2xl font-bold">Get in Touch</h3>
                </div>
                
                <p className="mb-8 text-foreground/90">
                  I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. 
                  Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
                </p>
                
                <div className="space-y-5">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.action}
                      target={method.title === "LinkedIn" || method.title === "GitHub" || method.title === "Resume" ? "_blank" : "_self"}
                      rel={method.title === "LinkedIn" || method.title === "GitHub" || method.title === "Resume" ? "noopener noreferrer" : ""}
                      className="flex items-start p-4 rounded-lg hover:bg-muted/30 transition-all duration-300 group"
                      whileHover={{ y: -4 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-foreground/70 mb-1">{method.value}</p>
                        <p className="text-foreground/80 text-sm">{method.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                <div className="flex items-center justify-center pt-6 mt-6 border-t border-border/50">
                  <FiMapPin className="mr-2 text-foreground/70" />
                  <p className="text-foreground/70">Based in Mumbai, India</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;