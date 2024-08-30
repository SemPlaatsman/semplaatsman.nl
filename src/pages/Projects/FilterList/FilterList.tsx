import React from 'react';

import { ProjectTypeFilter } from '../../../types/project';
import { TechnologyKey } from '../../../types/technology';

import ProjectTypeSelector from './ProjectTypeSelector';
import styles from './FilterList.module.scss';
import FilterModal from './FilterModal/FilterModal';

interface FilterListProps {
  selectedType: ProjectTypeFilter;
  onTypeSelect: (type: ProjectTypeFilter) => void;
  selectedTech: TechnologyKey[];
  onTechSelect: (tech: TechnologyKey[]) => void;
}

const FilterList: React.FC<FilterListProps> = ({
  selectedType,
  onTypeSelect,
  selectedTech,
  onTechSelect,
}) => {
  return (
    <div className={styles.filterList}>
      <ProjectTypeSelector
        className={styles.baseFilters}
        selectedType={selectedType}
        onTypeSelect={onTypeSelect}
      />
      <FilterModal
        triggerClassName={styles.additionalFiltersTrigger}
        selectedTech={selectedTech}
        onTechSelect={onTechSelect}
      />
    </div>
  );
};

export default FilterList;
