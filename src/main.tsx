import React from 'react';
import './i18n';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles/index.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './providers/ThemeProvider';
import './initEmailJS';
import App from './App.tsx';

// Import axe-core
import axe from '@axe-core/react';

// Only run axe in non-production environments
if (import.meta.env.DEV) {
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
