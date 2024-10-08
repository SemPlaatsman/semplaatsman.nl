import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoChevronDown } from 'react-icons/io5';

import styles from './SidebarInfo.module.scss';

interface SidebarInfoProps {
  onExpandToggle: (isExpanded: boolean) => void;
}

const SidebarInfo: React.FC<SidebarInfoProps> = ({ onExpandToggle }) => {
  const { t } = useTranslation('layout');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onExpandToggle(newExpandedState);
  };

  return (
    <div className={styles.sidebarInfo}>
      <figure className={styles.avatarBox}>
        <img src={'/avatar.webp'} alt={t('sidebar.avatarAlt')} width="80" />
      </figure>
      <div className={styles.infoContent}>
        <h1 className={`h1 ${styles.name}`}>{t('sidebar.name')}</h1>
        <p className={styles.title}>{t('sidebar.title')}</p>
      </div>
      <button className={styles.infoMoreBtn} onClick={handleExpandToggle}>
        <span className={styles.infoMoreText}>
          {isExpanded ? t('sidebar.hideContacts') : t('sidebar.showContacts')}
        </span>
        <IoChevronDown className={`${styles.infoMoreIcon}`} />
      </button>
    </div>
  );
};

export default SidebarInfo;
