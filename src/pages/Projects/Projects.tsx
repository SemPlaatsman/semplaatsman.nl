import React, { useState, useMemo } from 'react';

import PageContent from '../../components/PageContent';
import { ProjectTypeFilter } from '../../types/project';
import { TechnologyKey, technologies } from '../../types/technology';
import { getAllProjects } from '../../utils/projectUtils';

import FilterList from './FilterList';
import ProjectList from './ProjectList/ProjectList';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ProjectTypeFilter>('all');
  const [selectedTech, setSelectedTech] = useState<TechnologyKey[]>(
    () => Object.keys(technologies) as TechnologyKey[]
  );

  const projects = getAllProjects();

  const filteredProjects = useMemo(() => {
    const filteredProjects = projects
      .filter((project) => {
        const typeMatch = selectedType === 'all' || project.projectType === selectedType;
        const techMatch = selectedTech.some((techKey) =>
          project.technologies.some((projectTech) => projectTech === technologies[techKey])
        );
        return typeMatch && techMatch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.createdDate);
        const dateB = new Date(b.createdDate);
        // Sort descendingly
        // Use dateA.getTime() - dateB.getTime(); for ascending order
        return dateB.getTime() - dateA.getTime();
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
