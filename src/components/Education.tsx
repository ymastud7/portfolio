"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiBook, FiAward, FiMapPin, FiStar } from "react-icons/fi";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("education");
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

  const achievements = [
    {
      icon: <FiStar className="text-sm" />,
      text: "Consistent academic performer with CGPA of 7/10"
    },
    {
      icon: <FiAward className="text-sm" />,
      text: "Active participant in technical and cultural festivals"
    },
    {
      icon: <FiBook className="text-sm" />,
      text: "Specialized in Data Structures, Algorithms, and Software Engineering"
    }
  ];

  return (
    <section 
      id="education" 
      className="pt-25 pb-40 px-4 relative bg-background"
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
          ♬
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
              Education
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <motion.div 
            className="apple-card p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
            whileHover={{ y: -8 }}
          >
            <div className="flex flex-col md:flex-row md:items-center mb-6">
              <div className="mr-6 mb-5 md:mb-0 p-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                <FiBook className="text-4xl text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">B.Tech in Computer Engineering</h3>
                <p className="text-primary text-xl font-semibold mb-3">Veermata Jijabai Technological Institute (VJTI)</p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center text-foreground/70 text-sm">
                    <FiMapPin className="mr-1" />
                    <span>Mumbai, India</span>
                  </div>
                  <div className="flex items-center text-foreground/70 text-sm">
                    <FiAward className="mr-1" />
                    <span>2019–2023</span>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Foundation in computer science principles, software engineering practices, and emerging technologies. 
                  Developed strong analytical and problem-solving skills through rigorous coursework and hands-on projects.
                </p>
              </div>
            </div>
            
            <div className="pt-5 border-t border-border/50">
              <h4 className="font-semibold mb-4">Key Achievements</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    <span className="text-primary mr-2 mt-0.5">
                      {achievement.icon}
                    </span>
                    <span className="text-foreground/90 text-sm">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-5 border-t border-border/50 mt-5">
              <p className="text-foreground/90">CGPA: 7/10</p>
              <div className="mt-3 sm:mt-0">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full text-sm font-medium">
                  Graduated
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;