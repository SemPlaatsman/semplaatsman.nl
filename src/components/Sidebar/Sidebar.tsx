import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const { t } = useTranslation('layout');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${isExpanded ? styles.active : ''}`}>
      <div className={styles.sidebarInfo}>
        <figure className={styles.avatar}>
          <img src="/assets/images/my-avatar.png" alt={t('sidebar.avatar_alt')} width="80" />
        </figure>
        <div className={styles.infoContent}>
          <h1 className={styles.name}>{t('sidebar.name')}</h1>
          <p className={styles.title}>{t('sidebar.title')}</p>
        </div>
        <button className={styles.infoMoreBtn} onClick={() => setIsExpanded(!isExpanded)}>
          <span>{isExpanded ? t('sidebar.hide_contacts') : t('sidebar.show_contacts')}</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
