import { createBrowserRouter } from 'react-router-dom';
import { Gallery, Home } from '../pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/gallery',
		element: <Gallery />,
	},
]);

export default router;
