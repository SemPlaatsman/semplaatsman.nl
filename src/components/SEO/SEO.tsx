import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const SEO: React.FC = () => {
  // Possibly add a different canonical URL too
  const siteUrl = 'https://semplaatsman.nl';
  const { t } = useTranslation('seo');

  return (
    <Helmet>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta
        name="keywords"
        content={Object.values(t('keywords', { returnObjects: true })).join(', ')}
      />
      <link rel="canonical" href={siteUrl} />

      {/* Basic OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('description')} />
    </Helmet>
  );
};

export default SEO;
