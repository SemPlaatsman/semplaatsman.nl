import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoBookOutline } from 'react-icons/io5';
import { GrDocumentPdf } from 'react-icons/gr';

import PageContent from '../../components/PageContent';
import i18n from '../../i18n';

import styles from './Resume.module.scss';
import Timeline from './Timeline';
import TimelineItem from './Timeline/TimelineItem';
import Skills from './Skills';
import SkillItem from './Skills/SkillItem';

const Resume: React.FC = () => {
  const { t } = useTranslation('resume');

  const educationItems: TimelineItem[] = t('education.items', { returnObjects: true });
  const experienceItems: TimelineItem[] = t('experience.items', { returnObjects: true });

  const skillsItems: SkillItem[] = t('skills.items', { returnObjects: true });

  const pdfUrl = `/resume/Resume_Sem_Plaatsman_${i18n.language}.pdf`;

  return (
    <PageContent className={styles.resume}>
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.pdfLink}
        aria-label={t('pdfLink.ariaLabel')}
      >
        <GrDocumentPdf /> {t('pdfLink.text')}
      </a>
      <Timeline items={educationItems} icon={IoBookOutline} title={t('education.title')} />
      <Timeline items={experienceItems} icon={IoBookOutline} title={t('experience.title')} />
      <Skills items={skillsItems} title={t('skills.title')} />
    </PageContent>
  );
};

export default Resume;
