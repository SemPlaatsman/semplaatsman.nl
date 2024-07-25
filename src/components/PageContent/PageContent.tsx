import React from 'react';

interface PageContentProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ title, className, children }) => {
  return (
    <article className={`article-content ${className ?? ''}`}>
      <header>
        <h2 className="h2 article-title">{title}</h2>
      </header>
      {children}
    </article>
  );
};

export default PageContent;
