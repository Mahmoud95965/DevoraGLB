import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'مكتبة المشاريع العربية - DevoraGLB',
  description = 'منصة عربية متخصصة لمشاركة واكتشاف المشاريع البرمجية. شارك مشاريعك، تعلم من الآخرين، وكن جزءاً من مجتمع المطورين العرب المتنامي.',
  keywords = 'مكتبة المشاريع العربية, مشاريع برمجية, مطورين عرب, برمجة, تطوير, GitHub عربي, مشاريع مفتوحة المصدر, تعلم البرمجة, مجتمع المطورين, DevoraGLB',
  image = 'https://isav-academy.netlify.app/images/isav-hero.svg',
  url = 'https://isav-academy.netlify.app/',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}) => {
  const fullTitle = title.includes('DevoraGLB') ? title : `${title} | مكتبة المشاريع العربية - DevoraGLB`;
  const canonicalUrl = url.endsWith('/') ? url : `${url}/`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="مكتبة المشاريع العربية - DevoraGLB" />
      <meta property="og:locale" content="ar_SA" />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@DevoraGLB" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="Arabic" />
    </Helmet>
  );
};

export default SEOHead;
