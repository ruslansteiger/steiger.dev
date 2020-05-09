const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./public/index.html'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},

	variants: [
		'responsive',
		'group-hover',
		'focus-within',
		'first',
		'last',
		'odd',
		'even',
		'hover',
		'focus',
		'active',
		'visited',
		'disabled',
	],
}
