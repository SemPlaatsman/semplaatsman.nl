import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.themeSwitcher}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
