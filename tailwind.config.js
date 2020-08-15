const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: ['./public/index.html'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				spin: 'spin 3s linear infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
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
