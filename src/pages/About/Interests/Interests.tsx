import React from 'react';
import { useTranslation } from 'react-i18next';

import { interestsImageMap } from '../../../config/assetMaps/aboutMaps';

import Interest from './Interest';
import styles from './Interests.module.scss';

const Interests: React.FC = () => {
  const { t } = useTranslation('about');
  const interests: Record<string, Interest> = t('whatImDoing.interests', { returnObjects: true });

  return (
    <section className={styles.interests}>
      <h3 className={`h3 ${styles.interestsTitle}`}>{t('whatImDoing.title')}</h3>
      <ul className={styles.interestsList}>
        {Object.entries(interests).map(([key, interest]) => {
          const imgSrc = interestsImageMap[key as keyof typeof interestsImageMap];
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
