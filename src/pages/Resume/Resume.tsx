import React from 'react';
import PageContent from '../../components/PageContent';
import { useTranslation } from 'react-i18next';

const Resume: React.FC = () => {
  const { t } = useTranslation('resume');

  return <PageContent title={t('title')}></PageContent>;
};

export default Resume;
