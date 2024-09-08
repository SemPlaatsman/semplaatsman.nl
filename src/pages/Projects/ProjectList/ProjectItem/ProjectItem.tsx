import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ProjectConfig } from '../../../../types/project';
import i18n from '../../../../i18n';
import { TechnologyKey } from '../../../../types/technology';

import styles from './ProjectItem.module.scss';

interface ProjectItemProps {
  project: ProjectConfig;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const { t } = useTranslation('projects');
  const [hoveredTech, setHoveredTech] = useState<TechnologyKey | null>(null);
  const bannerRef = useRef<HTMLElement>(null);
  const techContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const positionTechIcons = () => {
    if (bannerRef.current && techContainerRef.current) {
      const bannerBottom = bannerRef.current.offsetHeight;
      techContainerRef.current.style.top = `${bannerBottom}px`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      positionTechIcons();
    };

    const handleImageLoad = () => {
      positionTechIcons();
    };

    window.addEventListener('resize', handleResize);

    const currentImageRef = imageRef.current;

    if (currentImageRef) {
      if (currentImageRef.complete) {
        positionTechIcons();
      } else {
        currentImageRef.addEventListener('load', handleImageLoad);
      }
    }

    // Initial positioning
    positionTechIcons();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentImageRef) {
        currentImageRef.removeEventListener('load', handleImageLoad);
      }
    };
  }, []);

  return (
    <li key={project.slug} className={styles.projectItem}>
      <Link to={`./${project.slug}`}>
        <figure ref={bannerRef} className={styles.projectBannerBox}>
          <img
            ref={imageRef}
            src={project.imagePath}
            alt={t(`items.${project.localeKey}.bannerAlt`)}
            loading="lazy"
          />
        </figure>
        <div ref={techContainerRef} className={styles.technologiesContainer}>
          {project.technologies.map((tech) => (
            <div
              key={tech.name}
              className={styles.technologyIcon}
              onMouseEnter={() => setHoveredTech(tech.name as TechnologyKey)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <tech.icon />
              {hoveredTech === tech.name && <div className={styles.tooltip}>{tech.name}</div>}
            </div>
          ))}
        </div>
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
          <h3 className={`h3 ${styles.projectItemTitle}`}>
            {t(`items.${project.localeKey}.title`)}
          </h3>
          <p className={styles.projectText}>{t(`items.${project.localeKey}.text`)}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
