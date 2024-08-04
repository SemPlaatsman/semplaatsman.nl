import React from 'react';
import styles from './Skills.module.scss';
import SkillItem from './SkillItem';

interface SkillsProps {
  items: SkillItem[];
  title: string;
}

const Skills: React.FC<SkillsProps> = ({ title, items }) => {
  return (
    <section className={styles.skills}>
      <h3 className={`h3 ${styles.skillsTitle}`}>{title}</h3>
      <ul className={`${styles.skillsList}`}>
        {items.map((item, index) => (
          <li key={index} className={styles.skillItem}>
            <div className={styles.titleWrapper}>
              <h5 className="h5">{item.skill}</h5>
              <data value={item.percentage}>{item.percentage}%</data>
            </div>
            <div className={styles.skillProgressBg}>
              <div
                className={styles.skillProgressFill}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
