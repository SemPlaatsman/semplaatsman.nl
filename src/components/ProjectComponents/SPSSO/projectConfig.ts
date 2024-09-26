import { lazy } from 'react';

import { ProjectConfig, ProjectType } from '../../../types/project';
import { technologies } from '../../../types/technology';
import projectImage from '../../../assets/projects/sp.sso.webp';

const projectConfig: ProjectConfig = {
  slug: 'sp.sso',
  localeKey: 'sp.sso',
  createdDate: '2024-04-11',
  technologies: [
    technologies.aspDotNet,
    technologies.jwt,
    technologies.testing,
    technologies.sqlServer,
    technologies.wordpress,
    technologies.php,
  ],
  projectType: ProjectType.Backend,
  imagePath: projectImage,
  component: lazy(() => import('./SPSSO')),
};

export default projectConfig;
