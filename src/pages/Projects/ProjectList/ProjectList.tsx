import React from 'react';

import { ProjectConfig } from '../../../types/project';

import styles from './ProjectList.module.scss';
import ProjectItem from './ProjectItem/ProjectItem';

interface ProjectListProps {
  projects: ProjectConfig[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <ul className={styles.projectList}>
      {projects.map((project: ProjectConfig) => (
        <ProjectItem project={project} key={project.slug} />
      ))}
    </ul>
  );
};

export default ProjectList;
