import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

import { useTheme } from '../../hooks/useTheme';

import styles from './ThemeSwitcher.module.scss';

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
