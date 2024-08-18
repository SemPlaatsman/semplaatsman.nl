import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContactForm.module.scss';
import { IoPaperPlane } from 'react-icons/io5';
import { useSendEmail } from '../../../hooks/useSendEmail';

const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact');
  const { sendEmail, isSubmitting } = useSendEmail();

  const getFieldProps = (fieldName: string) => ({
    name: fieldName,
    className: styles.formInput,
    placeholder: t(`form.fields.${fieldName}.placeholder`),
    'aria-label': t(`form.fields.${fieldName}.title`),
    required: true,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmail(e.currentTarget);
  };

  return (
    <section className={styles.contactForm}>
      <h3 className={`h3 ${styles.formTitle}`}>{t('title')}</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input type="text" {...getFieldProps('fullname')} maxLength={100} autoComplete="name" />
          <input type="email" {...getFieldProps('email')} maxLength={100} autoComplete="email" />
        </div>
        <textarea {...getFieldProps('message')} maxLength={1000}></textarea>
        <button className={styles.formBtn} type="submit" disabled={isSubmitting}>
          <IoPaperPlane />
          <span>{isSubmitting ? t('form.submitting') : t('form.submit')}</span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
