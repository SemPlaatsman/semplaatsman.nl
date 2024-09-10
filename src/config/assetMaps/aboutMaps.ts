// This file contains different mappings for assets like images, icons, etc.
// The reason this is kept seperate from config.ts is to reduce initial load time.
import IconBackendDevelopment from '../../assets/interests/backend-development.svg';
import IconWebDevelopment from '../../assets/interests/web-development.svg';
import IconAI from '../../assets/interests/artificial-intelligence.svg';
import IconCooking from '../../assets/interests/cooking.svg';
import AvatarMarcDierikx from '../../assets/avatars/marc-dierikx.webp';
import AvatarTayamElJebari from '../../assets/avatars/tayam-el-jebari.webp';

export const interestsImageMap = {
  backendDevelopment: IconBackendDevelopment,
  webDevelopment: IconWebDevelopment,
  artificialIntelligence: IconAI,
  cooking: IconCooking,
};

export const testimonialImageMap = {
  marcDierikx: AvatarMarcDierikx,
  tayamElJebari: AvatarTayamElJebari,
};
