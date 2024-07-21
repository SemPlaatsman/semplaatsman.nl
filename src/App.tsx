import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SEO from './components/SEO/SEO';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import About from './pages/About/About';

const App: React.FC = () => {
  return (
    <Layout>
      <SEO />
      <header>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Layout>
  );
};

export default App;
