import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguage, IoChevronDown } from 'react-icons/io5';
import Dropdown from '../Dropdown';
import styles from './LanguageSwitcher.module.scss';
import { languages } from '../../i18n/languages';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const trigger = (
    <button className={styles.languageButton}>
      <IoLanguage className={styles.languageIcon} />
      <span className={styles.languageCode}>{i18n.language.toUpperCase()}</span>
      <IoChevronDown className={styles.languageIcon} />
    </button>
  );

  return (
    <Dropdown trigger={trigger}>
      <ul className={styles.languageList}>
        {Object.values(languages).map((lang) => (
          <li key={lang.code}>
            <button
              onClick={() => changeLanguage(lang.code)}
              className={i18n.language === lang.code ? styles.active : ''}
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
