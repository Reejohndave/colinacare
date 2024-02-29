import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // You can add any additional custom props if needed
  // For example, error messages, labels, etc.
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <input {...props} />;
};

export default Input;