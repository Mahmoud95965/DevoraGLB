import React from 'react';

interface CourseSchemaProps {
  name: string;
  description: string;
  provider: string;
  url: string;
  image?: string;
  duration?: string;
  courseMode?: string;
  educationalLevel?: string;
  inLanguage?: string;
  offers?: {
    price: string;
    currency: string;
    availability: string;
  };
}

const CourseSchema: React.FC<CourseSchemaProps> = ({
  name,
  description,
  provider,
  url,
  image = 'https://isav-academy.netlify.app/images/isav-hero.svg',
  duration,
  courseMode = 'online',
  educationalLevel,
  inLanguage = 'ar',
  offers
}) => {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "sameAs": "https://isav-academy.netlify.app/"
    },
    "url": url,
    "image": image,
    "inLanguage": inLanguage,
    "courseMode": courseMode,
    ...(duration && { "timeRequired": duration }),
    ...(educationalLevel && { "educationalLevel": educationalLevel }),
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "price": offers.price,
        "priceCurrency": offers.currency,
        "availability": `https://schema.org/${offers.availability}`
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(courseSchema)
      }}
    />
  );
};

export default CourseSchema;
