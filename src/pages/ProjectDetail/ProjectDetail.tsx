import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { getProjectBySlug } from '../../utils/projectUtils';
import PageContent from '../../components/PageContent';
import { ProjectConfig } from '../../types/project';

import styles from './ProjectDetail.module.scss';
import ProjectHeader from './ProjectHeader';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project: ProjectConfig | undefined = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const ProjectComponent = project.component;

  return (
    <PageContent titleClassName={styles.projectTitle}>
      <ProjectHeader project={project} />
      <div className={styles.projectContent}>
        <ProjectComponent />
      </div>
    </PageContent>
  );
};

export default ProjectDetail;
