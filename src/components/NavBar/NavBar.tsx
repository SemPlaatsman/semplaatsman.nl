import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';
import routes from '../../routes';

import styles from './NavBar.module.scss';

const NavBar: React.FC = () => {
  const { t } = useTranslation('layout');
  const location = useLocation();

  return (
    <nav className={styles.navBar} role="navigation">
      <ul className={styles.navBarList}>
        {routes
          .filter((config) => config.path.split('/').length - 1 === 1) // Only allow top-level domains
          .map(({ path, pageKey }, index) => (
            <li key={index} className={styles.navBarItem}>
              <NavLink
                to={path}
                className={({ isActive }) => {
                  return [
                    styles.navBarLink,
                    location.pathname === path
                      ? styles.activeRoute
                      : isActive
                        ? styles.activeSubRoute
                        : '',
                  ]
                    .filter(Boolean)
                    .join(' ');
                }}
              >
                <span>{t(`navbar.${pageKey}`)}</span>
              </NavLink>
            </li>
          ))}
        <li className={styles.navBarDivider}></li>
        <li className={styles.navBarItem}>
          <span>
            <LanguageSwitcher />
          </span>
        </li>
        <li className={styles.navBarItem}>
          <span>
            <ThemeSwitcher />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
