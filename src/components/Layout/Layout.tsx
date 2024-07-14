import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return <div className={`${styles.layout} ${theme}-theme`}>{children}</div>;
};

export default Layout;
