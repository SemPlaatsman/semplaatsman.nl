import React from 'react';
import PageContent from '../../components/PageContent';
import styles from './Contact.module.scss';
import MapBox from './MapBox';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <PageContent className={styles.contact} titleClassName={styles.contactTitle}>
      <MapBox />
      <ContactForm />
    </PageContent>
  );
};

export default Contact;
