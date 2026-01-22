import type { MetadataRoute } from 'next';
import { articles } from '../content/articles';
import { tools } from '../content/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/articles',
    '/tools',
    '/resources',
    '/contribute',
  ].map((path) => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteUrl}/articles/${a.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const toolRoutes: MetadataRoute.Sitemap = tools.map((t) => ({
    url: `${siteUrl}/tools/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...articleRoutes, ...toolRoutes];
}
