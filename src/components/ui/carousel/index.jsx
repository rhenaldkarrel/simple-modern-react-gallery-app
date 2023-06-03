import React from 'react';
import SliderControl from './slider-control';

export default function Carousel({ header, images }) {
	const [currentImage, setCurrentImage] = React.useState(0);

	const refs = images.reduce((acc, val, i) => {
		acc[i] = React.createRef();
		return acc;
	}, {});

	const totalImages = images.length;

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
					<h1 className='px-14 text-lg text-center lg:text-left md:text-4xl'>
						{header}
					</h1>
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
