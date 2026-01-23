import '../styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HackerHub',
    template: '%s | HackerHub',
  },
  description: 'Cybersecurity learning, tools, and resources.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'HackerHub',
    siteName: 'HackerHub',
    description: 'Cybersecurity learning, tools, and resources.',
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackerHub',
    description: 'Cybersecurity learning, tools, and resources.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3777556489220566" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3777556489220566"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
