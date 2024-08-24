// NOTE: The reason this component was called FilterModal, and not TechnologyFilterModal, is because it was intended to be a generic filter modal that could be used for other types of filters as well. However, the implementation is currently focused on technology filters, but this component can/will be extended to support other types of filters in the future.
import React, { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LuListFilter } from 'react-icons/lu';

import Modal from '../../../../components/Modal';
import {
  technologies,
  Technology,
  TechnologyKey,
  TechnologyCategory,
} from '../../../../types/technology';

import styles from './FilterModal.module.scss';

interface FilterModalProps {
  triggerClassName?: string;
  selectedTech: TechnologyKey[];
  onTechSelect: (tech: TechnologyKey[]) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  triggerClassName = '',
  selectedTech,
  onTechSelect,
}) => {
  const { t } = useTranslation('projects');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  // Group technologies by category using useMemo to memoize the result
  const groupedTechnologies = useMemo(() => {
    // Initialize an empty object to hold the groups
    const groups = Object.values(TechnologyCategory).reduce(
      (acc, category) => {
        acc[category] = [];
        return acc;
      },
      {} as Record<TechnologyCategory, (Technology & { key: TechnologyKey })[]>
    );

    // Iterate over the technologies and add them to their respective groups
    (Object.entries(technologies) as [TechnologyKey, Technology][]).forEach(([key, tech]) => {
      groups[tech.category].push({ ...tech, key });
    });

    // Filter out empty groups and return the result
    return Object.fromEntries(
      Object.entries(groups).filter(([_, techs]) => techs.length > 0)
    ) as Record<TechnologyCategory, (Technology & { key: TechnologyKey })[]>;
  }, []);

  // Toggle the selection of a technology
  const handleTechToggle = (techKey: TechnologyKey) => {
    const updatedSelection = selectedTech.includes(techKey)
      ? selectedTech.filter((key) => key !== techKey)
      : [...selectedTech, techKey];
    onTechSelect(updatedSelection);
  };

  // Toggle the selection of all technologies in a category
  const handleCategoryAllToggle = (category: TechnologyCategory) => {
    const categoryTechs = groupedTechnologies[category].map((tech) => tech.key);
    const allSelected = categoryTechs.every((key) => selectedTech.includes(key));

    const updatedSelection = allSelected
      ? selectedTech.filter((key) => !categoryTechs.includes(key))
      : [...new Set([...selectedTech, ...categoryTechs])];

    onTechSelect(updatedSelection);
  };

  // Handle global "All" toggle
  const handleGlobalAllToggle = () => {
    const allTechs = Object.values(groupedTechnologies).flatMap((techs) =>
      techs.map((tech) => tech.key)
    );
    const allSelected = allTechs.every((key) => selectedTech.includes(key));

    if (allSelected) {
      onTechSelect([]);
    } else {
      onTechSelect(allTechs);
    }
  };

  // Get the state of the global "All" chip
  const getGlobalAllChipState = (): 'all' | 'some' | 'none' => {
    const allTechs = Object.values(groupedTechnologies).flatMap((techs) =>
      techs.map((tech) => tech.key)
    );
    const allSelected = allTechs.every((key) => selectedTech.includes(key));
    const noneSelected = allTechs.every((key) => !selectedTech.includes(key));

    return allSelected ? 'all' : noneSelected ? 'none' : 'some';
  };

  // Get the state of the "All" chip in a category
  const getCategoryAllChipState = (category: TechnologyCategory): 'all' | 'some' | 'none' => {
    const categoryTechs = groupedTechnologies[category].map((tech) => tech.key);
    const allSelected = categoryTechs.every((key) => selectedTech.includes(key));
    const noneSelected = categoryTechs.every((key) => !selectedTech.includes(key));

    return allSelected ? 'all' : noneSelected ? 'none' : 'some';
  };

  return (
    <>
      <div className={`${styles.filterModalTrigger} ${triggerClassName}`}>
        <LuListFilter
          onClick={openModal}
          onKeyDown={(e) => e.key === 'Enter' && openModal()}
          tabIndex={0}
          role="button"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} className={styles.filterModal}>
        <div className={styles.modalContent}>
          <h2 className={`h2 ${styles.modalTitle}`}>{t('additionalFiltersTitle')}</h2>
          <div className={styles.modalTechnologiesHeader}>
            <h3 className={`h3 ${styles.modalTechnologiesTitle}`}>
              {t('filters.technology.name')}
            </h3>
            <button
              onClick={handleGlobalAllToggle}
              data-selection-state={getGlobalAllChipState()}
              className={`${styles.chip} ${styles.allChip}`}
            >
              {t('filters.technology.options.all')}
            </button>
          </div>
          <div className={styles.categoriesContainer}>
            {Object.entries(groupedTechnologies).map(([category, techs]) => (
              <div key={category} className={styles.categoryContainer}>
                <div className={styles.categoryHeader}>
                  <h4 className={`h4 ${styles.categoryTitle}`}>
                    {t(`filters.technology.categories.${category}`)}
                  </h4>
                  <button
                    onClick={() => handleCategoryAllToggle(category as TechnologyCategory)}
                    data-selection-state={getCategoryAllChipState(category as TechnologyCategory)}
                    className={`${styles.chip} ${styles.allChip}`}
                  >
                    {t('filters.technology.options.all')}
                  </button>
                </div>
                <div className={styles.chipsContainer}>
                  {techs.map((tech) => (
                    <button
                      key={tech.key}
                      onClick={() => handleTechToggle(tech.key)}
                      data-selected={selectedTech.includes(tech.key)}
                      className={`${styles.chip} ${styles.techChip}`}
                    >
                      <tech.icon className={styles.techIcon} />
                      <span className={styles.techName}>{tech.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FilterModal;
