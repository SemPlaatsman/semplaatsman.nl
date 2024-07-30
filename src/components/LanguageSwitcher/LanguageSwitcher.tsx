import React from 'react';
import { useTranslation } from 'react-i18next';
import { Language, ChevronDown } from 'react-ionicons';
import Dropdown from '../Dropdown';
import styles from './LanguageSwitcher.module.scss';
import { languages } from '../../i18n';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const trigger = (
    <button className={styles.languageButton}>
      <Language color={'#00000'} height="20px" width="20px" />
      <span className={styles.languageCode}>{i18n.language.toUpperCase()}</span>
      <ChevronDown color={'#00000'} height="15px" width="15px" />
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
