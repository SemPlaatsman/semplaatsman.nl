import React, { useState, useMemo } from 'react';

import PageContent from '../../components/PageContent';
import { demoProjects as projects, ProjectTypeFilter } from '../../types/project';
import { TechnologyKey, technologies } from '../../types/technology';

import FilterList from './FilterList';
import ProjectList from './ProjectList/ProjectList';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  // const [projects, setProjects] = useState<ProjectConfig[]>([]);
  const [selectedType, setSelectedType] = useState<ProjectTypeFilter>('all');
  const [selectedTech, setSelectedTech] = useState<TechnologyKey[]>(
    () => Object.keys(technologies) as TechnologyKey[]
  );

  const filteredProjects = useMemo(() => {
    const filteredProjects = projects.filter((project) => {
      const typeMatch = selectedType === 'all' || project.projectType === selectedType;
      const techMatch = selectedTech.some((techKey) =>
        project.technologies.some((projectTech) => projectTech === technologies[techKey])
      );
      return typeMatch && techMatch;
    });
    return filteredProjects;
  }, [selectedType, selectedTech]);

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
