import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import React from 'react';

import AppLayout from '../components/layout/app-layout';
import { lazyImport } from '../lib/utils';
import { Spinner } from '../components/ui/spinner';

const { Home } = lazyImport(() => import('../pages'), 'Home');
const { Gallery } = lazyImport(() => import('../pages'), 'Gallery');

const App = () => {
	return (
		<React.Suspense
			fallback={
				<div className='h-screen w-full flex items-center justify-center'>
					<Spinner size='xl' />
				</div>
			}
		>
			<AppLayout>
				<Outlet />
			</AppLayout>
		</React.Suspense>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
			{ path: '*', element: <Navigate to='.' /> },
		],
	},
]);

export default router;
