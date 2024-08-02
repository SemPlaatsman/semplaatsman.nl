import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import i18n from '../../i18n';

const SEO: React.FC = () => {
  // Possibly add a different canonical URL too
  const siteUrl = 'https://semplaatsman.nl';
  const { t } = useTranslation('seo');

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t('title')}</title>
      <meta name="author" content={t('author')} />
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

      {/* Structured data for a person (adjust as needed) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: t('author'),
          givenName: t('givenName'),
          familyName: t('familyName'),
          additionalName: t('additionalName'),
          description: t('personDescription'),
          url: siteUrl,
          jobTitle: t('jobTitle'),
          sameAs: [t('linkedinUrl'), t('githubUrl'), t('portfolioUrl')],
          knowsAbout: t('knowsAbout', { returnObjects: true }) as string[],
          email: t('email'),
          gender: t('gender'),
          knowsLanguage: t('knowsLanguage', { returnObjects: true }) as string[],
          nationality: t('nationality'),
          address: {
            '@type': 'PostalAddress',
            addressLocality: t('addressLocality'),
            addressCountry: t('addressCountry'),
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
