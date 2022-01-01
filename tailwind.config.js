const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./app.vue', './nuxt.config.{js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
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
	plugins: [require('@tailwindcss/aspect-ratio')],
}
