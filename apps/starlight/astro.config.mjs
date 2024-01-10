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
					label: 'Storytelling',
					items: [
						{ label: 'Public Narrative', link: 'https://learning.weavers.org/storytelling/public-narrative' },
						{ label: 'Public Speaking', link: 'https://learning.weavers.org/storytelling/public-speaking' },
					],
				},
				{
					label: 'Gathering',
					items: [
						{ label: 'Facilitating Groups', link: 'https://learning.weavers.org/gathering/group-facilitation/' },
						{ label: 'Facilitating Circles', link: 'https://learning.weavers.org/gathering/circle-facilitation' },
					],
				},
				{
					label: 'Action: ABCD',
					items: [
						{
							label: 'Asset-Based Community Development',
							autogenerate: { directory: 'courses/asset-based-community-development' },
						},
					],
				},
			],
			customCss: [
				'./src/styles/wv-colors.scss',
				'./src/styles/wv-animations.scss',
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
