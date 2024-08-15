import React from 'react';
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '../../hooks/useTheme';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher} onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoon className={styles.themeIcon} />
      ) : (
        <IoSunny className={styles.themeIcon} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
