import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
		'/gathering/group-facilitation': '/courses/group-facilitation/',
		'/gathering/circle-facilitation': '/courses/circle-facilitation/',
		'/action/asset-based-community-development': '/courses/asset-based-community-development/',
		'/storytelling/public-speaking': '/courses/public-speaking/',
		'/storytelling/public-narrative': '/courses/public-narrative/'
	},
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
						text: 'Storytelling',
						variant: 'tip'
					},
					autogenerate: { directory: 'courses/public-speaking' },
				},
				{
					label: 'Types of Gatherings',
					collapsed: true,
					badge: {
						text: 'Gatherings',
						variant: 'danger'
					},
					autogenerate: { directory: 'courses/types-of-gathering' },
				},
				{
					label: 'Facilitation',
					collapsed: true,
					badge: {
						text: 'Gatherings',
						variant: 'danger'
					},
					autogenerate: { directory: 'courses/facilitation' },
				},
				{
					label: ‘Types of Gatherings’,
					collapsed: true,
					badge: {
						text: ‘Gatherings’,
						variant: ‘danger’
					},
					autogenerate: { directory: ‘courses/types-of-gatherings’ },
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
				{
					label: 'Atlas CareMapping',
					collapsed: true,
					badge: {
						text: 'Action',
						variant: 'caution'
					},
					autogenerate: { directory: 'courses/caremapping' },
				},
				{
					label: 'Starting a Nonprofit',
					collapsed: true,
					badge: {
						text: 'Leadership',
						variant: 'success'
					},
					autogenerate: { directory: 'courses/starting-a-nonprofit' },
				},
				{
					label: 'Pitching Your Nonprofit',
					collapsed: true,
					badge: {
						text: 'Leadership',
						variant: 'success'
					},
					autogenerate: { directory: 'courses/pitching-your-nonprofit' },
				},
				{
					label: 'Creating Impact on Social Media',
					collapsed: true,
					badge: {
						text: 'Leadership',
						variant: 'success'
					},
					autogenerate: { directory: 'courses/creating-impact-on-social-media' },
				},
				{
					label: 'Grant Writing',
					collapsed: true,
					badge: {
						text: 'Leadership',
						variant: 'success'
					},
					autogenerate: { directory: 'courses/grant-writing' },
				},
			],
			customCss: [
				'./src/styles/wv-animations.scss',
				'./src/styles/wv-colors.scss',
				'./src/styles/wv-layout.scss',
				'./src/styles/wv-typography.scss',
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
