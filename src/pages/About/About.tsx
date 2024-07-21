import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

const About: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <article className={styles.about}>
      <header>
        <h2 className={styles.title}>{t('title')}</h2>
      </header>
      <section className={styles.content}>
        {(t('description', { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
    </article>
  );
};

export default About;
