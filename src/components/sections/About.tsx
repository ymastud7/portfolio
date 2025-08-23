"use client";

import { motion } from "framer-motion";
import { FiTarget, FiZap, FiUsers, FiHeart } from "react-icons/fi";
import { Card, SectionTitle, AnimatedSection } from "@/components/ui";

const About = () => {
  const coreValues = [
    {
      icon: <FiTarget className="text-lg" />,
      title: "User-Centric Innovation",
      description: "Designing solutions that truly resonate with end-users"
    },
    {
      icon: <FiZap className="text-lg" />,
      title: "Technical Excellence",
      description: "Crafting robust, scalable, and efficient systems"
    },
    {
      icon: <FiUsers className="text-lg" />,
      title: "Collaborative Leadership",
      description: "Empowering teams to achieve extraordinary outcomes"
    },
    {
      icon: <FiHeart className="text-lg" />,
      title: "Passionate Craftsmanship",
      description: "Building products with genuine care and dedication"
    }
  ];

  return (
    <AnimatedSection 
      id="about" 
      className="pt-25 pb-25 px-4 relative bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-primary/5 blur-3xl floating"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-accent-secondary/5 blur-3xl floating-slow"></div>
        <motion.div 
          className="absolute top-1/3 left-1/4 text-music-note text-4xl opacity-5"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          ♩
        </motion.div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <SectionTitle className="justify-center">
            About Me
          </SectionTitle>
          <div className="h-1 w-24 bg-primary mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-5">
                <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                  I&apos;m a product-focused software developer with a passion for creating solutions that make a real difference. With 2 years of experience spanning the entire product lifecycle, I specialize in translating complex business requirements into elegant technical implementations.
                </p>
                
                <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                  My approach combines technical expertise with strategic thinking, ensuring that every line of code contributes to both user satisfaction and measurable business outcomes. I thrive at the intersection of technology, design, and product strategy.
                </p>
                
                <p className="text-foreground/90 leading-relaxed text-base md:text-lg">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or perfecting my craft through continuous learning.
                </p>
              </div>
            </Card>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-5 flex flex-col items-center text-center" hoverEffect>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-xs">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;