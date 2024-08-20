import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoBookOutline } from 'react-icons/io5';

import PageContent from '../../components/PageContent';

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

  return (
    <PageContent className={styles.resume} titleClassName={styles.resumeTitle}>
      <Timeline items={educationItems} icon={IoBookOutline} title={t('education.title')} />
      <Timeline items={experienceItems} icon={IoBookOutline} title={t('experience.title')} />
      <Skills items={skillsItems} title={t('skills.title')} />
    </PageContent>
  );
};

export default Resume;
