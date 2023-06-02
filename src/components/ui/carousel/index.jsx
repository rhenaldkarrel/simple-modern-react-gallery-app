import React from 'react';
import SliderControl from './slider-control';

const images = [
	'https://images.unsplash.com/photo-1581388847562-d5a56eec1cfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
	'https://images.unsplash.com/photo-1446052377488-d40ee7263458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
	'https://images.unsplash.com/photo-1500069329338-1f270dce111f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
];

const totalImages = images.length;

export default function Carousel() {
	const [currentImage, setCurrentImage] = React.useState(0);

	const refs = images.reduce((acc, val, i) => {
		acc[i] = React.createRef();
		return acc;
	}, {});

	const scrollToImage = (i) => {
		setCurrentImage(i);

		refs[i].current.scrollIntoView({
			behavior: 'smooth',
			block: 'nearest',
			inline: 'start',
		});
	};

	const nextImage = () => {
		if (currentImage >= totalImages - 1) {
			scrollToImage(0);
		} else {
			scrollToImage(currentImage + 1);
		}
	};

	const previousImage = () => {
		if (currentImage === 0) {
			scrollToImage(totalImages - 1);
		} else {
			scrollToImage(currentImage - 1);
		}
	};

	return (
		<div className='flex justify-center w-full items-center'>
			<div className='relative w-full'>
				<header className='absolute text-white w-full h-full grid place-items-center pointer-events-none'>
					<h1>Capture the Moments, Freeze the Memories</h1>
				</header>
				<div className='carousel rounded-lg'>
					{
						<SliderControl
							isLeft
							previousImage={previousImage}
							nextImage={nextImage}
						/>
					}
					{images.map((img, i) => (
						<div className='w-full flex-shrink-0' key={img} ref={refs[i]}>
							<img
								src={img}
								className='w-full object-cover max-h-[31.25rem] h-full bg-fixed'
								alt={img}
							/>
						</div>
					))}
					{
						<SliderControl
							previousImage={previousImage}
							nextImage={nextImage}
						/>
					}
				</div>
			</div>
		</div>
	);
}
