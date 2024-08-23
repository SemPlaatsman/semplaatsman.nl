import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoChevronDown } from 'react-icons/io5';

import { ProjectType, ProjectTypeFilter } from '../../../../types/project';

import styles from './ProjectTypeSelector.module.scss';

interface ProjectTypeSelectorProps {
  className?: string;
  selectedType?: ProjectTypeFilter;
  onTypeSelect: (type: ProjectTypeFilter) => void;
}

const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({
  className = '',
  selectedType = 'all',
  onTypeSelect,
}) => {
  const { t } = useTranslation('projects');
  const projectTypes: (string | ProjectType)[] = ['all', ...Object.values(ProjectType)];
  const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);

  const handleSelectBoxToggle = () => {
    setIsSelectBoxOpen((prevState) => !prevState);
  };

  const handleProjectTypeSelect = (type: ProjectTypeFilter) => {
    onTypeSelect(type);
    setIsSelectBoxOpen(false);
  };

  return (
    <>
      <ul className={`${styles.projectTypeSelector} ${className}`}>
        {projectTypes.map((type) => (
          <li key={type} className={styles.projectTypeItem}>
            <button
              onClick={() => handleProjectTypeSelect(type as ProjectTypeFilter)}
              className={selectedType === type ? styles.active : ''}
            >
              {t(`filters.projectType.options.${type}`)}
            </button>
          </li>
        ))}
      </ul>
      <div className={`${styles.projectTypeSelectBox} ${className}`}>
        <button
          className={`${styles.projectTypeSelect} ${isSelectBoxOpen ? styles.active : ''}`}
          onClick={handleSelectBoxToggle}
        >
          <div className={styles.selectValue}>{t('filters.projectType.prompt')}</div>
          <div className={styles.selectIcon}>
            <IoChevronDown />
          </div>
        </button>
        <ul className={styles.selectList}>
          {projectTypes.map((type) => (
            <li key={type} className={styles.selectItem}>
              <button
                onClick={() => onTypeSelect(type as ProjectTypeFilter)}
                className={selectedType === type ? styles.active : ''}
              >
                {t(`filters.projectType.options.${type}`)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectTypeSelector;
