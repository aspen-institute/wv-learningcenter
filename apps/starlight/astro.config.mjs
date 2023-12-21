import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Weave Learning Center',
			social: {
				github: 'https://github.com/withastro/starlight',
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
					label: 'Action',
					items: [
						{ label: 'Asset-Based Community Development', link: '/courses/asset-based-community-development/' },
					],
				},
			],
			customCss: [
				'./src/styles/wv-colors.scss'
			],
		}),
	],
});
