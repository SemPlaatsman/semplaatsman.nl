import React from 'react';
import styles from './NavBar.module.scss';
import LanguageSwitcher from '../LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar: React.FC = () => {
  const { t } = useTranslation('layout');

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarList}>
        {routes.map(({ path, pageKey }, index) => (
          <li key={index} className={styles.navBarItem}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? `${styles.navBarLink} ${styles.active}` : styles.navBarLink
              }
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
