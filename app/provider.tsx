// Providers.jsx

'use client';

import React from 'react';
import ThemeProvider from '@/context/ThemeProvider';

interface IProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
