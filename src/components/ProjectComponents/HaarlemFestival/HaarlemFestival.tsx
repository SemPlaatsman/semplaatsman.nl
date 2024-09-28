import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import projectConfig from './projectConfig';
import styles from './HaarlemFestival.module.scss';

const HaarlemFestival: React.FC = () => {
  const { t } = useTranslation(`projects/${projectConfig.localeKey}`);

  const overviewDescription: string[] = t('overview.description', { returnObjects: true });
  const designProcessSteps: string[] = t('designProcess.steps', { returnObjects: true });
  const technicalFeatures: string[] = t('technicalImplementation.features', {
    returnObjects: true,
  });
  const developmentProcessSteps: string[] = t('developmentProcess.steps', { returnObjects: true });

  return (
    <div className={styles.projectContainer}>
      <h4 className={`h4`}>{t('overview.title')}</h4>
      {overviewDescription.map((paragraph: string, index: number) => (
        <p key={index}>
          <Trans>{paragraph}</Trans>
        </p>
      ))}

      <h4 className={`h4`}>{t('designProcess.title')}</h4>
      <p>
        <Trans>{t('designProcess.description')}</Trans>
      </p>
      <ul>
        {designProcessSteps.map((step: string, index: number) => (
          <li key={index}>
            <Trans>{step}</Trans>
          </li>
        ))}
      </ul>

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

      <h4 className={`h4`}>{t('developmentProcess.title')}</h4>
      <p>
        <Trans>{t('developmentProcess.description')}</Trans>
      </p>
      <ul>
        {developmentProcessSteps.map((step: string, index: number) => (
          <li key={index}>
            <Trans>{step}</Trans>
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

export default HaarlemFestival;
