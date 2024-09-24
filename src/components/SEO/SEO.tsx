import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import i18n from '../../i18n';
import { faviconImgMap } from '../../config/assetMaps/seoMaps';
import { useCurrentRouteConfig } from '../../routes/routes';
import config from '../../config';

const SEO: React.FC = () => {
  // Possibly add a different canonical URL too
  const baseUrl = config.app.baseUrl;
  const location = useLocation();
  const currUrl = `${baseUrl}${location.pathname}`;
  const { t } = useTranslation('seo');
  const currentRoute = useCurrentRouteConfig();

  // Create breadcrumb items based on the current path and route configuration
  const breadcrumbItems = [];
  if (location.pathname !== '/') {
    // Add "About" as the first item for all pages except the root
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 1,
      name: 'about', // Could be adjusted later to add a translation
      item: baseUrl,
    });
  }

  if (currentRoute) {
    if (currentRoute.path.includes(':slug')) {
      // For project detail pages
      breadcrumbItems.push(
        {
          '@type': 'ListItem',
          position: breadcrumbItems.length + 1,
          name: currentRoute.pageKey, // Could be adjusted later to add a translation
          item: `${baseUrl}/projects`,
        },
        {
          '@type': 'ListItem',
          position: breadcrumbItems.length + 2,
          name: currentRoute.pageKey, // Could be adjusted later to add a translation
          item: currUrl,
        }
      );
    } else {
      // For other pages
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: breadcrumbItems.length + 1,
        name: currentRoute.pageKey, // Could be adjusted later to add a translation
        item: currUrl,
      });
    }
  }

  return (
    <Helmet htmlAttributes={{ lang: new Intl.Locale(i18n.language).language }}>
      <title>{t('title')}</title>
      <meta name="author" content={config.owner.fullName} />
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
      <meta property="og:image" content={faviconImgMap.src} />
      <meta property="og:image:alt" content={t('imageAlt')} />
      <meta property="og:image:width" content={faviconImgMap.width.toString()} />
      <meta property="og:image:height" content={faviconImgMap.height.toString()} />

      {/* Structured data for a person (adjust as needed) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${baseUrl}/#website`,
              url: baseUrl,
              name: t('title'),
              description: t('siteDescription'),
              inLanguage: i18n.language,
            },
            {
              '@type': 'BreadcrumbList',
              '@id': `${currUrl}/#breadcrumb`,
              itemListElement: breadcrumbItems,
            },
            {
              '@type': 'Person',
              name: config.owner.fullName,
              givenName: config.owner.firstName,
              familyName: config.owner.lastName,
              additionalName: config.owner.additionalName,
              description: t('personDescription'),
              url: currUrl,
              jobTitle: t('jobTitle'),
              sameAs: [
                config.externalLinks.linkedin,
                config.externalLinks.github,
                config.app.baseUrl,
              ],
              knowsAbout: config.owner.knowsAbout,
              email: config.email.address,
              gender: config.owner.gender,
              knowsLanguage: config.owner.knowsLanguage,
              nationality: config.owner.nationality,
              address: {
                '@type': 'PostalAddress',
                addressLocality: config.owner.addressLocality,
                addressCountry: config.owner.addressCountry,
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
};

// Ignore ESLint rule for exports, is most likely a false positive
// See: https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main?tab=readme-ov-file#limitations
// And: https://stackoverflow.com/questions/77365777/how-to-avoid-eslint-warning-in-react-fast-refresh-only-works-when-a-file-only-e
// eslint-disable-next-line react-refresh/only-export-components
export default SEO;
