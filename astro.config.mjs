import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mikasaak.github.io',
	// base: '/myblog',
	// base: '/',
	integrations: [mdx(), sitemap()],
	server:{
		port: 8888
	}
});
