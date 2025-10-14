import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
  category?: string;
  tags?: string[];
}

const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  author,
  publishedDate,
  modifiedDate,
  image = 'https://isav-academy.netlify.app/images/isav-hero.svg',
  url,
  category,
  tags = []
}) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "مكتبة المشاريع العربية - DevoraGLB",
      "logo": {
        "@type": "ImageObject",
        "url": "https://isav-academy.netlify.app/images/isav-hero.svg"
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "inLanguage": "ar",
    ...(category && { "articleSection": category }),
    ...(tags.length > 0 && { "keywords": tags.join(", ") })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema)
      }}
    />
  );
};

export default ArticleSchema;
