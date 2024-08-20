import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import DOMPurify from 'dompurify';

import RateLimiter from '../utils/rateLimiter';

// 5 requests per hour (3600000 ms)
const emailRateLimiter = RateLimiter.getInstance('emailSender', 5, 3600000);

export const useSendEmail = () => {
  const { t } = useTranslation('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const userIdentifier = formData.get('email') as string; // Using email as identifier

    if (emailRateLimiter.isRateLimited(userIdentifier)) {
      toast.error(t('form.rateLimitError'));
      return;
    }

    setIsSubmitting(true);
    // Set loading toast to 30 seconds
    const submittingToast = toast.loading(t('form.submitting'), { duration: 30000 });

    try {
      // Sanitize and convert form data to a record
      const sanitizedData: Record<string, string> = {};
      formData.forEach((value, key) => {
        sanitizedData[key] = DOMPurify.sanitize(value as string);
      });

      // Send email
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        sanitizedData,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
        }
      );

      if (result.text === 'OK') {
        // Replace loading toast with success toast and reset duration to 3 seconds
        toast.success(t('form.submitSuccess'), { id: submittingToast, duration: 3000 });
        form.reset();
      } else {
        throw new Error('Unexpected response');
      }
    } catch (error) {
      console.error('Submission email error:', error);
      // Replace loading toast with success toast and reset duration to 3 seconds
      toast.error(t('form.submitError'), { id: submittingToast, duration: 3000 });
      // If there's an error, we don't count it towards the rate limit
      emailRateLimiter.clear(userIdentifier);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendEmail, isSubmitting };
};
