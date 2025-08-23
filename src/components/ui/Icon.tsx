import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '',
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      {...props}
    />
  );
};

export default Icon;