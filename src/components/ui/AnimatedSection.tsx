"use client";

import React from 'react';
import { motion } from 'framer-motion';
import useScrollVisibility from '@/hooks/useScrollVisibility';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animateOnce?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '',
  id,
  animateOnce = true
}) => {
  const isVisible = useScrollVisibility(id || '', 0.75);

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.9,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;