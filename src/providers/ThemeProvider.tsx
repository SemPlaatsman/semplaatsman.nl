import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import { ThemeContext } from '../contexts/ThemeContext';
import { Theme } from '../types/theme';
import config from '../config';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return (
      savedTheme ?? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    );
  });

  useEffect(() => {
    const themeWasSaved = localStorage.getItem('theme') !== null;
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme + '-theme';

    if (!themeWasSaved && theme !== 'dark') {
      toast(
        (t) => (
          <span>
            Hey psst, try dark mode! This website is optimized for it.
            <button
              onClick={() => {
                setTheme('dark');
                toast.dismiss(t.id);
              }}
            >
              Switch to dark mode
            </button>
          </span>
        ),
        { id: 'theme-suggestion-toast', duration: config.ui.toasts.defaultDuration }
      );
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
