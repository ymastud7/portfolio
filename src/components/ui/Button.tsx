import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, MotionProps {
  variant?: 'primary' | 'secondary' | 'github' | 'email' | 'resume';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className = '',
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'apple-button flex items-center justify-center';
    
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
          ref={ref as React.Ref<HTMLAnchorElement>}
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
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;