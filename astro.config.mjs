// @ts-check
import { defineConfig } from 'astro/config';

import compressor from "astro-compressor";

import solidJs from "@astrojs/solid-js";

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
  integrations: [compressor({ gzip: false, brotli: true }), solidJs()],
  build: {
    assets: '_patalcala',
  }
});