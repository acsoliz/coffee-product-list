import React from 'react';

export const MainTitle: React.FC<{ title: string }> = ({ title }) => {
  return <h1 className="text-3xl font-bold mb-4 p-4 text-cyan-500">{title}</h1>;
};
