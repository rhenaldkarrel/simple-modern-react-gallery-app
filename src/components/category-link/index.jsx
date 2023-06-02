import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function CategoryLink({ children }) {
	return (
		<li className='nav-item'>
			<Link
				className={clsx(
					'px-12 uppercase transition-all py-2',
					'hover:border-b hover:border-b-black'
				)}
				to={`?category=${children}`}
			>
				{children}
			</Link>
		</li>
	);
}
