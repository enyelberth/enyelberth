// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Enyelberth Rodríguez',
			description: 'Full Stack Developer especializado en productos web robustos y claros.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/enyelberth' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/enyelberth' },
			],
			sidebar: [
				{
					label: 'Perfil',
					items: [
						{ label: 'Inicio', slug: '' },
					],
				},
			],
		}),
	],
});
