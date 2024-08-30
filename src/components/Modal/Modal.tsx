import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ className = '', isOpen, onClose, children }) => {
  return (
    <div className={`${styles.modalContainer} ${isOpen ? styles.active : ''}`}>
      <div
        className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
        tabIndex={0}
        role="button"
      ></div>
      <section className={`${styles.modal} ${className}`}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          <IoCloseOutline />
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
