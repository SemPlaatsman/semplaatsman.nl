import React from 'react';
import PageContent from '../../components/PageContent';
import { useTranslation } from 'react-i18next';
import styles from './Resume.module.scss';
import Timeline from './Timeline';
import TimelineItem from './Timeline/TimelineItem';
import { IoBookOutline } from 'react-icons/io5';
import Skills from './Skills';
import SkillItem from './Skills/SkillItem';

const Resume: React.FC = () => {
  const { t } = useTranslation('resume');

  const educationItems = t('education.items', { returnObjects: true }) as TimelineItem[];
  const experienceItems = t('experience.items', { returnObjects: true }) as TimelineItem[];

  const skillsItems = t('skills.items', { returnObjects: true }) as SkillItem[];

  return (
    <PageContent title={t('title')} className={styles.resume} titleClassName={styles.resumeTitle}>
      <Timeline items={educationItems} icon={IoBookOutline} title={t('education.title')} />
      <Timeline items={experienceItems} icon={IoBookOutline} title={t('experience.title')} />
      <Skills items={skillsItems} title={t('skills.title')} />
    </PageContent>
  );
};

export default Resume;
