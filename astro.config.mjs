// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://drbenkovich.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
  // Keep existing slugs to preserve SEO. 301 redirects here will ONLY map
  // genuinely pruned/duplicate URLs → their surviving canonical page (migration pass).
  redirects: {},
});
