import { FC, LazyExoticComponent } from 'react';

import { Technology } from './technology';

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
  component: LazyExoticComponent<FC>;
}
