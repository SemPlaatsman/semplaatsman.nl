# SEO Component (SEO.tsx)

```tsx
// src/components/SEO.tsx
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = [], 
  canonicalUrl,
  ogImage
}) => {
  const siteUrl = 'https://yourportfolio.com'; // Replace with your actual URL
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default SEO;
```

Note: The name "SEO" is clear and widely used, but you might consider "MetaTags" or "PageMeta" if you want to be more explicit about its function.

# Theme Context (ThemeContext.tsx)

```tsx
// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

# Main Application File (main.tsx)

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import './i18n'; // Assuming you have set up i18n as discussed earlier
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
```

# App Component (App.tsx)

```tsx
// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from './contexts/ThemeContext';
import SEO from './components/SEO';
import LanguageSwitcher from './components/LanguageSwitcher'; // Assuming you have this component
import ThemeSwitcher from './components/ThemeSwitcher'; // Assuming you have this component

const App: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <SEO 
        title={t('app.title')}
        description={t('app.description')}
        keywords={[t('app.keyword1'), t('app.keyword2'), t('app.keyword3')]}
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

const Home: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t('home.welcome')}</h1>;
};

export default App;
```

# Language Switcher Component (LanguageSwitcher.tsx)

```tsx
// src/components/LanguageSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('nl')}>NL</button>
    </div>
  );
};

export default LanguageSwitcher;
```

# Theme Switcher Component (ThemeSwitcher.tsx)

```tsx
// src/components/ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
```
