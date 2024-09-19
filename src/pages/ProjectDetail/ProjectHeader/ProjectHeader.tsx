import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoEye, IoLogoGithub } from 'react-icons/io5';

import i18n from '../../../i18n';
import { ProjectConfig } from '../../../types/project';

import styles from './ProjectHeader.module.scss';
import ProjectInfoModal from './ProjectInfoModal';

interface ProjectHeaderProps {
  project: ProjectConfig;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const { t } = useTranslation('projects');

  return (
    <div className={styles.projectHeader}>
      <div className={styles.headerContent}>
        <h3 className={`h3`}>{t(`items.${project.localeKey}.title`)}</h3>
        <ProjectInfoModal project={project} triggerClassName={styles.projectHeaderIcon} />
      </div>
      <div className={styles.projectSubheader}>
        <span>{Intl.DateTimeFormat(i18n.language).format(new Date(project.createdDate))}</span>
        {t(`filters.projectType.options.${project.projectType}`)}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('projectDetails.links.live.ariaLabel', {
              projectName: t(`items.${project.localeKey}.title`),
            })}
          >
            <IoEye className={styles.projectHeaderIcon} />
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
            <IoLogoGithub className={styles.projectHeaderIcon} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectHeader;
