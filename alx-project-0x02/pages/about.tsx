import React from 'react';
import { ButtonProps } from '@/interfaces';

const getSizeClass = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return 'text-sm px-3 py-1';
    case 'medium':
      return 'text-base px-4 py-2';
    case 'large':
      return 'text-lg px-5 py-3';
    default:
      return '';
  }
};

const Button: React.FC<ButtonProps> = ({ label, size, shape }) => {
  return (
    <button className={`bg-blue-600 text-white ${getSizeClass(size)} ${shape}`}>
      {label}
    </button>
  );
};

export default Button;
