import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoPaperPlane } from 'react-icons/io5';
import ReCAPTCHA from 'react-google-recaptcha';
import toast from 'react-hot-toast';

import { useSendEmail } from '../../../hooks/useSendEmail';
import config from '../../../config';
import { useTheme } from '../../../hooks/useTheme';

import styles from './ContactForm.module.scss';
import ContactFormData from './ContactFormData';

const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact');
  const { theme } = useTheme();
  const { sendEmail, isSubmitting } = useSendEmail();
  const [isFormValid, setIsFormValid] = useState(false);
  // Track a key to re-render ReCAPTCHA component when the theme changes
  const [recaptchaKey, setRecaptchaKey] = useState(0);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

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
    if (recaptchaToken) {
      void sendEmail(e.currentTarget, recaptchaToken);
    } else {
      toast.error(t('contact:form.recaptchaError'));
    }
  };

  useEffect(() => {
    // Force re-render of ReCAPTCHA when theme changes
    setRecaptchaKey((prevRecaptchaKey) => prevRecaptchaKey + 1);
  }, [theme]);

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
        {/* Honeypot field */}
        <input
          type="text"
          name="phone"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
        <div className={styles.formFooter}>
          <div className={styles.recaptchaWrapper}>
            <ReCAPTCHA
              key={recaptchaKey}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY as string}
              onChange={setRecaptchaToken}
              theme={theme}
            />
          </div>
          <button
            className={styles.formBtn}
            type="submit"
            disabled={isSubmitting || !isFormValid || !recaptchaToken}
          >
            <IoPaperPlane />
            <span>{isSubmitting ? t('form.submitting') : t('form.submit')}</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
