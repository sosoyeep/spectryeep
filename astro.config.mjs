import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lastmodFor } from './sitemap-lastmod.mjs';

export default defineConfig({
  site: 'https://spectryeep.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'es', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
      // <lastmod> per URL: last git commit date of the page's own source files
      // (page, template, data); falls back to the build date if none resolve.
      serialize(item) {
        item.lastmod = lastmodFor(item.url) ?? new Date().toISOString();
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru', es: 'es', ar: 'ar-SA' },
      },
    }),
  ],
});
