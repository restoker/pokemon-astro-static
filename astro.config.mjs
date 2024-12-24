// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import glsl from 'vite-plugin-glsl';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    svg: {
      mode: 'sprite',
    }
  },
  vite: {
    plugins: [glsl()]
  }
});