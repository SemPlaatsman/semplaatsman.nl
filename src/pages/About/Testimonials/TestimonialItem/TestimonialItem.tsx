import React, { useState } from 'react';
import styles from './TestimonialItem.module.scss';
import Modal from '../../../../components/Modal';
import QuoteIcon from '../../../../assets/icon-quote.svg';
import Testimonial from '../Testimonial';

interface TestimonialItemProps {
  data: Testimonial;
  imgSrc: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ data, imgSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <li className={styles.testimonialsItem}>
      <div className={styles.testimonialsContentCard} onClick={openModal}>
        <figure className={styles.testimonialsAvatarBox}>
          <img src={imgSrc} alt={data.avatarAlt} width="60" />
        </figure>
        <h4 className={`h4 ${styles.testimonialsItemTitle}`}>{data.name}</h4>
        <div className={styles.testimonialsText}>
          <p>{data.text}</p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} className={styles.testimonialsModal}>
        <div className={styles.testimonialsModalImgWrapper}>
          <figure className={styles.testimonialsModalAvatarBox}>
            <img src={imgSrc} alt={data.avatarAlt} width="80" />
          </figure>
          <img src={QuoteIcon} alt="quote icon" />
        </div>
        <div className={styles.testimonialsModalContent}>
          <div className={styles.testimonialsModalTextContent}>
            <h3 className={`h3 ${styles.testimonialsModalTitle}`}>{data.name}</h3>
            <time dateTime={data.dateISO}>{data.date}</time>
            <div>
              <p>{data.text}</p>
            </div>
          </div>
        </div>
      </Modal>
    </li>
  );
};

export default TestimonialItem;
