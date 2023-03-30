// zdefiniujmy nasze zasady routingu

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('../views/HomeView.vue'),
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/cars/:id',
			name: 'Car',
			component: () => import('../views/CarView.vue'),
		}
	],
})

export default router