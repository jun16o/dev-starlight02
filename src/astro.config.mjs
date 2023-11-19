import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dev03.jun16o.net',
	base: '/dev-starlight02',
	integrations: [
		starlight({
			title: 'Help site',
			favicon: '/favicon.svg',
			// logo: {
			// 	alt: 'サービス名',
			// 	replacesTitle: false,
			// 	light: '/src/assets/images/web_logo_x01.png',
			// 	dark: '/src/assets/images/web_white_logo_x01.png',
			// },
			customCss: [
				'/src/assets/styles/custom.css',
			],
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
