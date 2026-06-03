import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from '@/components/Providers';

import '@/shared/styles/globals.scss';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://guia.ph'),
  title: {
    default: 'Guia - Premium Virtual Assistant Services from the Philippines',
    template: '%s | Guia',
  },
  description: 'Connect with reliable VA engineers and remote professionals in the Philippines. Save up to 70% on costs while accessing top-tier talent. 95% client retention rate.',
  keywords: ['virtual assistant', 'VA services', 'remote staffing', 'Philippines VA', 'remote professionals', 'offshore staffing', 'virtual employees'],
  authors: [{ name: 'Guia' }],
  creator: 'Guia',
  publisher: 'Guia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guia.ph',
    siteName: 'Guia',
    title: 'Guia - Premium Virtual Assistant Services from the Philippines',
    description: 'Connect with reliable VA engineers and remote professionals in the Philippines. Save up to 70% on costs while accessing top-tier talent.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Guia - Virtual Assistant Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guia - Premium Virtual Assistant Services from the Philippines',
    description: 'Connect with reliable VA engineers and remote professionals in the Philippines. Save up to 70% on costs.',
    images: ['/images/twitter-image.jpg'],
    creator: '@guia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
