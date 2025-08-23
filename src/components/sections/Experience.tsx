"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin, FiCalendar, FiTrendingUp } from "react-icons/fi";
import useScrollVisibility from "@/hooks/useScrollVisibility";

const Experience = () => {
  const isVisible = useScrollVisibility("experience");

  const experiences = [
    {
      role: "Software Developer",
      company: "Jubilant FoodWorks",
      period: "Jul 2023 – Present",
      location: "Mumbai, India",
      description: "Leading development of point-of-sale solutions for India's largest QSR chain with 1000+ outlets",
      achievements: [
        {
          title: "Customer Facing Display System",
          description: "Engineered real-time display system for customer interactions, deployed across 100+ stores with <20ms latency"
        },
        {
          title: "Training Mode Revolution",
          description: "Developed intuitive training interface that reduced onboarding time from 6 weeks to just 6 hours"
        },
        {
          title: "AI-Driven Demand Forecasting",
          description: "Implemented weather-based demand prediction system that increased rainy-day sales by 10%"
        },
        {
          title: "Competitive Intelligence",
          description: "Conducted comprehensive POS system analysis of industry leaders (McD, KFC) to identify innovation opportunities"
        },
        {
          title: "Data-Driven Insights",
          description: "Integrated Amplitude analytics to track user behavior and optimize interface decisions"
        },
        {
          title: "No-Code Menu Management",
          description: "Created CMS for digital menu boards enabling 85-95% faster content rollouts without developer intervention"
        }
      ]
    },
    {
      role: "Business Analyst Intern",
      company: "Axis Bank",
      period: "Jun 2022 – Aug 2022",
      location: "Mumbai, India",
      description: "Analyzed banking operations to drive process improvements and customer satisfaction",
      achievements: [
        {
          title: "Incentive Optimization Engine",
          description: "Built tool to maximize relationship manager incentives, resulting in 15-20% increase in performance metrics"
        },
        {
          title: "CASA Account Analytics",
          description: "Developed Power BI cube to analyze quality metrics for 10,000+ current and savings accounts"
        }
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      className="pt-15 pb-20 px-4 relative bg-background"
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
              Professional Experience
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-accent/30 transform -translate-x-1/2 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 border-4 border-background"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <FiBriefcase className="text-background text-lg" />
                </motion.div>
                
                <div className={`apple-card p-7 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2' : 'md:ml-1/2'}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-primary text-lg font-semibold mb-2">{exp.company}</p>
                      <p className="text-foreground/80 mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-3 mt-3">
                        <div className="flex items-center text-foreground/70 text-sm">
                          <FiCalendar className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center text-foreground/70 text-sm">
                          <FiMapPin className="mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ 
                          duration: 0.6,
                          delay: (index * 0.3) + (i * 0.1),
                          ease: "easeOut"
                        }}
                      >
                        <span className="text-primary mr-3 mt-1 text-lg">
                          <FiTrendingUp />
                        </span>
                        <div>
                          <h4 className="font-semibold mb-1">{achievement.title}</h4>
                          <p className="text-foreground/80 text-sm">{achievement.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;