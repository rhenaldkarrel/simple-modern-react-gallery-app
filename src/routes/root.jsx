import { createBrowserRouter } from 'react-router-dom';
import { Gallery, Home } from '../pages';
import AppLayout from '../components/layout/app-layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
		],
	},
]);

export default router;
