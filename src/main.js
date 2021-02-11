import { createApp, h } from 'vue'

import NotFound from './NotFound.vue'
import Home from './Home.vue'
import CurriculumVitae from './CurriculumVitae.vue'

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
}

createApp(SimpleRouter).mount('#app')
