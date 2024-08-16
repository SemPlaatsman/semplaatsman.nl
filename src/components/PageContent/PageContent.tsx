import React from 'react';
import styles from './PageContent.module.scss';
import { useTranslation } from 'react-i18next';
import { getCurrentRouteConfig } from '../../routes/routes';

interface PageContentProps {
  title?: string;
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
  const routeConfig = getCurrentRouteConfig();
  const { t } = useTranslation(routeConfig?.pageKey);

  return (
    <article className={`container page-content ${styles.pageContent} ${className || ''}`}>
      <header>
        <h2 className={`h2 ${styles.pageTitle} ${titleClassName || ''}`}>{title ?? t('title')}</h2>
      </header>
      {children}
    </article>
  );
};

export default PageContent;
