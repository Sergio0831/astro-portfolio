import { defineConfig, squooshImageService } from 'astro/config';
import icon from 'astro-icon';

import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
    }),
    mdx(),
  ],
  image: {
    service: squooshImageService(),
  },
  output: 'hybrid',
  adapter: netlify(),
});
