import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import projectImage from '../../../assets/projects/the-garden-group.webp';

const projectConfig: ProjectConfig = {
  slug: 'the-garden-group',
  localeKey: 'the-garden-group',
  createdDate: '2022-09-27',
  technologies: [technologies.mongodb, technologies.winforms],
  codeUrl: 'https://github.com/SemPlaatsman/TGG-Project',
  projectType: ProjectType.Backend,
  imagePath: projectImage,
  component: lazy(() => import('./TheGardenGroup')),
};

export default projectConfig;
