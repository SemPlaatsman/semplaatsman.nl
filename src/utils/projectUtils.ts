import { ProjectConfig } from '../types/project';
import projectConfigs from '../components/ProjectComponents';

export const getAllProjects = (): ProjectConfig[] => {
  return projectConfigs;
};

export const getProjectBySlug = (slug: string): ProjectConfig | undefined => {
  return getAllProjects().find((project) => project.slug === slug);
};
