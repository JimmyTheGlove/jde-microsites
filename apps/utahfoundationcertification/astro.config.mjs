import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // Include workspace packages for proper SSR bundling
      noExternal: ['ui', 'firebase', 'tailwind-config'],
    },
  },
});
