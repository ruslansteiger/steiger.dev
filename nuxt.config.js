export default {
	mode: 'universal',

	/* Headers of the page */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
			{name: 'author', content: process.env.npm_package_author_name || ''},
			{name: 'og:type', content: 'website'},
			{name: 'og:url', content: 'https://ruslansteiger.app/'},
			{name: 'og:title', content: process.env.npm_package_name || ''},
			{name: 'og:description', content: process.env.npm_package_description || ''},
			{name: 'og:image', content: 'https://avatars0.githubusercontent.com/u/14092921'},
			{name: 'twitter:card', content: 'summary_large_image'},
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
		]
	},

	/* Customize the progress-bar color */
	loading: {color: '#fff'},

	/* Global CSS */
	css: [
		'~/assets/css/main.css',
	],

	/* Plugins to load before mounting the App */
	plugins: [],

	/* Nuxt.js dev-modules */
	buildModules: [
		'@nuxtjs/tailwindcss',
	],

	/* Nuxt.js modules */
	modules: [
		'@nuxtjs/pwa',
	],

	/* Build configuration */
	build: {
		/* You can extend webpack config here */
		extend(config, ctx) {}
	},
}
