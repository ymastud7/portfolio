import React from 'react';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`section-title ${className}`} {...props}>
      {children}
    </div>
  );
};

export default SectionTitle;