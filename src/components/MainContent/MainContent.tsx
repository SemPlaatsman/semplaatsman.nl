import React from 'react';

import NavBar from '../NavBar';

import styles from './MainContent.module.scss';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className={styles.mainContent} role="main">
      <NavBar />
      {children}
    </main>
  );
};

export default MainContent;
