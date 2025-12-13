import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blog.heatshockpineapple.com', 
  trailingSlash: 'never', // optional, but pick a stance
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
});