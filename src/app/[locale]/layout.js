
import { Inter } from 'next/font/google';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { generateMetadata } from './metadata';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const locales = ['uk', 'en'];

// Основний домен сайту
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://site-doer.vercel.app';

// OG Image
const ogImage = `${siteUrl}/og-image.png`;

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Set locale
  unstable_setRequestLocale(locale);

  // SEO configuration
  const seoConfig = generateMetadata({ locale });

  const pageUrl = `${siteUrl}/${locale}`;

  return (
    <html lang={locale}>
      <head>
        {/* SEO metadata */}
        <title>{seoConfig.title}</title>

        <meta
          name="description"
          content={seoConfig.description}
        />

        <meta
          name="keywords"
          content={seoConfig.keywords}
        />

        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale === 'uk' ? 'uk_UA' : 'en_US'} />
        <meta property="og:title" content={seoConfig.title} />
        <meta property="og:description" content={seoConfig.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content={seoConfig.title} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1648" />
        <meta property="og:image:height" content="928" />
        <meta
          property="og:image:alt"
          content="Web developer portfolio"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoConfig.title} />
        <meta name="twitter:description" content={seoConfig.description} />
        <meta name="twitter:image" content={ogImage} />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
