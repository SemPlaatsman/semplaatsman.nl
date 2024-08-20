import React from 'react';
import { useTranslation } from 'react-i18next';

import IconDesign from '../../../assets/icon-design.svg';
import IconDev from '../../../assets/icon-dev.svg';
import IconApp from '../../../assets/icon-app.svg';
import IconPhoto from '../../../assets/icon-photo.svg';

import Interest from './Interest';
import styles from './Interests.module.scss';

const imgSrcMap = {
  webDesign: IconDesign,
  webDevelopment: IconDev,
  mobileApps: IconApp,
  photography: IconPhoto,
};

const Interests: React.FC = () => {
  const { t } = useTranslation('about');
  const interests: Record<string, Interest> = t('whatImDoing.interests', { returnObjects: true });

  return (
    <section className={styles.interests}>
      <h3 className={`h3 ${styles.interestsTitle}`}>{t('whatImDoing.title')}</h3>
      <ul className={styles.interestsList}>
        {Object.entries(interests).map(([key, interest]) => {
          const imgSrc = imgSrcMap[key as keyof typeof imgSrcMap];
          return (
            <li key={key} className={styles.interestsItem}>
              <div className={styles.interestsIconBox}>
                <img src={imgSrc} alt={interest.iconAlt} />
              </div>
              <div className={styles.interestsContentBox}>
                <h4 className={`h4 ${styles.interestsItemTitle}`}>{interest.title}</h4>
                <p className={styles.interestsItemText}>{interest.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Interests;
