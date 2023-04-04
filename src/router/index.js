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
			children: [
				{
					path: 'contact',
					name: 'Contact',
					component: () => import('../views/ContactView.vue'),
				}
			]
		},
		{
			path: "/:catchall(.*)*",
			name: 'Not found',
			component: () => import('../views/404View.vue')
		}
		
	],
})

export default router