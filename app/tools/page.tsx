import type { Metadata } from 'next';
import { tools } from '../../content/tools';
import { AdSlot } from '../../components/AdSlot';
import ToolsListClient from './ToolsListClient';

export default function Tools() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Tools</h1>
      <p className="text-neutral-400 mt-2">Curated tools for security practitioners.</p>

      <AdSlot provider={process.env.NEXT_PUBLIC_ADSENSE_CLIENT ? 'adsense' : 'placeholder'} slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} className="my-6" />

      <ToolsListClient tools={tools} />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Curated cybersecurity tools with explanations, installation, and usage guides.',
  alternates: { canonical: '/tools' },
  openGraph: {
    title: 'Tools | HackerHub',
    description: 'Curated cybersecurity tools with explanations, installation, and usage guides.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tools | HackerHub',
    description: 'Curated cybersecurity tools with explanations, installation, and usage guides.',
  },
};
