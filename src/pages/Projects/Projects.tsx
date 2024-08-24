import React, { useState, useMemo } from 'react';

import PageContent from '../../components/PageContent';
import { demoProjects as projects, ProjectTypeFilter, ProjectType } from '../../types/project';
import { TechnologyKey, technologies } from '../../types/technology';

import FilterList from './FilterList';
import ProjectList from './ProjectList/ProjectList';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ProjectTypeFilter>('all');
  const [selectedTech, setSelectedTech] = useState<TechnologyKey[]>(
    () => Object.keys(technologies) as TechnologyKey[]
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const typeMatch = selectedType === 'all' || project.projectType === ProjectType[selectedType];
      const techMatch = selectedTech.some((techKey) =>
        project.technologies.some((projectTech) => projectTech.name === technologies[techKey].name)
      );
      return typeMatch && techMatch;
    });
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
