import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

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
					label: 'Courses',
					autogenerate: { directory: 'courses' },
				}
			],
			customCss: [
				'./src/styles/wv-colors.scss'
			],
		}),
	],
});
