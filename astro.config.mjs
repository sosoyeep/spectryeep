import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
      // <lastmod> on every URL: the build (deploy) date.
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ru: 'ru', es: 'es', ar: 'ar-SA' },
      },
    }),
  ],
});
