import { toolDetails } from './toolDetails';

export const tools = toolDetails.map(tool => ({
  slug: tool.slug,
  name: tool.name,
  description: tool.overview,
  category: tool.category,
  url: tool.website || '',
}));
