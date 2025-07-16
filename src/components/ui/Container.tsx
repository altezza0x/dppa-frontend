import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
}

const maxWidths = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '7xl': 'max-w-7xl'
};

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  as: Component = 'div',
  maxWidth = '7xl'
}) => {
  return (
    <Component className={`${maxWidths[maxWidth]} mx-auto px-4 ${className}`}>
      {children}
    </Component>
  );
};

export default Container;
