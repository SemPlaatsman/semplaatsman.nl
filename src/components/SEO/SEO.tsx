import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords = [], 
  canonicalUrl,
  structuredData
}) => {
  const siteUrl = 'https://semplaatsman.nl'; // Replace with your actual URL
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Basic OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;