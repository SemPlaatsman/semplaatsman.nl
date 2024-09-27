import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import projectConfig from './projectConfig';
import styles from './TheGardenGroup.module.scss';

const TheGardenGroup: React.FC = () => {
  const { t } = useTranslation(`projects/${projectConfig.localeKey}`);

  const overviewDescription: string[] = t('overview.description', { returnObjects: true });
  const challengeItems: string[] = t('challenge.items', { returnObjects: true });
  const solutionSteps: string[] = t('solution.steps', { returnObjects: true });
  const technicalDetails: string[] = t('technicalDetails.items', { returnObjects: true });
  const contributions: string[] = t('technicalDetails.contributions', { returnObjects: true });

  return (
    <div className={styles.projectContainer}>
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
      <ol>
        {challengeItems.map((item: string, index: number) => (
          <li key={index}>
            <Trans>{item}</Trans>
          </li>
        ))}
      </ol>

      <h4 className={`h4`}>{t('solution.title')}</h4>
      <p>
        <Trans>{t('solution.description')}</Trans>
      </p>
      <ol>
        {solutionSteps.map((step: string, index: number) => (
          <li key={index}>
            <Trans>{step}</Trans>
          </li>
        ))}
      </ol>

      <h4 className={`h4`}>{t('technicalDetails.title')}</h4>
      <p>
        <Trans>{t('technicalDetails.description')}</Trans>
      </p>
      <ul>
        {technicalDetails.map((detail: string, index: number) => (
          <li key={index}>
            <Trans>{detail}</Trans>
          </li>
        ))}
      </ul>
      <p>
        <Trans>{t('technicalDetails.contributionsDescription')}</Trans>
      </p>
      <ul>
        {contributions.map((contribution: string, index: number) => (
          <li key={index}>
            <Trans>{contribution}</Trans>
          </li>
        ))}
      </ul>

      <h4 className={`h4`}>{t('results.title')}</h4>
      <p>
        <Trans>{t('results.description')}</Trans>
      </p>

      <h4 className={`h4`}>{t('personalDevelopment.title')}</h4>
      <p>
        <Trans>{t('personalDevelopment.description')}</Trans>
      </p>
    </div>
  );
};

export default TheGardenGroup;
