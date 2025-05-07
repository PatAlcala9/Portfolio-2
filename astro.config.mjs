// @ts-check
import { defineConfig } from 'astro/config';

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
        preprocessorOptions: {
            sass: {
                api: "modern-compiler"
            }
        }
    }
},
  integrations: [compressor({ gzip: false, brotli: true })],
  build: {
    assets: '_patalcala',
  }
});