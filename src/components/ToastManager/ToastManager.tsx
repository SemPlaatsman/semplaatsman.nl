import React, { useState, useEffect } from 'react';
import { Toaster, ToastPosition } from 'react-hot-toast';
import styles from './ToastManager.module.scss';

export const ToastManager: React.FC = () => {
  const [position, setPosition] = useState<ToastPosition>('top-center');

  useEffect(() => {
    const handleResize = () => {
      setPosition(window.innerWidth >= 1024 ? 'bottom-right' : 'top-right');
    };

    handleResize(); // Set initial position
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Toaster
      position={position}
      toastOptions={{
        className: styles.toast,
        duration: 5000,
        success: {
          className: `${styles.toast} ${styles.successToast}`,
        },
        error: {
          className: `${styles.toast} ${styles.errorToast}`,
        },
      }}
    />
  );
};

export default ToastManager;
