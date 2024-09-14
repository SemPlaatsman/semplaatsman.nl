import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import config from '../../config';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: config.ui.scroll.behaviour,
      });
    };
    scrollToTop();
  }, [pathname]);

  return null;
}
