import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from './contexts/ThemeContext';
import SEO from './components/SEO';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './pages/Home';

const App: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <SEO 
        title={t('app.title')}
        description={t('app.description')}
        keywords={[t('app.keyword.1'), t('app.keyword.2'), t('app.keyword.3')]}
      />
      <header>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default App;