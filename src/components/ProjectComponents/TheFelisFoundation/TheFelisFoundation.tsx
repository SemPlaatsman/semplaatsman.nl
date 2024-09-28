import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import projectConfig from './projectConfig';
import styles from './TheFelisFoundation.module.scss';

const TheFelisFoundation: React.FC = () => {
  const { t } = useTranslation(`projects/${projectConfig.localeKey}`);

  const overviewDescription: string[] = t('overview.description', { returnObjects: true });
  const technicalFeatures: string[] = t('technicalImplementation.features', {
    returnObjects: true,
  });
  const keyFeatures: string[] = t('keyFeatures.list', { returnObjects: true });

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

      <h4 className={`h4`}>{t('architecture.title')}</h4>
      <p>
        <Trans>{t('architecture.description')}</Trans>
      </p>

      <h4 className={`h4`}>{t('results.title')}</h4>
      <p>
        <Trans>{t('results.description')}</Trans>
      </p>
    </div>
  );
};

export default TheFelisFoundation;
