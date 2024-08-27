import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import * as runtime from 'react/jsx-runtime';
import { runSync } from '@mdx-js/mdx';
import { useTranslation } from 'react-i18next';

import { getProjectData } from '../../utils/mdxUtils';
import { ProjectConfig } from '../../types/project';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation(`projects/${slug}`);
  const [project, setProject] = useState<{
    compiledSource: string;
    frontmatter: ProjectConfig;
  } | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (slug) {
        try {
          const projectData = await getProjectData(slug);
          setProject(projectData);
        } catch (error) {
          console.error('Failed to load project:', error);
        }
      }
    };
    void loadProject();
  }, [slug]);

  const MDXContent = useMemo(() => {
    if (project) {
      try {
        const { default: Content } = runSync(project.compiledSource, runtime);
        return (props: any) => <Content {...props} t={t} />;
      } catch (error) {
        console.error('Failed to compile MDX:', error);
        return null;
      }
    }
    return null;
  }, [project, t]);

  if (!project || !MDXContent) return <div>Loading...</div>;

  return (
    <MDXProvider>
      <MDXContent />
    </MDXProvider>
  );
};

export default ProjectDetail;
