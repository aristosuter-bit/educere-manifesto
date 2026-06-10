import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'fr', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
