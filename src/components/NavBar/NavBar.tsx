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
        {routes.map(({ path, labelKey }, index) => (
          <li key={index} className={styles.navBarItem}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? `${styles.navBarLink} ${styles.navBarLinkActive}` : styles.navBarLink
              }
            >
              <span>{t(labelKey)}</span>
            </NavLink>
          </li>
        ))}
        <li className={styles.navBarItem}>
          <LanguageSwitcher />
        </li>
        <li className={styles.navBarItem}>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
