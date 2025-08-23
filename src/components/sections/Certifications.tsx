"use client";

import { motion } from "framer-motion";
import { FiBook, FiGlobe, FiStar } from "react-icons/fi";
import useScrollVisibility from "@/hooks/useScrollVisibility";

const Certifications = () => {
  const isVisible = useScrollVisibility("certifications");

  const certifications = [
    {
      title: "Product Management Basics",
      issuer: "Pendo.io",
      year: "2024",
      description: "Fundamentals of product strategy, user research, and roadmap planning",
      icon: <FiBook className="text-lg" />,
      color: "primary"
    },
    {
      title: "Guinness World Record Participant",
      issuer: "Largest Indian Cinematic Music Band",
      year: "2020",
      description: "Collaborated with 1,350 musicians to create India's largest cinematic music band",
      icon: <FiGlobe className="text-lg" />,
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          border: "border-accent/20"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20"
        };
    }
  };

  return (
    <section 
      id="certifications" 
      className="pt-20 pb-100 px-4 relative bg-background border-y border-border/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl floating"></div>
        <div className="absolute bottom-32 right-32 w-60 h-60 rounded-full bg-accent/5 blur-3xl floating-slow"></div>
        <motion.div 
          className="absolute top-1/3 right-1/4 text-music-note text-4xl opacity-5"
          animate={{ 
            y: [0, -35, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          ♪
        </motion.div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
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
              Certifications & Recognition
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Continuous learning and recognition for outstanding contributions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const colorClasses = getColorClasses(cert.color);
              
              return (
                <motion.div 
                  key={index} 
                  className="apple-card p-7"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-start mb-4">
                    <div className={`mr-5 p-3 rounded-full ${colorClasses.bg} ${colorClasses.text} mt-1`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
                      <p className="text-primary font-semibold mb-2">{cert.issuer}</p>
                      <p className="text-foreground/80 text-sm">{cert.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border/50">
                    <span className="text-foreground/70 text-sm">{cert.year}</span>
                    <div className="flex items-center">
                      <span className={`inline-block px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-xs font-medium mr-2`}>
                        {cert.issuer.includes("Guinness") ? "World Record" : "Certification"}
                      </span>
                      <FiStar className={`text-sm ${colorClasses.text}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;