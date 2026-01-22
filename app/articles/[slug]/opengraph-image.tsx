import { ImageResponse } from 'next/og';
import { articles } from '../../../content/articles';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  const title = article ? article.title : 'Article Not Found';
  const subtitle = article ? article.category : '';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px',
          background: '#0a0a0a',
          color: '#e5e7eb',
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, color: '#5a97ff' }}>HackerHub</div>
        <div style={{ height: 16 }} />
        <div style={{ fontSize: 56, fontWeight: 700 }}>{title}</div>
        {subtitle && <div style={{ fontSize: 28, color: '#9ca3af', marginTop: 8 }}>{subtitle}</div>}
      </div>
    ),
    { ...size }
  );
}
