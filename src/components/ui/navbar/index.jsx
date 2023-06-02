import NavLink from './NavLink';

export default function Navbar() {
	return (
		<nav className='bg-white border-gray-200 dark:bg-gray-900'>
			<div className='container'>
				<ul className='flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-full justify-center'>
					<li>
						<NavLink path='/'>Home</NavLink>
					</li>
					<li>
						<NavLink path='/gallery'>Gallery</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
