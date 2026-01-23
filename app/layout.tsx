import '../styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HackerHub | Premium Cybersecurity Tools & Ethical Hacking Resources',
    template: '%s | HackerHub',
  },
  description: 'HackerHub is the ultimate open-source platform for cybersecurity professionals, ethical hackers, and security researchers. Explore our massive library of top-tier hacking tools (Nmap, Metasploit, Burp Suite, and more), read in-depth tutorials, and access privacy-focused resources designed to accelerate your InfoSec career. Whether you are performing penetration testing, bug bounty hunting, or network defense, HackerHub provides the essential tools and knowledge you need.',
  keywords: ['Cybersecurity', 'Ethical Hacking', 'Penetration Testing', 'Hacking Tools', 'InfoSec', 'Bug Bounty', 'Network Security', 'Web Application Security', 'Kali Linux', 'Nmap', 'Metasploit', 'Burp Suite', 'Wireshark', 'CTF', 'OSCP', 'Security Research', 'Privacy', 'Open Source', 'Red Team', 'Blue Team'],
  authors: [{ name: 'HackerHub Community' }],
  creator: 'HackerHub',
  publisher: 'HackerHub',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'HackerHub | Premium Cybersecurity Tools & Ethical Hacking Resources',
    siteName: 'HackerHub',
    description: 'Master cybersecurity with HackerHub. Explore our curated database of elite hacking tools, comprehensive guides, and expert resources. Designed for privacy, performance, and professionals. Join the open-source revolution.',
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'HackerHub - Cybersecurity Tools and Resources' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HackerHub | Premium Cybersecurity Tools',
    description: 'The premier open-source platform for ethical hacking tools and cybersecurity education. Explore, learn, and master the art of security.',
    images: ['/opengraph-image'],
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
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
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
