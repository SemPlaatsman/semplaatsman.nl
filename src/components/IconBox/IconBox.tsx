import React from 'react';

import styles from './IconBox.module.scss';

interface IconBoxProps {
  children: React.ReactNode;
}

const IconBox: React.FC<IconBoxProps> = ({ children }) => {
  return <div className={styles.iconBox}>{children}</div>;
};

export default IconBox;
