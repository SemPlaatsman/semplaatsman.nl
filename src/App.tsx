import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import PageSkeleton from './skeletons/PageSkeleton';
import routes from './routes';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          {routes.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
