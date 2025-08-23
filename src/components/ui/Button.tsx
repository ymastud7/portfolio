import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps extends MotionProps {
  variant?: 'primary' | 'secondary' | 'github' | 'email' | 'resume';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ 
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  ...props
}: ButtonProps) => {
  const baseClasses = 'apple-button flex items-center justify-center transition-all duration-300';
  
  const variantClasses = {
    primary: 'primary',
    secondary: 'secondary',
    github: 'github',
    email: 'email',
    resume: 'resume',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;