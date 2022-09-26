import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main';
import Login from '@/pages/Login';

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
		meta: { title: '로그인 | Login' },
	},

];
const router = createRouter( {
	history: createWebHistory(),
	routes,
} );

const defaultTitle = 'Store Up';
router.beforeEach( ( to, from ) => {
	window.document.title = to.meta.title ? to.meta.title : defaultTitle;
} );
export default router;