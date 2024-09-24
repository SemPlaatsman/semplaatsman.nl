import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import projectImage from '../../../assets/projects/the-felis-foundation.webp';

const projectConfig: ProjectConfig = {
  slug: 'the-felis-foundation',
  localeKey: 'the-felis-foundation',
  createdDate: '2023-02-13',
  technologies: [
    technologies.vue,
    technologies.bootstrap,
    technologies.php,
    technologies.phpMyAdmin,
  ],
  codeUrl: 'https://github.com/SemPlaatsman/WebDev2-EndAssignment',
  projectType: ProjectType.FullStack,
  imagePath: projectImage,
  component: lazy(() => import('./TheFelisFoundation')),
};

export default projectConfig;
