import { mailjetInstance } from '../utils/axios';

interface EmailData {
  fullname: string;
  email: string;
  message: string;
}

export const mailjetService = {
  sendSubmissionEmail: async (data: EmailData) => {
    return mailjetInstance.post('/send', {
      Messages: [
        {
          From: {
            Email: 'hello@semplaatsman.nl',
            Name: 'semplaatsman.nl: Contact Form',
          },
          To: [
            {
              Email: 'hello@semplaatsman.nl',
              Name: 'Sem Plaatsman',
            },
          ],
          ReplyTo: {
            Email: data.email,
          },
          TemplateID: parseInt(import.meta.env.VITE_MAILJET_CONTACT_SUBMISSION_TEMPLATE_ID),
          TemplateLanguage: true,
          Subject: `semplaatsman.nl: New message from ${data.fullname}`,
          Variables: data,
        },
      ],
    });
  },

  sendAutoReplyEmail: async (data: EmailData) => {
    return mailjetInstance.post('/send', {
      Messages: [
        {
          From: {
            Email: 'hello@semplaatsman.nl',
            Name: 'semplaatsman.nl',
          },
          To: [
            {
              Email: data.email,
              Name: data.fullname,
            },
          ],
          TemplateID: parseInt(import.meta.env.VITE_MAILJET_CONTACT_AUTO_REPLY_TEMPLATE_ID),
          TemplateLanguage: true,
          Subject: 'Thank you for contacting semplaatsman.nl',
          Variables: data,
        },
      ],
    });
  },
};
