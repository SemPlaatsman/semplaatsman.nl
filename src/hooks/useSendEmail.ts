import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import DOMPurify from 'dompurify';

import RateLimiter from '../utils/rateLimiter';

// 5 requests per hour (3600000 ms)
const emailRateLimiter = RateLimiter.getInstance('emailSender', 5, 3600000);

export const useSendEmail = () => {
  const { t } = useTranslation(['contact', 'email']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const userIdentifier = formData.get('email') as string; // Using email as identifier

    if (emailRateLimiter.isRateLimited(userIdentifier)) {
      toast.error(t('contact:form.rateLimitError'));
      return;
    }

    setIsSubmitting(true);
    // Set loading toast to 30 seconds
    const submittingToast = toast.loading(t('contact:form.submitting'), { duration: 30000 });

    try {
      // Sanitize and convert form data to a record
      const sanitizedData: Record<string, string> = {};
      formData.forEach((value, key) => {
        sanitizedData[key] = DOMPurify.sanitize(value as string);
      });

      // Construct email content
      const emailContent = {
        ...sanitizedData,
        submission_subject: t('email:submission.subject', { name: sanitizedData.name }),
        submission_received: t('email:submission.received', {
          name: sanitizedData.name,
        }),
        submission_reachabilityMessage: t('email:submission.reachabilityMessage', {
          email: sanitizedData.email,
        }),
        autoReply_subject: t('email:autoReply.subject', { config_name: 'Sem Plaatsman' }),
        autoReply_greetings: t('email:autoReply.greetings', { name: sanitizedData.name }),
        autoReply_appreciationMessage: t('email:autoReply.appreciationMessage'),
        autoReply_received: t('email:autoReply.received'),
        autoReply_responsePromise: t('email:autoReply.responsePromise'),
        autoReply_designation: t('email:autoReply.designation'),
        common_regards: t('email:common.regards'),
        config_senderName: 'Sem Plaatsman',
        config_domain: 'semplaatsman.nl',
      };

      // Send email
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        emailContent,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
        }
      );

      if (result.text === 'OK') {
        // Replace loading toast with success toast and reset duration to 3 seconds
        toast.success(t('contact:form.submitSuccess'), { id: submittingToast, duration: 3000 });
        form.reset();
      } else {
        throw new Error('Unexpected response');
      }
    } catch (error) {
      console.error('Submission email error:', error);
      // Replace loading toast with success toast and reset duration to 3 seconds
      toast.error(t('contact:form.submitError'), { id: submittingToast, duration: 3000 });
      // If there's an error, we don't count it towards the rate limit
      emailRateLimiter.clear(userIdentifier);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendEmail, isSubmitting };
};
