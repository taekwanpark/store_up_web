import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main';
import Login from '@/views/Login';

const routes = [
	{
		path: '/',
		name: 'main',
		component: Main,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},

];

const router = createRouter( {
	history: createWebHistory(),
	routes,
} );

export default router;