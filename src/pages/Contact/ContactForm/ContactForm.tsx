import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContactForm.module.scss';
import { PaperPlane } from 'react-ionicons';

const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact');

  /**
   * @param  {string} fieldName - Name of the field you want to get props for (should be present in the i18next locale file)
   * @returns {Object} - Props for the input field (name, className, placeholder, aria-label, required)
   */
  const getFieldProps = (fieldName: string) => ({
    name: fieldName,
    className: 'form-input',
    placeholder: t(`form.fields.${fieldName}.placeholder`),
    'aria-label': t(`form.fields.${fieldName}.title`),
    required: true,
  });

  return (
    <section className={styles.contactForm}>
      <h3 className={`h3 ${styles.formTitle}`}>{t('title')}</h3>
      <form action="">
        <div>
          <input type="text" {...getFieldProps('fullname')} />
          <input type="email" {...getFieldProps('email')} />
        </div>
        <textarea {...getFieldProps('message')}></textarea>
        <button className={styles.formBtn} type="submit">
          <PaperPlane />
          <span>{t('form.submit')}</span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
