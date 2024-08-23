import React from 'react';
import { useTranslation } from 'react-i18next';
import { LuListFilter } from 'react-icons/lu';

import { ProjectTypeFilter } from '../../../types/project';
import {
  technologies,
  Technology,
  TechnologyKey,
  TechnologyFilter,
} from '../../../types/technology';

import ProjectTypeSelector from './ProjectTypeSelector';
import styles from './FilterList.module.scss';

interface FilterListProps {
  selectedType?: ProjectTypeFilter;
  onTypeSelect: (type: ProjectTypeFilter) => void;
  selectedTech?: TechnologyFilter;
  onTechSelect: (tech: TechnologyFilter) => void;
}

const FilterList: React.FC<FilterListProps> = ({
  selectedType = 'all',
  onTypeSelect,
  selectedTech = 'all',
  onTechSelect,
}) => {
  const { t } = useTranslation('projects');

  return (
    <div className={styles.filterList}>
      <ProjectTypeSelector selectedType={selectedType} onTypeSelect={onTypeSelect} />
      {/* Will be readded later in a filter modal */}
      {/* NOTE: Still has an invalid structure */}
      {/* IDEA: In the filter show the icons of the technologies, with a tooltip as the text */}
      <div className="filter-section" style={{ display: 'none' }}>
        <h3>{t('filters.technology.name')}</h3>
        <ul className="filter-list">
          <li className={`filter-item ${selectedTech === 'all' ? 'active' : ''}`}>
            <button onClick={() => onTechSelect('all')}>
              {t('filters.technology.options.all')}
            </button>
          </li>
          {(Object.entries(technologies) as [TechnologyKey, Technology][]).map(([key, tech]) => (
            <li key={key} className={`filter-item ${selectedTech === key ? 'active' : ''}`}>
              <button onClick={() => onTechSelect(key)}>
                <tech.icon /> {tech.name} ({t(`filters.technology.categories.${tech.category}`)})
              </button>
            </li>
          ))}
        </ul>
      </div>
      <LuListFilter color="#ffffff" />
    </div>
  );
};

export default FilterList;
