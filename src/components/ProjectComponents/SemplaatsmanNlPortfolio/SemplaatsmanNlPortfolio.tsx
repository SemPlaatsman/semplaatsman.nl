import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import projectConfig from './projectConfig';
import styles from './SemplaatsmanNlPortfolio.module.scss';

const SemplaatsmanNlPortfolio: React.FC = () => {
  const { t } = useTranslation(`projects/${projectConfig.localeKey}`);

  const overviewDescription: string[] = t('overview.description', { returnObjects: true });
  const technicalImplementationItems: string[] = t('technicalImplementation.items', {
    returnObjects: true,
  });
  const developmentJourneySteps: string[] = t('developmentJourney.steps', { returnObjects: true });

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
        {technicalImplementationItems.map((item: string, index: number) => (
          <li key={index}>
            <Trans>{item}</Trans>
          </li>
        ))}
      </ul>

      <h4 className={`h4`}>{t('developmentJourney.title')}</h4>
      <p>
        <Trans>{t('developmentJourney.description')}</Trans>
      </p>
      <ol>
        {developmentJourneySteps.map((step: string, index: number) => (
          <li key={index}>
            <Trans>{step}</Trans>
          </li>
        ))}
      </ol>

      <h4 className={`h4`}>{t('openSourceContribution.title')}</h4>
      <p>
        <Trans>{t('openSourceContribution.description')}</Trans>
      </p>

      <h4 className={`h4`}>{t('impact.title')}</h4>
      <p>
        <Trans>{t('impact.description')}</Trans>
      </p>
    </div>
  );
};

export default SemplaatsmanNlPortfolio;
