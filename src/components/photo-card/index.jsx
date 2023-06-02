import clsx from 'clsx';

export default function PhotoCard({ image }) {
	return (
		<div
			className={clsx(
				'photo-card group relative cursor-pointer rounded-lg overflow-hidden transition-all after:transition-all',
				'hover:after:conent-none hover:after:absolute hover:after:w-full hover:after:h-full hover:after:top-0 hover:after:left-0 hover:after:z-[1] hover:after:bg-black hover:after:opacity-25'
			)}
			title={image.title}
			id={image.id}
			key={image.id}
		>
			<img
				src={image.src}
				alt={image.title}
				className='aspect-square w-full object-cover'
			/>
			<div className='absolute w-full bottom-0 left-0 -translate-x-8 text-white px-4 pb-4 z-[99] opacity-0 transition-all bg-gradient-to-t from-black to-transparent group-hover:opacity-100 group-hover:translate-x-0'>
				<p className='text-ellipsis'>{image.title}</p>
			</div>
		</div>
	);
}
