import React from 'react';
import styles from './PageContent.module.scss';

interface PageContentProps {
  title: string;
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({
  title,
  className,
  titleClassName,
  children,
}) => {
  return (
    <article className={`page-content ${styles.pageContent} ${className ?? ''}`}>
      <header>
        <h2 className={`h2 ${styles.pageTitle} ${titleClassName ?? ''}`}>{title}</h2>
      </header>
      {children}
    </article>
  );
};

export default PageContent;
