import { defineConfig, squooshImageService } from 'astro/config';
import icon from 'astro-icon';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
    }),
  ],
  image: {
    service: squooshImageService(),
  },
  output: 'server',
  adapter: netlify(),
});
