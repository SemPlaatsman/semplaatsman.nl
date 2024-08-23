import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ProjectConfig } from '../../../../types/project';
import i18n from '../../../../i18n';

import styles from './ProjectItem.module.scss';

interface ProjectItemProps {
  project: ProjectConfig;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { t } = useTranslation('projects');

  return (
    <li key={project.slug} className={styles.projectItem}>
      <Link to={`/projects/${project.slug}`}>
        <figure className={styles.projectBannerBox}>
          <img src={project.imagePath} alt={t(`items.${project.slug}.bannerAlt`)} loading="lazy" />
        </figure>

        <div className={styles.projectContent}>
          <div className={styles.projectMeta}>
            <p className={styles.projectCategory}>
              {t(`filters.projectType.options.${project.projectType}`)}
            </p>
            <span className={styles.dot}></span>
            <time dateTime={project.createdDate}>
              {Intl.DateTimeFormat(i18n.language).format(new Date(project.createdDate))}
            </time>
          </div>
          <h3 className={`h3 ${styles.projectItemTitle}`}>{t(`items.${project.slug}.title`)}</h3>
          <p className={styles.projectText}>{t(`items.${project.slug}.text`)}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
