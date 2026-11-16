import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',

  site: 'https://mniehus.github.io',
  base: '/isel-newspace',
  trailingSlash: 'always',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});