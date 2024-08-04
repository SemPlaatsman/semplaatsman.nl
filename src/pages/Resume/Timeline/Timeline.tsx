import React from 'react';
import IconBox from '../../../components/IconBox';
import styles from './Timeline.module.scss';
import TimelineItem from './TimelineItem';

interface TimelineProps {
  items: TimelineItem[];
  icon: React.ReactNode;
  title: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, icon, title }) => {
  return (
    <section className={styles.timeline}>
      <div className={styles.titleWrapper}>
        <IconBox>{icon}</IconBox>
        <h3 className="h3">{title}</h3>
      </div>
      <ol className={styles.timelineList}>
        {items.map((item, index) => (
          <li key={index} className={styles.timelineItem}>
            <h4 className={`h4 ${styles.timelineItemTitle}`}>{item.title}</h4>
            <span>{item.period}</span>
            <p className={styles.timelineText}>{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Timeline;
