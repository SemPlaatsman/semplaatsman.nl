import React, { useState } from 'react';
import { LuListFilter } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';

import Modal from '../../../../components/Modal';
import {
  technologies,
  Technology,
  TechnologyFilter,
  TechnologyKey,
} from '../../../../types/technology';

import styles from './FilterModal.module.scss';

interface FilterModalProps {
  triggerClassName?: string;
  selectedTech?: TechnologyFilter;
  onTechSelect: (tech: TechnologyFilter) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  triggerClassName = '',
  selectedTech = 'all',
  onTechSelect,
}) => {
  const { t } = useTranslation('projects');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <div className="filter-section">
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
      </Modal>
    </>
  );
};

export default FilterModal;
