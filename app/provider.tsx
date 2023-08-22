// Providers.jsx

'use client';

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/state/store';

import ThemeProvider from '@/context/ThemeProvider';

interface IProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
