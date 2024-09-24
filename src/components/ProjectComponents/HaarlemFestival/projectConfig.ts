import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import projectImage from '../../../assets/projects/haarlem-festival.webp';

const projectConfig: ProjectConfig = {
  slug: 'haarlem-festival',
  localeKey: 'haarlem-festival',
  createdDate: '2022-10-03',
  technologies: [
    technologies.php,
    technologies.phpMyAdmin,
    technologies.docker,
    technologies.nginx,
    technologies.bootstrap,
  ],
  codeUrl: 'https://github.com/SemPlaatsman/HaarlemFestival',
  projectType: ProjectType.FullStack,
  imagePath: projectImage,
  component: lazy(() => import('./HaarlemFestival')),
};

export default projectConfig;
