import { FC } from 'react';

// Since this is a small project, lazy loading is out of the scope. This might be added in the future, when it is needed
import About from '../pages/About';
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

interface RouteConfig {
  path: string;
  element: FC;
  labelKey: string; // Key for the i18n label
}

const routes: RouteConfig[] = [
  { path: '/', element: About, labelKey: 'navbar.about' },
  { path: '/resume', element: Resume, labelKey: 'navbar.resume' },
  { path: '/projects', element: Projects, labelKey: 'navbar.projects' },
  { path: '/contact', element: Contact, labelKey: 'navbar.contact' },
];

export default routes;
