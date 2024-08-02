import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Testimonials.module.scss';
import TestimonialItem from './TestimonialItem';
import Testimonial from './Testimonial';
import Avatar from '../../../assets/avatar-1.png';

const imgSrcMap = {
  danielLewis: Avatar,
  jessicaMiller: Avatar,
  emilyEvans: Avatar,
  henryWilliam: Avatar,
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation('about');
  const testimonials = t('testimonials.testimonials', { returnObjects: true }) as Record<
    string,
    Testimonial
  >;

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
