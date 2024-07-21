import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
        EN
      </button>
      <button onClick={() => changeLanguage('nl')} disabled={i18n.language === 'nl'}>
        NL
      </button>
    </div>
  );
};

export default LanguageSwitcher;
