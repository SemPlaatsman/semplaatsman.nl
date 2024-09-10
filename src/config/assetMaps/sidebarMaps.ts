// This file contains different mappings for assets like images, icons, etc.
// The reason this is kept seperate from config.ts is to reduce initial load time.
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { IoLogoNpm, IoLogoStackoverflow } from 'react-icons/io5';

export const contactsListIconMap = {
  github: IoLogoGithub,
  linkedin: IoLogoLinkedin,
  email: IoMailOutline,
  location: IoLocationOutline,
};

export const socialListIconMap = {
  npm: IoLogoNpm,
  stackOverflow: IoLogoStackoverflow,
};
