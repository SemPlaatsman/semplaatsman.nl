import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoPaperPlane } from 'react-icons/io5';

import { useSendEmail } from '../../../hooks/useSendEmail';
import config from '../../../config';

import styles from './ContactForm.module.scss';
import ContactFormData from './ContactFormData';

const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact');
  const { sendEmail, isSubmitting } = useSendEmail();
  const [isFormValid, setIsFormValid] = useState(false);

  const getFieldProps = (fieldName: keyof ContactFormData) => ({
    name: fieldName,
    className: styles.formInput,
    placeholder: t(`form.fields.${fieldName}.placeholder`),
    'aria-label': t(`form.fields.${fieldName}.title`),
    required: true,
    onChange: handleInputChange,
    maxLength: config.contactForm.maxLengths[fieldName],
  });

  const handleInputChange = () => {
    const form = document.querySelector('form');
    if (form) {
      setIsFormValid(form.checkValidity());
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void sendEmail(e.currentTarget);
  };

  useEffect(() => {
    // Initial form validation check
    handleInputChange();
  }, []);

  return (
    <section className={styles.contactForm}>
      <h3 className={`h3 ${styles.formTitle}`}>{t('title')}</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input type="text" {...getFieldProps('name')} autoComplete="name" />
          <input type="email" {...getFieldProps('email')} autoComplete="email" />
        </div>
        <textarea {...getFieldProps('message')}></textarea>
        <button className={styles.formBtn} type="submit" disabled={isSubmitting || !isFormValid}>
          <IoPaperPlane />
          <span>{isSubmitting ? t('form.submitting') : t('form.submit')}</span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
