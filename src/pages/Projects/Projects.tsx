import React, { useState, useMemo, useEffect } from 'react';

import PageContent from '../../components/PageContent';
import { ProjectConfig, ProjectTypeFilter } from '../../types/project';
import { TechnologyKey, technologies } from '../../types/technology';
import { getAllProjectSlugs, getProjectData } from '../../utils/mdxUtils';

import FilterList from './FilterList';
import ProjectList from './ProjectList/ProjectList';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectConfig[]>([]);
  const [selectedType, setSelectedType] = useState<ProjectTypeFilter>('all');
  const [selectedTech, setSelectedTech] = useState<TechnologyKey[]>(
    () => Object.keys(technologies) as TechnologyKey[]
  );

  useEffect(() => {
    const loadProjects = async () => {
      try {
        console.log('Starting to load projects...');
        const slugs = await getAllProjectSlugs();
        console.log('Fetched slugs:', slugs);
        const projectsData = await Promise.all(
          slugs.map(async ({ params }) => {
            const { frontmatter } = await getProjectData(params.slug);
            return frontmatter;
          })
        );
        console.log('Fetched project data:', projectsData);
        setProjects(projectsData);
      } catch (error) {
        console.error('Failed to load projects:', error);
      }
    };
    void loadProjects();
  }, []);

  const filteredProjects = useMemo(() => {
    const filteredProjects = projects.filter((project) => {
      const typeMatch = selectedType === 'all' || project.projectType === selectedType;
      const techMatch = selectedTech.some((techKey) =>
        project.technologies.some((projectTech) => projectTech === technologies[techKey])
      );
      return typeMatch && techMatch;
    });
    return filteredProjects;
  }, [projects, selectedType, selectedTech]);

  return (
    <PageContent>
      <section className={styles.projects}>
        <FilterList
          selectedType={selectedType}
          onTypeSelect={setSelectedType}
          selectedTech={selectedTech}
          onTechSelect={setSelectedTech}
        />
        <ProjectList projects={filteredProjects} />
      </section>
    </PageContent>
  );
};

export default Projects;
