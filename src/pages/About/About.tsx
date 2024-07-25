import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';
import PageContent from '../../components/PageContent/PageContent';

const About: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <PageContent title={t('title')} className={styles.about}>
      <section className={styles.content}>
        {(t('description', { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
    </PageContent>
  );
};

export default About;
