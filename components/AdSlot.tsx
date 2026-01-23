'use client';
import { useEffect } from 'react';

type Provider = 'adsense' | 'placeholder';

type Props = {
  provider?: Provider;
  slotId?: string;
  className?: string;
  style?: React.CSSProperties;
};

declare global {
  interface Window { adsbygoogle: any[]; }
}

export function AdSlot({ provider = 'placeholder', slotId, className, style }: Props) {
  useEffect(() => {
    if (provider === 'adsense') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {}
    }
  }, [provider]);

  if (provider === 'adsense') {
    const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
    if (!client || !slotId) return null;
    return (
      <>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
          crossOrigin="anonymous"
        />
        <ins
          className={`adsbygoogle block ${className || ''}`}
          style={style || { display: 'block' }}
          data-ad-client={client}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </>
    );
  }

  return (
    <div className={`bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center ${className || ''}`}>
      <p className="text-neutral-400 text-sm">Ad placeholder</p>
    </div>
  );
}
