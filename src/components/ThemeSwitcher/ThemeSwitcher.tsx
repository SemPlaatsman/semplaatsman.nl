import React from 'react';
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { Sunny, Moon } from 'react-ionicons';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher} onClick={toggleTheme}>
      {theme === 'light' ? <Moon /> : <Sunny />}
    </div>
  );
};

export default ThemeSwitcher;
