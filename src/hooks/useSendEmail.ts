import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import toast from 'react-hot-toast';
import DOMPurify from 'dompurify';

import RateLimiter from '../utils/rateLimiter';
import config from '../config';

// 5 requests per hour (3600000 ms)
const emailRateLimiter = RateLimiter.getInstance(
  'emailSender',
  config.email.rateLimit.maxRequests,
  config.email.rateLimit.timeWindow
);

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
    const submittingToast = toast.loading(t('contact:form.submitting'));

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
        autoReply_subject: t('email:autoReply.subject', { config_name: config.owner.fullName }),
        autoReply_greetings: t('email:autoReply.greetings', { name: sanitizedData.name }),
        autoReply_appreciationMessage: t('email:autoReply.appreciationMessage'),
        autoReply_received: t('email:autoReply.received'),
        autoReply_responsePromise: t('email:autoReply.responsePromise'),
        autoReply_designation: t('email:autoReply.designation'),
        common_regards: t('email:common.regards'),
        config_senderName: config.owner.fullName,
        config_domain: config.app.domain,
      };

      // Send email
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        emailContent,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
          limitRate: {
            id: userIdentifier,
            throttle: config.email.rateLimit.throttle,
          },
        }
      );

      if (result.text === 'OK') {
        // Replace loading toast with success toast and reset duration to standard
        toast.success(t('contact:form.submitSuccess'), { id: submittingToast });
        form.reset();
      } else {
        throw new Error('Unexpected response');
      }
    } catch (error) {
      import.meta.env.DEV && console.error('Submission email error:', error);
      // Replace loading toast with error toast and reset duration to duration
      if (error instanceof EmailJSResponseStatus && error.status === 429) {
        // Handle throttle error
        toast.error(t('contact:form.throttleError'), { id: submittingToast });
      } else {
        // Handle other errors
        toast.error(t('contact:form.submitError'), { id: submittingToast });
      }
      // If there's an error, we don't count it towards the rate limit
      emailRateLimiter.clear(userIdentifier);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendEmail, isSubmitting };
};
