import React from 'react';

import NavBar from '../NavBar';

import styles from './MainContent.module.scss';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className={styles.mainContent}>
      <NavBar />
      {children}
    </div>
  );
};

export default MainContent;
