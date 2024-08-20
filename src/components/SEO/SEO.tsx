import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import i18n from '../../i18n';

import faviconPNG from '/favicon.png';

const img = {
  src: faviconPNG,
  width: 739,
  height: 1200,
};

const SEO: React.FC = () => {
  // Possibly add a different canonical URL too
  const baseUrl = 'https://semplaatsman.nl';
  const location = useLocation();
  const currUrl = `${baseUrl}${location.pathname}`;
  const { t } = useTranslation('seo');

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{t('title')}</title>
      <meta name="author" content={t('author')} />
      <meta name="description" content={t('siteDescription')} />
      <meta
        name="keywords"
        content={Object.values(t('keywords', { returnObjects: true })).join(', ')}
      />
      <link rel="canonical" href={currUrl} />

      {/* Basic OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currUrl} />
      <meta property="og:title" content={t('title')} />
      <meta property="og:description" content={t('siteDescription')} />
      <meta property="og:image" content={img.src} />
      <meta property="og:image:alt" content={t('imageAlt')} />
      <meta property="og:image:width" content={img.width.toString()} />
      <meta property="og:image:height" content={img.height.toString()} />

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
          url: currUrl,
          jobTitle: t('jobTitle'),
          sameAs: [t('linkedinUrl'), t('githubUrl'), t('portfolioUrl')],
          knowsAbout: t('knowsAbout', { returnObjects: true }),
          email: t('email'),
          gender: t('gender'),
          knowsLanguage: t('knowsLanguage', { returnObjects: true }),
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

// Ignore ESLint rule for exports, is most likely a false positive
// Source: https://stackoverflow.com/questions/77365777/how-to-avoid-eslint-warning-in-react-fast-refresh-only-works-when-a-file-only-e
/* eslint-disable react-refresh/only-export-components */
export default SEO;
