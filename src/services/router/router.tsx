import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LoginView = lazy(() => import('@views/Login/LoginView'));
const RegisterUserView = lazy(() => import('@views/Register/RegisterView'));
const ListProductsView = lazy(() => import('@views/Products/ListProducts/ListProductsView'));

type RemixRouter = ReturnType<typeof createBrowserRouter>;

export const Router: RemixRouter = createBrowserRouter(
	[
		{
			id: 'login-view',
			path: '/login',
			element: (
				<Suspense fallback={<div>Loading...</div>}>
						<LoginView />
				</Suspense>
			),
		},
    {
			id: 'register-user-view',
			path: '/register-user',
			element: (
				<Suspense fallback={<div>Loading...</div>}>
						<RegisterUserView />
				</Suspense>
			),
		},
    {
			id: 'list-products-view',
			path: '/products',
			element: (
				<Suspense fallback={<div>Loading...</div>}>
						<ListProductsView />
				</Suspense>
			),
		},
	],
	{ basename: '/',  },
);
