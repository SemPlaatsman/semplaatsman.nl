import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <article className={styles.about}>
      <header>
        <h2 className={styles.title}>{t('about.title')}</h2>
      </header>
      <section className={styles.content}>
        <p>{t('about.description')}</p>
      </section>
    </article>
  );
};

export default About;
