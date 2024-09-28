import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import projectConfig from './projectConfig';
import styles from './SPSSO.module.scss';

const SPSSO: React.FC = () => {
  const { t } = useTranslation(`projects/${projectConfig.localeKey}`);

  const overviewDescription: string[] = t('overview.description', { returnObjects: true });
  const technicalFeatures: string[] = t('technicalImplementation.features', {
    returnObjects: true,
  });
  const keyFeatures: string[] = t('keyFeatures.list', { returnObjects: true });
  const challenges: string[] = t('challenges.list', { returnObjects: true });

  return (
    <div className={styles.projectContainer}>
      <h4 className={`h4`}>{t('overview.title')}</h4>
      {overviewDescription.map((paragraph: string, index: number) => (
        <p key={index}>
          <Trans>{paragraph}</Trans>
        </p>
      ))}

      <h4 className={`h4`}>{t('technicalImplementation.title')}</h4>
      <p>
        <Trans>{t('technicalImplementation.description')}</Trans>
      </p>
      <ul>
        {technicalFeatures.map((feature: string, index: number) => (
          <li key={index}>
            <Trans>{feature}</Trans>
          </li>
        ))}
      </ul>

      <h4 className={`h4`}>{t('keyFeatures.title')}</h4>
      <p>
        <Trans>{t('keyFeatures.description')}</Trans>
      </p>
      <ul>
        {keyFeatures.map((feature: string, index: number) => (
          <li key={index}>
            <Trans>{feature}</Trans>
          </li>
        ))}
      </ul>

      <h4 className={`h4`}>{t('challenges.title')}</h4>
      <p>
        <Trans>{t('challenges.description')}</Trans>
      </p>
      <ul>
        {challenges.map((challenge: string, index: number) => (
          <li key={index}>
            <Trans>{challenge}</Trans>
          </li>
        ))}
      </ul>

      <h4 className={`h4`}>{t('results.title')}</h4>
      <p>
        <Trans>{t('results.description')}</Trans>
      </p>
    </div>
  );
};

// Ignore ESLint rule for exports, is most likely a false positive
// See: https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main?tab=readme-ov-file#limitations
// And: https://stackoverflow.com/questions/77365777/how-to-avoid-eslint-warning-in-react-fast-refresh-only-works-when-a-file-only-e
// eslint-disable-next-line react-refresh/only-export-components
export default SPSSO;
