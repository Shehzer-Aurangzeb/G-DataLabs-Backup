import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}
function Main({ children, className = ' ' }: IProps) {
  return (
    <div
      className={[
        'bg-light drop-shadow-container h-[calc(100vh_-_2.5rem)] w-full flex-1 rounded-l-lg relative overflow-hidden ',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export default Main;
