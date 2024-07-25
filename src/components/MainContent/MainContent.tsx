import React from 'react';
import styles from './MainContent.module.scss';
import NavBar from '../NavBar/NavBar';

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
