import { createApp, h } from 'vue'

import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import CurriculumVitae from './pages/CurriculumVitae.vue'

const routes = {
	'/': Home,
	'/cv': CurriculumVitae,
}

const SimpleRouter = {
	data: () => ({
		currentRoute: window.location.pathname,
	}),

	computed: {
		CurrentComponent() {
			return routes[this.currentRoute] || NotFound
		},
	},

	render() {
		return h(this.CurrentComponent)
	},

	created() {
		window.addEventListener('popstate', () => {
			this.currentRoute = window.location.pathname
		})
	},
}

createApp(SimpleRouter).mount('#app')
