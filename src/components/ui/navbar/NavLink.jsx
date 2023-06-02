import clsx from 'clsx';
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function NavLink({ children, path, className }) {
	return (
		<RouterNavLink
			to={path}
			className={({ isActive }) =>
				clsx(
					'block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 dark:text-gray-400',
					{
						'bg-blue-700 md:text-blue-700 md:dark:text-blue-400 text-white':
							isActive,
					},
					className
				)
			}
		>
			{children}
		</RouterNavLink>
	);
}
