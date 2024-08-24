import React, { useState, useMemo, useEffect } from 'react';
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const groupedTechnologies = useMemo(() => {
    const groups: Record<TechnologyCategory, (Technology & { key: TechnologyKey })[]> = {
      language: [],
      framework: [],
      'library/package': [],
      'tool/platform': [],
      database: [],
    };

    (Object.entries(technologies) as [TechnologyKey, Technology][]).forEach(([key, tech]) => {
      groups[tech.category].push({ ...tech, key });
    });

    return groups;
  }, []);

  const handleTechToggle = (techKey: TechnologyKey) => {
    const updatedSelection = selectedTech.includes(techKey)
      ? selectedTech.filter((key) => key !== techKey)
      : [...selectedTech, techKey];
    onTechSelect(updatedSelection);
  };

  const handleAllToggle = (category: TechnologyCategory) => {
    const categoryTechs = groupedTechnologies[category].map((tech) => tech.key);
    const allSelected = categoryTechs.every((key) => selectedTech.includes(key));
    const someSelected = categoryTechs.some((key) => selectedTech.includes(key));

    let updatedSelection: TechnologyKey[];
    if (allSelected) {
      updatedSelection = selectedTech.filter((key) => !categoryTechs.includes(key));
    } else if (someSelected) {
      updatedSelection = selectedTech.filter((key) => !categoryTechs.includes(key));
    } else {
      updatedSelection = [...selectedTech, ...categoryTechs];
    }

    onTechSelect(updatedSelection);
  };

  const getAllChipState = (category: TechnologyCategory): 'all' | 'some' | 'none' => {
    const categoryTechs = groupedTechnologies[category].map((tech) => tech.key);
    const allSelected = categoryTechs.every((key) => selectedTech.includes(key));
    const someSelected = categoryTechs.some((key) => selectedTech.includes(key));

    return allSelected ? 'all' : someSelected ? 'some' : 'none';
  };

  // Log selected technologies whenever they change
  useEffect(() => {
    console.log('Currently selected technologies:', selectedTech);
  }, [selectedTech]);

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
        <h2>{t('filters.technology.prompt')}</h2>
        {(
          Object.entries(groupedTechnologies) as [
            TechnologyCategory,
            (Technology & { key: TechnologyKey })[],
          ][]
        ).map(([category, techs]) => (
          <div key={category}>
            <h3>{t(`filters.technology.categories.${category}`)}</h3>
            <div>
              <button
                onClick={() => handleAllToggle(category)}
                data-chip-state={getAllChipState(category)}
              >
                {t('filters.technology.options.all')}
              </button>
              {techs.map((tech) => (
                <button key={tech.key} onClick={() => handleTechToggle(tech.key)}>
                  <tech.icon /> {tech.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default FilterModal;
