import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import SidebarInfo from './SidebarInfo';
import Separator from '../Separator';
import ContactsList from './ContactsList';
import SocialList from './SocialList';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = (expanded: boolean) => {
    setIsExpanded(expanded);
  };

  return (
    <aside className={`${styles.sidebar} ${isExpanded ? styles.active : ''}`}>
      <SidebarInfo onExpandToggle={handleExpandToggle} />
      <div className={styles.sidebarInfoMore}>
        <Separator />
        <ContactsList />
        <Separator />
        <SocialList />
      </div>
    </aside>
  );
};

export default Sidebar;
