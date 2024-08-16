import React from 'react';
import styles from './SocialList.module.scss';
import { useTranslation } from 'react-i18next';
import { IoLogoNpm, IoLogoStackoverflow } from 'react-icons/io5';

const iconMap = {
  npm: IoLogoNpm,
  stackOverflow: IoLogoStackoverflow,
};

const SocialList: React.FC = () => {
  const { t } = useTranslation('layout');
  const socials = t('sidebar.socials', { returnObjects: true });

  return (
    <ul className={styles.socialList}>
      {Object.entries(socials).map(([key, social]) => {
        const IconComponent = iconMap[key as keyof typeof iconMap];
        return (
          <li key={key} className={styles.socialItem}>
            <a href={social.link} className={styles.socialLink}>
              <IconComponent />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
