import React, { useCallback, useState } from 'react';
import { IoEye, IoInformationCircleOutline, IoLogoGithub } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

import Modal from '../../../../components/Modal';
import { ProjectConfig } from '../../../../types/project';
import i18n from '../../../../i18n';
import { Technology } from '../../../../types/technology';

import styles from './ProjectInfoModal.module.scss';

interface ProjectInfoModalProps {
  project: ProjectConfig;
  triggerClassName?: string;
}

const ProjectInfoModal: React.FC<ProjectInfoModalProps> = ({ project, triggerClassName = '' }) => {
  const { t } = useTranslation('projects');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <div className={`${styles.projectInfoModalTrigger}`}>
        <IoInformationCircleOutline
          className={`${triggerClassName}`}
          onClick={openModal}
          onKeyDown={(e) => e.key === 'Enter' && openModal()}
          tabIndex={0}
          role="button"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className={styles.modalContent}>
          <h2 className={`h2 ${styles.modalTitle}`}>{t(`items.${project.localeKey}.title`)}</h2>
          <div className={styles.projectDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>{t('filters.projectType.name')}:</span>
              <span className={styles.detailValue}>
                {t(`filters.projectType.options.${project.projectType}`)}
              </span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>{t('variables.createdDate.name')}:</span>
              <span className={styles.detailValue}>
                {Intl.DateTimeFormat(i18n.language).format(new Date(project.createdDate))}
              </span>
            </div>
          </div>
          <div className={styles.projectDescription}>
            <p>{t(`items.${project.localeKey}.text`)}</p>
          </div>
          <div className={styles.technologiesSection}>
            <h3 className={`h3 ${styles.sectionTitle}`}>{t('filters.technology.name')}</h3>
            <div className={styles.chipsContainer}>
              {project.technologies.map((tech: Technology) => (
                <div key={tech.name} className={`${styles.chip}`}>
                  <tech.icon className={styles.techIcon} />
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          {(project.codeUrl ?? project.liveUrl) && (
            <div className={styles.projectLinks}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('projectDetails.links.live.ariaLabel', {
                    projectName: t(`items.${project.localeKey}.title`),
                  })}
                >
                  <IoEye className={styles.linkIcon} />
                </a>
              )}
              {project.codeUrl && (
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('projectDetails.links.code.ariaLabel', {
                    projectName: t(`items.${project.localeKey}.title`),
                  })}
                >
                  <IoLogoGithub className={styles.linkIcon} />
                </a>
              )}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ProjectInfoModal;
