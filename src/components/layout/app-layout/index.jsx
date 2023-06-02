import React from 'react';
import Navbar from '../../ui/navbar';
import Footer from '../../ui/footer';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
	return (
		<React.Fragment>
			<Navbar />
			<main className='container grow'>
				<Outlet />
			</main>
			<Footer />
		</React.Fragment>
	);
}
