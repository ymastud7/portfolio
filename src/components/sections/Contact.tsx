"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMail, FiLinkedin, FiMapPin, FiCoffee } from "react-icons/fi";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      
      <div className="container mx-auto max-w-4xl relative z-10">
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
          
          <motion.div 
            className="apple-card p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            <div className="flex items-center justify-center mb-5">
              <FiCoffee className="text-3xl text-primary mr-3" />
              <h3 className="text-2xl font-bold">Open to Opportunities</h3>
            </div>
            
            <p className="mb-8 text-foreground/90 max-w-2xl mx-auto">
              I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. 
              Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  target={method.title === "LinkedIn" ? "_blank" : "_self"}
                  rel={method.title === "LinkedIn" ? "noopener noreferrer" : ""}
                  className="apple-card p-5 flex flex-col items-center text-center group"
                  whileHover={{ y: -6 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                    {method.icon}
                  </div>
                  <h3 className="font-semibold mb-1">{method.title}</h3>
                  <p className="text-foreground/70 mb-2">{method.value}</p>
                  <p className="text-foreground/80 text-sm">{method.description}</p>
                </motion.a>
              ))}
            </div>
            
            <div className="flex items-center justify-center pt-5 border-t border-border/50">
              <FiMapPin className="mr-2 text-foreground/70" />
              <p className="text-foreground/70">Based in Mumbai, India</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;