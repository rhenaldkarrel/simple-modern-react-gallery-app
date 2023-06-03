import clsx from 'clsx';
import React from 'react';
import Drawer from '../ui/drawer';
import Badge from '../ui/badge';
import { Link } from 'react-router-dom';

export default function PhotoCard({ image }) {
	const [isOpen, setIsOpen] = React.useState(false);

	React.useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	return (
		<div className='photo'>
			<div
				className={clsx(
					'photo-card group relative cursor-pointer rounded-lg overflow-hidden transition-all after:transition-all',
					'hover:after:conent-none hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:z-[1] hover:after:bg-black hover:after:opacity-25'
				)}
				title={image.title}
				id={image.id}
				key={image.id}
				onClick={() => setIsOpen(true)}
			>
				<img
					src={image.src}
					alt={image.title}
					className='aspect-square w-full object-cover'
				/>
				<div className='absolute w-full bottom-0 left-0 -translate-x-8 text-white px-4 pb-4 z-[99] opacity-0 transition-all bg-gradient-to-t from-black to-transparent group-hover:opacity-100 group-hover:translate-x-0'>
					<p className='truncate'>{image.title}</p>
				</div>
			</div>
			<Drawer header={image.title} isOpen={isOpen} setIsOpen={setIsOpen}>
				<div className='space-y-4'>
					<img
						src={image.src}
						className='w-full mb-3 rounded-lg'
						alt={image.title}
					/>
					<p>{image.description}</p>
					<p className='flex gap-2'>
						{image.category.map((c) => (
							<Link key={c} to={`/gallery?category=${c}`}>
								<Badge>{c}</Badge>
							</Link>
						))}
					</p>
				</div>
			</Drawer>
		</div>
	);
}
