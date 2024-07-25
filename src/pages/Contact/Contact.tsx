import React from 'react';
import PageContent from '../../components/PageContent/PageContent';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact');

  return <PageContent title={t('title')}></PageContent>;
};

export default Contact;
