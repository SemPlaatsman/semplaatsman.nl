import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguage, IoChevronDown } from 'react-icons/io5';

import Dropdown from '../Dropdown';
import { languages } from '../../i18n/languages';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation('layout');

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  const trigger = (
    <div className={styles.languageButton} aria-label={t('navbar.languageSwitcher.ariaLabel')}>
      <IoLanguage className={styles.languageIcon} />
      <span className={styles.languageCode}>
        {new Intl.Locale(i18n.language).language.toUpperCase()}
      </span>
      <IoChevronDown className={styles.languageIcon} />
    </div>
  );

  return (
    <Dropdown trigger={trigger}>
      <ul className={styles.languageList} role="menu">
        {Object.values(languages).map((lang) => (
          <li key={lang.code} role="none">
            <button
              onClick={() => changeLanguage(lang.code)}
              className={i18n.language === lang.code ? styles.active : ''}
              role="menuitem"
            >
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};

export default LanguageSwitcher;
