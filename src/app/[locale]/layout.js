import { Inter } from 'next/font/google';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { generateMetadata } from './metadata'; // Припустимо, що у вас є файл з функцією generateMetadata
import Link from 'next/link';

import './globals.css'; // Підключення глобальних стилів CSS

const inter = Inter({ subsets: ['latin'] });
const locales = ['uk', 'en'];

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
    return null;
  }

  // Set locale using next-intl
  unstable_setRequestLocale(locale);
 
  // Generate metadata based on the locale
  const seoConfig = generateMetadata({ locale });
   
  return (
    <>
      <html lang={locale}>
        <head>
          {/* Include global font styles */}
          <style>{inter.FontStyle}</style>
          {/* SEO metadata */}
          <title>{seoConfig.title}</title>
          <meta name="description" content={seoConfig.description} />
          <meta name="keywords" content={seoConfig.keywords} />
          {/* Other meta tags */}
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
