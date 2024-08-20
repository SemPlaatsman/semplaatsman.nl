import React from 'react';
import './i18n';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles/index.scss';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import axe from '@axe-core/react';

import ThemeProvider from './providers/ThemeProvider';
import App from './App.tsx';

// Only run axe in non-production environments
if (import.meta.env.DEV) {
  void axe(React, ReactDOM, 1000);
}

// Small little easter egg
console.log(
  '%cHello there!',
  'color: #ffdb70; font-weight: bold; font-family: monospace !important; font-size: 2rem;'
);
console.log(
  `%cLike my portfolio? Check out the source code on GitHub:
  https://github.com/SemPlaatsman/semplaatsman.nl`,
  'color: #ffdb70; font-weight: bold; font-family: monospace !important; font-size: 1rem;'
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
