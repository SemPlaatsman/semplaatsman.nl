import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import projectImage from '../../../assets/projects/semplaatsman.nl-portfolio.webp';

const projectConfig: ProjectConfig = {
  slug: 'semplaatsman.nl',
  localeKey: 'semplaatsman.nl-portfolio',
  createdDate: '2024-07-14',
  technologies: [
    technologies.react,
    technologies.typescript,
    technologies.scss,
    technologies.vite,
    technologies.i18next,
  ],
  projectType: ProjectType.FullStack,
  codeUrl: 'https://github.com/SemPlaatsman/semplaatsman.nl',
  liveUrl: 'https://semplaatsman.nl',
  imagePath: projectImage,
  component: lazy(() => import('./SemplaatsmanNlPortfolio')),
};

export default projectConfig;
