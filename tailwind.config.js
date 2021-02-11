const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./index.html', './src/**/*.vue'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'light-blue': colors.lightBlue,
				'cyan': colors.cyan,
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
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
}
