import React from 'react';
import PageContent from '../../components/PageContent';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.scss';
import MapBox from './MapBox';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <PageContent title={t('title')} className={styles.contact} titleClassName={styles.contactTitle}>
      <MapBox />
      <ContactForm />
    </PageContent>
  );
};

export default Contact;
