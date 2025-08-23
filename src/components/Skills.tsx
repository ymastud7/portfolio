"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiBox, FiBarChart2, FiCode, FiUsers } from "react-icons/fi";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("skills");
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

  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Product Strategy", "Competitive Analysis", "Agile Methodologies", "Go-to-Market Planning", "User Research", "Roadmap Development"],
      icon: <FiBox className="text-lg" />,
      color: "primary",
      description: "Driving product vision from conception to launch"
    },
    {
      title: "Analytics & Optimization",
      skills: ["A/B Testing", "Funnel Analysis", "SQL", "Power BI", "Amplitude", "Data Visualization", "Conversion Rate Optimization"],
      icon: <FiBarChart2 className="text-lg" />,
      color: "accent",
      description: "Leveraging data to make informed product decisions"
    },
    {
      title: "Tech Stack",
      skills: ["React.js", "Next.js", "Node.js", "Spring Boot", "JavaScript", "Java", "C++", "Python", "MongoDB", "AWS", "Docker", "TypeScript"],
      icon: <FiCode className="text-lg" />,
      color: "accent-secondary",
      description: "Building scalable and performant applications"
    },
    {
      title: "Collaboration & Design",
      skills: ["JIRA", "Confluence", "Figma", "Canva", "Notion", "Slack", "Cross-functional Collaboration", "Design Systems"],
      icon: <FiUsers className="text-lg" />,
      color: "accent-tertiary",
      description: "Working effectively with diverse teams"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
          hover: "hover:bg-primary/20"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          border: "border-accent/20",
          hover: "hover:bg-accent/20"
        };
      case "accent-secondary":
        return {
          bg: "bg-accent-secondary/10",
          text: "text-accent-secondary",
          border: "border-accent-secondary/20",
          hover: "hover:bg-accent-secondary/20"
        };
      case "accent-tertiary":
        return {
          bg: "bg-accent-tertiary/10",
          text: "text-accent-tertiary",
          border: "border-accent-tertiary/20",
          hover: "hover:bg-accent-tertiary/20"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
          hover: "hover:bg-primary/20"
        };
    }
  };

  return (
    <section 
      id="skills" 
      className="pt-15 pb-20 px-4 relative bg-background border-y border-border/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-32 left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl floating"></div>
        <div className="absolute bottom-32 right-32 w-60 h-60 rounded-full bg-accent/5 blur-3xl floating-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-accent-secondary/5 blur-3xl floating-fast"></div>
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
              Skills & Expertise
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              
              return (
                <motion.div 
                  key={index} 
                  className="apple-card p-7"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`mr-4 p-3 rounded-full ${colorClasses.bg} ${colorClasses.text}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                      <p className="text-foreground/70 text-sm">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center mt-5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className={`skill-chip ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} ${colorClasses.hover}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.5,
                          delay: (index * 0.15) + (skillIndex * 0.07),
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          y: -3,
                          boxShadow: `0 6px 12px rgba(var(--${category.color}-rgb, 0, 113, 227), 0.2)`
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
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

export default Skills;