'use client';
import React, { useState, createContext, useEffect, useContext } from 'react';
import { Theme } from '@/types';
import { getInitialTheme } from '@/lib/theme';

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};
interface IProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
  setTheme: () => {},
});

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme());

  const checkTheme = (existing: string) => {
    const root = window.document.documentElement;
    const isDark = existing === Theme.DARK;

    root.classList.remove(isDark ? Theme.LIGHT : Theme.DARK);
    root.classList.add(existing);

    localStorage.setItem('current-theme', existing);
  };

  useEffect(() => {
    checkTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
export default ThemeProvider;
