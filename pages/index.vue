<template>
	<div class="overflow-hidden">
		<main class="flex justify-center items-center">
			<h1 class="m-0 px-4 py-3 bg-white text-center text-4xl font-thin cursor-help shadow-lg border-l border-red-500 leading-normal sm:leading-tight slide-in"
				:title="motivationalHover"
			>
				{{ motivational1 }} <span class="inline-block shake">🎁</span>
				<br class="sm:hidden">
				{{ motivational2 }} <span class="inline-block rotate">🌍</span>
			</h1>
		</main>

		<a class="absolute right-0 bottom-0 p-2 text-black hover:text-gray-700"
			href="https://github.com/SuddenlyRust/ruslansteiger.app"
			title="Github repository of my wonderful homepage. Check it out my friend!"
			target="_blank"
			rel="noopener"
		>
			<!--
				Shout-out to the Ionic Team (https://github.com/ionic-team/) for
				sharing these premium designed icons with the world. Cheers.

				Source: https://ionicons.com/
			-->
			<svg class="h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"/>
			</svg>
		</a>
	</div>
</template>

<script>
export default {
    data() {
        return {
            motivational1: "Du bist ein",
            motivational2: "für die",
            motivationalHover: "Ja, genau DU bist gemeint❗"
        }
    },
    mounted() {
        /**
         * Enable CSS pseudo selector style for the iPhone. Thank you Alex.
         *
         * Source: https://alxgbsn.co.uk/2011/10/17/enable-css-active-pseudo-styles-in-mobile-safari/
         */
        document.addEventListener('touchstart', function () {}, false)

        // English
        // Let us not forget the actual brain behind this translation, Max.
        if (navigator.language.startsWith('en')) {
            changeBrowserLanguage()

            this.motivational1 = "You are a"
            this.motivational2 = "for the"
            this.motivationalHover = "Yes, it's YOU I'm talking about❗"
        }

        // French
        // Thanks to the fantastic Margot who helped to make this possible.
        if (navigator.language.startsWith('fr')) {
            changeBrowserLanguage()

            this.motivational1 = "Tu es un"
            this.motivational2 = "pour le"
            this.motivationalHover = "Oui, c'est bien de TOI dont je parle❗"
        }
	
	    // Czech
        // Thanks to the fantastic Jen🔥 who helped to make this possible.
        if (navigator.language.startsWith('cs')) {
            changeBrowserLanguage()

            this.motivational1 = "Ty jsi"
            this.motivational2 = "pro"
            this.motivationalHover = "Ano, jsi to TY o kom mluvím❗"
        }

        function changeBrowserLanguage() {
            document.querySelector('html').lang = navigator.language
        }

        /**
		 * Trick mobile browser to use 100% of the screen height.
		 *
		 * Source: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
         */
        fullHeight()

        window.addEventListener('resize', () => { fullHeight() })

        function fullHeight() {
            let vh = window.innerHeight * 0.01

            document.documentElement.style.setProperty('--vh', `${vh}px`)
		}
    }
}
</script>
