"use client";

import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiDownload, FiGithub } from "react-icons/fi";
import { Button } from "@/components/ui";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const} }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden "
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Vinyl Records */}
        <motion.div 
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent-secondary/20 border-8 border-vinyl-center flex items-center justify-center"
          animate={{ 
            rotate: 360,
            y: [0, -30, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-10 h-10 rounded-full bg-vinyl-center"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-accent-tertiary/20 border-8 border-vinyl-center flex items-center justify-center opacity-80"
          animate={{ 
            rotate: -360,
            y: [0, 30, 0],
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          <div className="w-6 h-6 rounded-full bg-vinyl-center"></div>
        </motion.div>
        
        {/* Floating Music Notes */}
        <motion.div 
          className="absolute top-1/3 right-1/4 text-music-note text-4xl opacity-30"
          animate={{ 
            y: [0, -35, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          ♪
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/3 text-music-note text-3xl opacity-30"
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          ♫
        </motion.div>
        
        {/* Pulsing Circles */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary/5"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-accent/5"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
        
        {/* Abstract shapes */}
        <motion.div 
          className="absolute top-1/5 right-1/5 w-36 h-36 rounded-full bg-accent-secondary/10 blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 left-1/6 w-42 h-42 rounded-full bg-accent-tertiary/10 blur-3xl"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            variants={item}
          >
            Yash <span className="gradient-text">Mastud</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-foreground/80 mb-8 font-light"
            variants={item}
          >
            Product-Focused Software Developer
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-foreground/70 font-light leading-relaxed"
            variants={item}
          >
            Bridging the gap between technical excellence and user-centric innovation
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6"
            variants={item}
          >
            <Button 
              href="https://www.linkedin.com/in/yash-mastud-3355a3189/" 
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLinkedin className="mr-2 text-lg" />
              LinkedIn
            </Button>
            <Button 
              href="mailto:mastud.yash7@gmail.com"
              variant="email"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="mr-2 text-lg" />
              Email
            </Button>
            <Button 
              href="https://github.com/ymastud7"
              target="_blank"
              rel="noopener noreferrer"
              variant="github"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="mr-2 text-lg" />
              GitHub
            </Button>
            <Button 
              href="/yash_mastud.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="mr-2 text-lg" />
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary/50 flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
        <p className="text-foreground/60 text-xs mt-2 text-center">Explore My Work</p>
      </motion.div>
    </section>
  );
};

export default Hero;