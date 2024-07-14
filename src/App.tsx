import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout/Layout';
import SEO from './components/SEO/SEO';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
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
      <footer>{/* Add footer content */}</footer>
    </Layout>
  );
};

export default App;
