import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import projectImage from '../../../assets/projects/tno-logo.webp';

const projectConfig: ProjectConfig = {
  slug: 'who-has-been-calling',
  localeKey: 'who-has-been-calling',
  createdDate: '2024-06-14',
  technologies: [
    technologies.react,
    technologies.typescript,
    technologies.flask,
    technologies.postgresql,
    technologies.docker,
    technologies.tensorflow,
  ],
  projectType: ProjectType.FullStack,
  imagePath: projectImage,
  component: lazy(() => import('./WhoHasBeenCalling')),
};

export default projectConfig;
