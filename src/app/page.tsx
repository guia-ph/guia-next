import type { Metadata } from 'next';
import { PageContent } from '@/components/PageContent';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Guia connects businesses with exceptional remote talent from the Philippines. Access top-tier VA engineers and professionals at up to 70% cost savings. Join 150+ happy clients with 95% retention rate.',
  openGraph: {
    title: 'Guia - Your Remote Team Partner',
    description: 'Connect with reliable VA engineers and remote professionals in the Philippines. Save up to 70% on costs while accessing top-tier talent.',
    url: 'https://guia.team',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guia Virtual Assistant Services',
      },
    ],
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Guia',
    url: 'https://guia.team',
    logo: 'https://guia.team/guia-logo.png',
    description: 'Premium virtual assistant and remote staffing services from the Philippines',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PH',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
    sameAs: [
      // Add your social media URLs here
      // 'https://facebook.com/guia',
      // 'https://linkedin.com/company/guia',
      // 'https://twitter.com/guia',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      description: 'Virtual Assistant and Remote Staffing Services',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageContent />
    </>
  );
}
