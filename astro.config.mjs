// @ts-check
import { defineConfig } from 'astro/config'

import compressor from 'astro-compressor'
import solidJs from '@astrojs/solid-js'
import purgecss from 'astro-purgecss'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler',
        },
      },
    },
  },
  integrations: [
    compressor({ gzip: false, brotli: true }),
    solidJs(),
    robotsTxt(),
    purgecss({
      fontFace: true,
      variables: true,
    }),
  ],
  build: {
    assets: '_patalcala',
    inlineStylesheets: 'never',
  },
})
