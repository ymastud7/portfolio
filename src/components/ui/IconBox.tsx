import React from 'react';

interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  color?: 'primary' | 'accent' | 'accent-secondary' | 'accent-tertiary';
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({ 
  icon,
  color = 'primary',
  className = '',
  ...props 
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'accent':
        return 'bg-accent/10 text-accent';
      case 'accent-secondary':
        return 'bg-accent-secondary/10 text-accent-secondary';
      case 'accent-tertiary':
        return 'bg-accent-tertiary/10 text-accent-tertiary';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div 
      className={`p-3 rounded-full ${getColorClasses()} ${className}`}
      {...props}
    >
      {icon}
    </div>
  );
};

export default IconBox;