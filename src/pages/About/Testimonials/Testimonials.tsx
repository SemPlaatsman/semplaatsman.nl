import React from 'react';
import { useTranslation } from 'react-i18next';

import AvatarMarcDierikx from '../../../assets/avatars/marc-dierikx.png';

import styles from './Testimonials.module.scss';
import TestimonialItem from './TestimonialItem';
import Testimonial from './Testimonial';

const imgSrcMap = {
  marcDierikx: AvatarMarcDierikx,
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation('about');
  const testimonials: Record<string, Testimonial> = t('testimonials.testimonials', {
    returnObjects: true,
  });

  return (
    <section className={styles.testimonials}>
      <h3 className={`h3 ${styles.testimonialsTitle}`}>{t('testimonials.title')}</h3>
      <ul className={`${styles.testimonialsList} has-scrollbar`}>
        {Object.entries(testimonials).map(([key, testimonial]) => (
          <TestimonialItem
            key={key}
            data={testimonial}
            imgSrc={imgSrcMap[key as keyof typeof imgSrcMap]}
          />
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
