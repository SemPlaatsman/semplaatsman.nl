import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import projectImage from '../../../assets/projects/code-generation.webp';

const projectConfig: ProjectConfig = {
  slug: 'code-generation',
  localeKey: 'code-generation',
  createdDate: '2023-04-24',
  technologies: [
    technologies.springBoot,
    technologies.hibernate,
    technologies.swagger,
    technologies.testing,
    technologies.cucumber,
    technologies.vue,
    technologies.bootstrap,
  ],
  codeUrl: 'https://github.com/SemPlaatsman/CodeGeneration',
  projectType: ProjectType.FullStack,
  imagePath: projectImage,
  component: lazy(() => import('./CodeGeneration')),
};

export default projectConfig;
