import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';

import { rehypeTasklistEnhancer } from './plugins/rehype-tasklist-enhancer';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Weave Learning Center',
			social: {
				email: 'mailto:weave@aspeninstitute.org',
			},
			sidebar: [
				{
					label: 'All Courses',
					autogenerate: { directory: 'courses' },
				}
			],
			customCss: [
				'./src/styles/wv-colors.scss'
			],
		}),
	],
	trailingSlash: 'always',
	markdown: {
		// Override with our own config
		smartypants: false,
		remarkPlugins: [
			remarkSmartypants,
		],
		rehypePlugins: [
			rehypeSlug,
			// Tweak GFM task list syntax
			rehypeTasklistEnhancer(),
		],
	},
});
