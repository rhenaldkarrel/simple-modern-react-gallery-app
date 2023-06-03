import clsx from 'clsx';
import { Link, useSearchParams } from 'react-router-dom';

export default function CategoryLink({ children }) {
	const [searchParams] = useSearchParams();
	const categoryParam = searchParams.get('category');

	return (
		<li className='nav-item'>
			<Link
				className={clsx(
					'px-12 uppercase transition-all py-2 whitespace-nowrap',
					'hover:border-b hover:border-b-black',
					{ 'border-b border-b-black': categoryParam === children }
				)}
				to={`?category=${children}`}
			>
				{children}
			</Link>
		</li>
	);
}
