import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import PageContent from '../../components/PageContent';

import styles from './About.module.scss';
import Interests from './Interests';
import Testimonials from './Testimonials';

const About: React.FC = () => {
  const { t } = useTranslation('about');
  const description: string[] = t('description', { returnObjects: true });

  return (
    <PageContent className={styles.about} titleClassName={styles.aboutTitle}>
      <section className={styles.aboutText}>
        {description.map((paragraph, index) => (
          <p key={index}>
            <Trans>{paragraph}</Trans>
          </p>
        ))}
      </section>
      <Interests />
      <Testimonials />
    </PageContent>
  );
};

export default About;
