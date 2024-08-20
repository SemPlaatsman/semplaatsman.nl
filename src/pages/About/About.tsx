import React from 'react';
import { useTranslation } from 'react-i18next';

import PageContent from '../../components/PageContent';

import styles from './About.module.scss';
import Interests from './Interests';
import Testimonials from './Testimonials';

const About: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <PageContent className={styles.about} titleClassName={styles.aboutTitle}>
      <section className={styles.aboutText}>
        {(t('description', { returnObjects: true })).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>
      <Interests />
      <Testimonials />
    </PageContent>
  );
};

export default About;
