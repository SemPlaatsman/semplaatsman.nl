import { FC, LazyExoticComponent, lazy } from 'react';

interface RouteConfig {
  path: string;
  element: LazyExoticComponent<FC>;
  labelKey: string; // Key for the i18n label
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: lazy(() => import('../pages/About')),
    labelKey: 'navbar.about',
  },
  {
    path: '/resume',
    element: lazy(() => import('../pages/Resume')),
    labelKey: 'navbar.resume',
  },
  {
    path: '/projects',
    element: lazy(() => import('../pages/Projects')),
    labelKey: 'navbar.projects',
  },
  {
    path: '/contact',
    element: lazy(() => import('../pages/Contact')),
    labelKey: 'navbar.contact',
  },
];

export default routes;
