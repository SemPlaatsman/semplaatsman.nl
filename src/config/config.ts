// Note: some variables from {{lng}}/seo.json can be moved to this config object, but is out of scope for now.
// Asset mappings are seperately stored in the assetMaps folder to reduce initial load time.
const config = {
  app: {
    baseUrl: 'https://semplaatsman.nl',
    githubUrl: 'https://github.com/SemPlaatsman/semplaatsman.nl',
    domain: 'semplaatsman.nl',
  },
  owner: {
    firstName: 'Sem',
    lastName: 'Plaatsman',
    fullName: 'Sem Plaatsman',
    additionalName: 'SemPl',
    gender: 'Male', // According to https://schema.org/GenderType
    knowsLanguage: ['English', 'Dutch'], // According to https://schema.org/Language
    nationality: 'Dutch', // According to https://schema.org/Country
    addressLocality: 'Haarlem', // According to the 'addressLocality' field of https://schema.org/PostalAddress
    addressCountry: 'NL', // According to the 'addressCountry' field of https://schema.org/PostalAddress
    knowsAbout: [
      'C#',
      'Java',
      'TypeScript',
      'React',
      'OOP',
      'AI',
      'Deep Learning',
      'Machine Learning',
      'Cloud Computing',
      'GitHub',
      'Docker',
      'Python',
    ], // According to the 'knowsAbout' field of https://schema.org/Person
  },
  email: {
    address: 'hello@semplaatsman.nl',
    rateLimit: {
      maxRequests: 5,
      timeWindow: 3600000,
    },
  },
  contactForm: {
    maxLengths: {
      name: 100,
      email: 100,
      message: 1000,
    },
  },
  externalLinks: {
    github: 'https://github.com/SemPlaatsman',
    linkedin: 'https://www.linkedin.com/in/sem-plaatsman/',
    get email() {
      return `mailto:${config.email.address}`;
    },
    location: 'https://maps.app.goo.gl/AEWwr2iiCeWyovD28',
    npm: 'https://www.npmjs.com/~semplaatsman',
    stackOverflow: 'https://stackoverflow.com/users/12345678/sem-plaatsman',
  },
  ui: {
    toasts: {
      defaultDuration: 5000,
      errorDuration: 10000,
      loadingDuration: 30000,
    },
  },
};

export default config;
