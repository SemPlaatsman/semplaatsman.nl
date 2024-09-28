import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import projectImage from '../../../assets/projects/spwa.webp';

const projectConfig: ProjectConfig = {
  slug: 'spwa',
  localeKey: 'spwa',
  createdDate: '2023-09-04',
  technologies: [
    technologies.react,
    technologies.typescript,
    technologies.pwa,
    technologies.scss,
    technologies.aspDotNet,
    technologies.jwt,
    technologies.sqlServer,
  ],
  projectType: ProjectType.FullStack,
  imagePath: projectImage,
  component: lazy(() => import('./SPWA')),
};

export default projectConfig;
