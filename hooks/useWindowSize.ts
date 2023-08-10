'use client';
import React, { useState, useEffect } from 'react';

interface windowSize {
  height: number;
  width: number;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return {
    width: windowSize.width,
    height: windowSize.height,
  };
}
