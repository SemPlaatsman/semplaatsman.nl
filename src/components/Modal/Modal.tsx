import React from 'react';
import styles from './Modal.module.scss';
import { CloseOutline } from 'react-ionicons';

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ className, isOpen, onClose, children }) => {
  return (
    <div className={`${styles.modalContainer} ${isOpen ? styles.active : ''}`}>
      <div className={`${styles.overlay} ${isOpen ? styles.active : ''}`} onClick={onClose}></div>
      <section className={`${styles.modal} ${className || ''}`}>
        <button className={styles.modalCloseBtn} onClick={onClose}>
          <CloseOutline />
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
