import React from 'react';

interface SkillChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

const SkillChip: React.FC<SkillChipProps> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <span className={`skill-chip ${className}`} {...props}>
      {children}
    </span>
  );
};

export default SkillChip;