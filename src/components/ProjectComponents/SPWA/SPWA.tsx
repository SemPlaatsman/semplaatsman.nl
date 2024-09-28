import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import projectConfig from './projectConfig';
import styles from './SPWA.module.scss';

const SPWA: React.FC = () => {
  const { t } = useTranslation(`projects/${projectConfig.localeKey}`);

  const overviewDescription: string[] = t('overview.description', { returnObjects: true });
  const challengeItems: string[] = t('challenge.items', { returnObjects: true });
  const solutionSteps: string[] = t('solution.steps', { returnObjects: true });

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

      <h4 className={`h4`}>{t('results.title')}</h4>
      <p>
        <Trans>{t('results.description')}</Trans>
      </p>

      <h4 className={`h4`}>{t('personalDevelopment.title')}</h4>
      <p>
        <Trans>{t('personalDevelopment.description')}</Trans>
      </p>

      <h4 className={`h4`}>{t('futurePerspective.title')}</h4>
      <p>
        <Trans>{t('futurePerspective.description')}</Trans>
      </p>
    </div>
  );
};

// Ignore ESLint rule for exports, is most likely a false positive
// See: https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main?tab=readme-ov-file#limitations
// And: https://stackoverflow.com/questions/77365777/how-to-avoid-eslint-warning-in-react-fast-refresh-only-works-when-a-file-only-e
// eslint-disable-next-line react-refresh/only-export-components
export default SPWA;
