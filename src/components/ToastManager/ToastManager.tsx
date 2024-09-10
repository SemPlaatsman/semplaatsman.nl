import React, { useState, useEffect } from 'react';
import { Toaster, ToastPosition } from 'react-hot-toast';

import config from '../../config';

import styles from './ToastManager.module.scss';

export const ToastManager: React.FC = () => {
  const [position, setPosition] = useState<ToastPosition>('top-center');

  useEffect(() => {
    const handleResize = () => {
      setPosition(window.innerWidth >= 1024 ? 'bottom-right' : 'top-center'); // 1024px is the breakpoint for the desktop view
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
        duration: config.ui.toasts.defaultDuration,
        error: {
          duration: config.ui.toasts.errorDuration,
        },
        loading: {
          duration: config.ui.toasts.loadingDuration,
        },
      }}
    />
  );
};

export default ToastManager;
