import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import RateLimiter from '../utils/rateLimiter';
import DOMPurify from 'dompurify';
import { mailjetService } from '../services/mailjetService';

// 5 requests per hour (3600000 ms)
const emailRateLimiter = RateLimiter.getInstance('emailSender', 5, 3600000);

export const useSendEmail = () => {
  const { t } = useTranslation('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (form: HTMLFormElement) => {
    const userIdentifier = form.email.value; // Using email as identifier

    if (emailRateLimiter.isRateLimited(userIdentifier)) {
      toast.error(t('form.rateLimitError'));
      return;
    }

    setIsSubmitting(true);
    // Set loading toast to 30 seconds
    const submittingToast = toast.loading(t('form.submitting'), { duration: 30000 });

    try {
      // Sanitize and convert form data to a plain object
      const sanitizedData = Object.fromEntries(
        Array.from(new FormData(form).entries()).map(([key, value]) => [
          key,
          typeof value === 'string' ? DOMPurify.sanitize(value) : value,
        ])
      ) as { fullname: string; email: string; message: string };

      // Send email
      await mailjetService.sendSubmissionEmail(sanitizedData);

      try {
        await mailjetService.sendAutoReplyEmail(sanitizedData);
      } catch (error) {
        console.error('Auto-reply email error:', error);
        toast.error(t('form.autoReplyError'), { duration: 3000 });
      }

      toast.success(t('form.submitSuccess'), { id: submittingToast, duration: 3000 });
      form.reset();
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
