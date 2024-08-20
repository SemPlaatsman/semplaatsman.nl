import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

import { useTheme } from '../../hooks/useTheme';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={styles.themeSwitcher}
      onClick={toggleTheme}
      onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
      tabIndex={0}
      role="button"
    >
      {theme === 'light' ? (
        <IoMoon className={styles.themeIcon} />
      ) : (
        <IoSunny className={styles.themeIcon} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
