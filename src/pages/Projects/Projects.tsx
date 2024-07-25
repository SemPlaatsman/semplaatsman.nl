import React from 'react';
import PageContent from '../../components/PageContent/PageContent';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation('projects');

  return <PageContent title={t('title')}></PageContent>;
};

export default Projects;
