import React from 'react';
import { useTranslation } from 'react-i18next';
import { MDXProvider } from '@mdx-js/react';

interface MDXWrapperProps {
  children: React.ReactNode;
  slug: string;
}

const MDXWrapper: React.FC<MDXWrapperProps> = ({ children, slug }) => {
  const { t } = useTranslation(`projects/${slug}`);

  const components = {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <div className="mdx-wrapper">{children}</div>
    ),
  };

  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, { t });
    }
    return child;
  });

  return <MDXProvider components={components}>{enhancedChildren}</MDXProvider>;
};

export default MDXWrapper;
