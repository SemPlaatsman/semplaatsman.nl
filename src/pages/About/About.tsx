import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';
import PageContent from '../../components/PageContent';
import Interests from './Interests';
import Testimonials from './Testimonials';

const About: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <PageContent title={t('title')} className={styles.about} titleClassName={styles.aboutTitle}>
      <section className={styles.aboutText}>
        {(t('description', { returnObjects: true }) as string[]).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
      <Interests />
      <Testimonials />
    </PageContent>
  );
};

export default About;
