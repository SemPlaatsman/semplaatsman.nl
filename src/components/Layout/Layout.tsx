import React from 'react';

import Sidebar from '../Sidebar';
import MainContent from '../MainContent';
import ToastManager from '../ToastManager';
import SEO from '../SEO';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SEO />
      <ToastManager />
      <Sidebar />
      <MainContent>{children}</MainContent>
    </>
  );
};

export default Layout;
