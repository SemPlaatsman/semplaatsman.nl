import React from 'react';

// import projectConfig from './projectConfig';
// import styles from './SPWA.module.scss';

const SPWA: React.FC = () => {
  return (
    <div>
      <p>This is just a temporary project page, full documentation will be written soon!</p>
    </div>
  );
};

// Ignore ESLint rule for exports, is most likely a false positive
// See: https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main?tab=readme-ov-file#limitations
// And: https://stackoverflow.com/questions/77365777/how-to-avoid-eslint-warning-in-react-fast-refresh-only-works-when-a-file-only-e
// eslint-disable-next-line react-refresh/only-export-components
export default SPWA;
