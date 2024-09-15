import React from 'react';
import { useTranslation } from 'react-i18next';

import config from '../../../config';

import styles from './MapBox.module.scss';

const MapBox: React.FC = () => {
  const { t } = useTranslation('contact');
  const srcUrl = config.owner.locationUrl;

  return (
    <section className={styles.mapBox}>
      <figure>
        <iframe
          src={srcUrl}
          width={400}
          height={300}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={t('map.title')}
        ></iframe>
      </figure>
    </section>
  );
};

export default MapBox;
