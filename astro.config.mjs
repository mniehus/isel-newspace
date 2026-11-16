import { defineConfig } from 'astro/config';
export default defineConfig({
  output:'static', base:process.env.PUBLIC_BASE || '/', 
  i18n:{defaultLocale:'pt', locales:['pt','en'], routing:{prefixDefaultLocale:false}}
});
