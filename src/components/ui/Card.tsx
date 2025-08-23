import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, MotionProps {
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hoverEffect = true, ...props }, ref) => {
    const baseClasses = 'apple-card';
    const classes = `${baseClasses} ${className}`;
    
    return (
      <motion.div
        ref={ref}
        className={classes}
        whileHover={hoverEffect ? { y: -6 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;