import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';

import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';

import { rehypeTasklistEnhancer } from './plugins/rehype-tasklist-enhancer';

const VERCEL_PREVIEW_SITE =
	process.env.VERCEL_ENV !== 'production' &&
	process.env.VERCEL_URL &&
	`https://${process.env.VERCEL_URL}`;

const siteURL = VERCEL_PREVIEW_SITE || 'https://learning.weavers.org/';

// https://astro.build/config
export default defineConfig({
	site: siteURL,
	redirects: {
		'/gathering/group-facilitation': '/courses/group-facilitation',
		'/gathering/circle-facilitation': '/courses/circle-facilitation',
		'/action/asset-based-community-development': '/courses/asset-based-community-development',
		'/storytelling/public-speaking': 'https://legacy.learning.weavers.org/storytelling/public-narrative',
		'/storytelling/public-narrative': '/courses/public-narrative'
	},
	output: 'hybrid',
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	integrations: [
		starlight({
			title: 'Weave Learning Center',
			logo: {
				light: '/src/assets/wv-learningcenter-logo.svg',
				dark: '/src/assets/wv-learningcenter-logo-white.svg',
				replacesTitle: true,
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.usefathom.com/script.js',
						'data-site': 'TMSFJGNL',
						defer: true,
					},
				}
			],
			favicon: '/favicon.png',
			social: {
				email: 'mailto:weave@aspeninstitute.org',
			},
			// TODO: set some custom badge variants https://starlight.astro.build/guides/sidebar/#badges
			sidebar: [
				{
					label: 'Public Narrative',
					collapsed: true,
					badge: {
						text: 'Storytelling',
						variant: 'tip'
					},
					autogenerate: { directory: 'courses/public-narrative' },
				},
				{
					label: 'Public Speaking',
					collapsed: true,
					badge: {
						text: 'Coming Soon',
						variant: 'success'
					},
					link: '#',
					// autogenerate: { directory: 'courses/public-speaking' },
				},
				{
					label: 'Facilitating Circles',
					collapsed: true,
					badge: {
						text: 'Gatherings',
						variant: 'danger'
					},
					autogenerate: { directory: 'courses/circle-facilitation' },
				},
				{
					label: 'Facilitating Groups',
					collapsed: true,
					badge: {
						text: 'Gatherings',
						variant: 'danger'
					},
					autogenerate: { directory: 'courses/group-facilitation' },
				},
				{
					label: 'Asset-Based Community Development',
					collapsed: true,
					badge: {
						text: 'Action',
						variant: 'caution'
					},
					autogenerate: { directory: 'courses/asset-based-community-development' },
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
