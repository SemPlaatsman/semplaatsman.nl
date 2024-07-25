import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';
import { ChevronDown } from 'react-ionicons';

const Sidebar: React.FC = () => {
  const { t } = useTranslation('layout');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${isExpanded ? styles.active : ''}`}>
      <div className={styles.sidebarInfo}>
        <figure className={styles.avatar}>
          <img
            src="https://media.licdn.com/dms/image/D4E03AQHI676LBbaIsw/profile-displayphoto-shrink_800_800/0/1686847959710?e=1727308800&v=beta&t=5Rcz1z05BWc-nwZXnd55pzV3MyDWJyGYv8aeQFwKzE8"
            alt={t('sidebar.avatar_alt')}
            width="80"
          />
        </figure>
        <div className={styles.infoContent}>
          <h1 className={styles.name}>{t('sidebar.name')}</h1>
          <p className={styles.title}>{t('sidebar.title')}</p>
        </div>
        <button className={styles.infoMoreBtn} onClick={() => setIsExpanded(!isExpanded)}>
          <span>{isExpanded ? t('sidebar.hide_contacts') : t('sidebar.show_contacts')}</span>
          <ChevronDown />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
