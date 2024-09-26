import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import projectConfig from './projectConfig';

const WhoHasBeenCalling: React.FC = () => {
  const { t } = useTranslation(`projects/${projectConfig.localeKey}`);

  const overviewDescription: string[] = t('overview.description', { returnObjects: true });
  const solutionSteps: string[] = t('solution.steps', { returnObjects: true });
  const technicalDetailsItems: string[] = t('technicalDetails.items', { returnObjects: true });
  const resultsItems: string[] = t('results.items', { returnObjects: true });

  return (
    <div>
      <h4 className={`h4`}>{t('overview.title')}</h4>
      {overviewDescription.map((paragraph: string, index: number) => (
        <p key={index}>
          <Trans>{paragraph}</Trans>
        </p>
      ))}

      <h4 className={`h4`}>{t('challenge.title')}</h4>
      <p>
        <Trans>{t('challenge.description')}</Trans>
      </p>

      <h4 className={`h4`}>{t('solution.title')}</h4>
      <p>
        <Trans>{t('solution.description')}</Trans>
      </p>
      <ol type="1">
        {solutionSteps.map((step: string, index: number) => (
          <li key={index}>
            <Trans>{step}</Trans>
          </li>
        ))}
      </ol>

      <h4 className={`h4`}>{t('technicalDetails.title')}</h4>
      <ul>
        {technicalDetailsItems.map((item: string, index: number) => (
          <li key={index}>
            <Trans>{item}</Trans>
          </li>
        ))}
      </ul>

      <h4 className={`h4`}>{t('results.title')}</h4>
      <ul>
        {resultsItems.map((item: string, index: number) => (
          <li key={index}>
            <Trans>{item}</Trans>
          </li>
        ))}
      </ul>
      <p>
        <Trans>{t('results.conclusion')}</Trans>
      </p>

      <h4 className={`h4`}>{t('future.title')}</h4>
      <p>
        <Trans>{t('future.description')}</Trans>
      </p>
    </div>
  );
};

export default WhoHasBeenCalling;
