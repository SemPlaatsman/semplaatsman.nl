import { technologies, Technology } from './technology';

// When adding new values to the ProjectType enum, the key is used as the i18n key,
// and the projects.json locale file, located in public/locales/{lng}/projects.json, should be updated.
export enum ProjectType {
  Backend = 'backend',
  Frontend = 'frontend',
  FullStack = 'fullStack',
}

export type ProjectTypeFilter = 'all' | ProjectType;

export interface ProjectConfig {
  slug: string;
  localeKey: string;
  createdDate: string; // Any valid datetime value from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values
  technologies: Technology[];
  projectType: ProjectType;
  codeUrl?: string;
  liveUrl?: string;
  imagePath?: string;
}

export const demoProjects: ProjectConfig[] = [
  {
    slug: 'e-commerce',
    localeKey: 'eCommerceWebsite',
    createdDate: '2022-01-01',
    technologies: [technologies.react, technologies.nodeJs],
    projectType: ProjectType.FullStack,
    codeUrl: 'https://github.com/example/e-commerce',
    liveUrl: 'https://example.com/e-commerce',
    imagePath: '/../src/assets/blog-2.jpg',
  },
  {
    slug: 'portfolio',
    localeKey: 'portfolio',
    createdDate: '2022-02-01',
    technologies: [technologies.react, technologies.nodeJs, technologies.typescript],
    projectType: ProjectType.Frontend,
    codeUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://example.com/portfolio',
    imagePath: '/../src/assets/blog-6.jpg',
  },
];
