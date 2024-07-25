import { FC } from 'react';

// Since this is a small project, lazy loading is overkill. This might be added in the future, when it is needed/
import About from '../pages/About/About';
import Resume from '../pages/Resume/Resume';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';

interface RouteConfig {
  path: string;
  element: FC;
  labelKey: string; // Key for the i18n label
}

export const routes: RouteConfig[] = [
  { path: '/', element: About, labelKey: 'navbar.about' },
  { path: '/resume', element: Resume, labelKey: 'navbar.resume' },
  { path: '/portfolio', element: Portfolio, labelKey: 'navbar.portfolio' },
  { path: '/contact', element: Contact, labelKey: 'navbar.contact' },
];
