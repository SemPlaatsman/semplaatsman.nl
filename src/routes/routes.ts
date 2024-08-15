import { FC, LazyExoticComponent, lazy } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteConfig {
  path: string;
  element: LazyExoticComponent<FC>;
  pageKey: string; // Key for the i18n label, which is used to construct the needed route label and page title
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: lazy(() => import('../pages/About')),
    pageKey: 'about',
  },
  {
    path: '/resume',
    element: lazy(() => import('../pages/Resume')),
    pageKey: 'resume',
  },
  {
    path: '/projects',
    element: lazy(() => import('../pages/Projects')),
    pageKey: 'projects',
  },
  {
    path: '/contact',
    element: lazy(() => import('../pages/Contact')),
    pageKey: 'contact',
  },
];

export const getCurrentRouteConfig = (pathname?: string): RouteConfig | undefined => {
  const location = useLocation();
  const currentPathname = pathname || location.pathname;
  return routes.find((route) => route.path === currentPathname);
};

export default routes;
