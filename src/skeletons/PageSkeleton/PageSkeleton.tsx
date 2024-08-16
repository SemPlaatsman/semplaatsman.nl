import React from 'react';
import PageContent from '../../components/PageContent';
import styles from './PageSkeleton.module.scss';
import Skeleton from 'react-loading-skeleton';

const PageSkeleton: React.FC = () => {
  return (
    <PageContent>
      <div className={styles.pageSkeletonContent}>
        <Skeleton className={styles.title} />
        <br />
        <Skeleton count={5} />
        <br />
        <br />
        <Skeleton className={styles.title} />
        <br />
        <Skeleton count={5} />
      </div>
    </PageContent>
  );
};

export default PageSkeleton;
