import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../hooks/useTheme';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation('layout');

  return (
    <div
      className={styles.themeSwitcher}
      onClick={toggleTheme}
      onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
      tabIndex={0}
      role="button"
      aria-label={t('navbar.themeSwitcher.ariaLabel')}
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
