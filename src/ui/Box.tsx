import React from 'react';
interface BoxProps {
  title: string;
  content: string;
}

const Box: React.FC<BoxProps> = ({ title, content }: BoxProps) => {
  return (
    <div className="mb-5 h-56 border-2 border-solid border-gray-300 p-10">
      <h2 className="mb-5 text-xl font-medium text-text-highlight">{title}</h2>
      <p className="text-text-secondary">{content}</p>
    </div>
  );
};

export default Box;
