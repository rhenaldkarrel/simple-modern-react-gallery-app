import React from 'react';
import Carousel from '../../components/ui/carousel';
import { CATEGORIES, photos } from '../../lib/data/photos';
import PhotoCard from '../../components/photo-card';

const blogImages = photos.filter((p) => p.category.includes(CATEGORIES.blog));
const musicImages = photos.filter((p) => p.category.includes(CATEGORIES.music));
const editorialImages = photos.filter((p) =>
	p.category.includes(CATEGORIES.editorial)
);

export default function Home() {
	return (
		<React.Fragment>
			<Carousel />
			<section className='photos mt-4'>
				<article className='photos-blog'>
					<h2 className='mb-4'>Blog</h2>
					<div className='grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
						{blogImages.map((image) => (
							<PhotoCard key={image.id} image={image} />
						))}
					</div>
				</article>
				<article className='photos-music'>
					<h2 className='my-4'>Music</h2>
					<div className='grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
						{musicImages.map((image) => (
							<PhotoCard key={image.id} image={image} />
						))}
					</div>
				</article>
				<article className='photos-editorial'>
					<h2 className='my-4'>Editorial</h2>
					<div className='grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
						{editorialImages.map((image) => (
							<PhotoCard key={image.id} image={image} />
						))}
					</div>
				</article>
			</section>
		</React.Fragment>
	);
}
