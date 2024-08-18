import axios from 'axios';

const mailjetInstance = axios.create({
  baseURL: 'https://api.mailjet.com/v3.1',
  auth: {
    username: import.meta.env.VITE_MAILJET_API_KEY,
    password: import.meta.env.VITE_MAILJET_SECRET_KEY,
  },
});

export { mailjetInstance };
