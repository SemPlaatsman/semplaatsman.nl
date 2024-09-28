import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import projectConfig from './projectConfig';
import styles from './CodeGeneration.module.scss';

const CodeGeneration: React.FC = () => {
  const { t } = useTranslation(`projects/${projectConfig.localeKey}`);

  const overviewDescription: string[] = t('overview.description', { returnObjects: true });
  const technicalFeatures: string[] = t('technicalImplementation.features', {
    returnObjects: true,
  });
  const apiEndpoints: string[] = t('apiEndpoints.list', { returnObjects: true });

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

      <h4 className={`h4`}>{t('apiEndpoints.title')}</h4>
      <p>
        <Trans>{t('apiEndpoints.description')}</Trans>
      </p>
      <ul>
        {apiEndpoints.map((endpoint: string, index: number) => (
          <li key={index}>
            <Trans>{endpoint}</Trans>
          </li>
        ))}
      </ul>

      <h4 className={`h4`}>{t('keyFeatures.title')}</h4>
      <p>
        <Trans>{t('keyFeatures.description')}</Trans>
      </p>
      <p>
        <Trans>{t('keyFeatures.dynamicFiltering')}</Trans>
      </p>

      <h4 className={`h4`}>{t('results.title')}</h4>
      <p>
        <Trans>{t('results.description')}</Trans>
      </p>
    </div>
  );
};

export default CodeGeneration;
