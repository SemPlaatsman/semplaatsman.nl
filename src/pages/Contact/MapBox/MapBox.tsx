import React from 'react';
import styles from './MapBox.module.scss';
import { useTranslation } from 'react-i18next';

const MapBox: React.FC = () => {
  const { t } = useTranslation('contact');
  const srcUrl =
    'https://www.openstreetmap.org/export/embed.html?bbox=4.520702362060548%2C52.333241186520006%2C4.747295379638673%2C52.43550196931334&amp;layer=mapnik';

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
