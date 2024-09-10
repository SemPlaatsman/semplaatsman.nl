import React from 'react';
import { useTranslation } from 'react-i18next';

import IconBox from '../../IconBox';
import { contactsListIconMap } from '../../../config/assetMaps/sidebarMaps';

import styles from './ContactsList.module.scss';
import Contact from './Contact';

const ContactsList: React.FC = () => {
  const { t } = useTranslation('layout');
  const contacts: Record<string, Contact> = t('sidebar.contacts', { returnObjects: true });

  return (
    <ul className={styles.contactsList}>
      {Object.entries(contacts).map(([key, contact]) => {
        const IconComponent = contactsListIconMap[key as keyof typeof contactsListIconMap];
        return (
          <li key={key} className={styles.contactItem}>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.ariaLabel}
            >
              <IconBox>
                <IconComponent />
              </IconBox>
            </a>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>{contact.title}</p>
              <a
                href={contact.link}
                target="_blank"
                className={styles.contactLink}
                rel="noopener noreferrer"
                aria-label={contact.ariaLabel}
              >
                {contact.handle}
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
