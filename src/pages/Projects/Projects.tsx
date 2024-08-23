import React, { useEffect, useState, useMemo } from 'react';

import PageContent from '../../components/PageContent';
import { demoProjects as projects, ProjectTypeFilter, ProjectType } from '../../types/project';
import { TechnologyFilter } from '../../types/technology';

import FilterList from './FilterList';
import ProjectList from './ProjectList/ProjectList';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ProjectTypeFilter>('all');
  const [selectedTech, setSelectedTech] = useState<TechnologyFilter>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const typeMatch =
        selectedType === 'all' ||
        project.projectType === ProjectType[selectedType as unknown as keyof typeof ProjectType];
      const techMatch =
        selectedTech === 'all' || project.technologies.some((tech) => tech.name === selectedTech);
      return typeMatch && techMatch;
    });
  }, [selectedType, selectedTech]);

  useEffect(() => {
    console.log(filteredProjects);
  }, [filteredProjects]);

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
