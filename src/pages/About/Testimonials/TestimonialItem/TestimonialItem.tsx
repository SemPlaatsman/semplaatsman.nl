import React, { useState } from 'react';

import Modal from '../../../../components/Modal';
import QuoteIcon from '../../../../assets/icon-quote.svg';
import Testimonial from '../Testimonial';
import i18n from '../../../../i18n';

import styles from './TestimonialItem.module.scss';

interface TestimonialItemProps {
  testimonial: Testimonial;
  imgSrc: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial, imgSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <li className={styles.testimonialsItem}>
      <div
        className={styles.testimonialsContentCard}
        onClick={openModal}
        onKeyDown={(e) => e.key === 'Enter' && openModal()}
        tabIndex={0}
        role="button"
      >
        <figure className={styles.testimonialsAvatarBox}>
          <img src={imgSrc} alt={testimonial.avatarAlt} width="60" />
        </figure>
        <h4 className={`h4 ${styles.testimonialsItemTitle}`}>{testimonial.name}</h4>
        <div className={styles.testimonialsText}>
          {testimonial.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.testimonialsModalImgWrapper}>
          <figure className={styles.testimonialsModalAvatarBox}>
            <img src={imgSrc} alt={testimonial.avatarAlt} width="80" />
          </figure>
          <img src={QuoteIcon} alt="quote icon" />
        </div>
        <div className={styles.testimonialsModalContent}>
          <div className={styles.testimonialsModalTextContent}>
            <h3 className={`h3 ${styles.testimonialsModalTitle}`}>{testimonial.name}</h3>
            <p className={styles.testimonialsModalPosition}>{testimonial.position}</p>
            <time dateTime={testimonial.dateISO}>
              {Intl.DateTimeFormat(i18n.language).format(new Date(testimonial.dateISO))}
            </time>
            <div>
              {testimonial.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </li>
  );
};

export default TestimonialItem;
