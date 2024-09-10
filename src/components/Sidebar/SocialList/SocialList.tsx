import React from 'react';
import { useTranslation } from 'react-i18next';

import { socialListIconMap } from '../../../config/assetMaps/sidebarMaps';

import styles from './SocialList.module.scss';
import Social from './Social';

const SocialList: React.FC = () => {
  const { t } = useTranslation('layout');
  const socials: Record<string, Social> = t('sidebar.socials', { returnObjects: true });

  return (
    <ul className={styles.socialList}>
      {Object.entries(socials).map(([key, social]) => {
        const IconComponent = socialListIconMap[key as keyof typeof socialListIconMap];
        return (
          <li key={key} className={styles.socialItem}>
            <a
              href={social.link}
              target="_blank"
              className={styles.socialLink}
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
            >
              <IconComponent />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
