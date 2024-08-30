import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { getProjectBySlug } from '../../utils/projectUtils';
import PageContent from '../../components/PageContent';

// import styles from './ProjectDetail.module.scss';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const ProjectComponent = project.component;

  return (
    <PageContent>
      <ProjectComponent />
    </PageContent>
  );
};

export default ProjectDetail;
