import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Theme } from '../types/theme';

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return (
      savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme + '-theme';
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
