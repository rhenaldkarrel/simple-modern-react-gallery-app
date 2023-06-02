import clsx from 'clsx';

export default function SliderControl({
	isLeft = false,
	previousImage,
	nextImage,
}) {
	return (
		<button
			type='button'
			onClick={isLeft ? previousImage : nextImage}
			className={clsx(
				'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center',
				isLeft ? 'left-2' : 'right-2'
			)}
			style={{ top: '40%' }}
		>
			<span role='img' aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
				{isLeft ? (
					<svg
						fill='#fff'
						width='50%'
						version='1.1'
						id='Capa_1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						viewBox='0 0 59.414 59.414'
						xmlSpace='preserve'
						className='mx-auto'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<polygon points='45.268,1.414 43.854,0 14.146,29.707 43.854,59.414 45.268,58 16.975,29.707 '></polygon>{' '}
						</g>
					</svg>
				) : (
					<svg
						fill='#fff'
						width='50%'
						version='1.1'
						id='Capa_1'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						viewBox='0 0 59.414 59.414'
						xmlSpace='preserve'
						className='mx-auto'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							{' '}
							<polygon points='15.561,0 14.146,1.414 42.439,29.707 14.146,58 15.561,59.414 45.268,29.707 '></polygon>{' '}
						</g>
					</svg>
				)}
			</span>
		</button>
	);
}
