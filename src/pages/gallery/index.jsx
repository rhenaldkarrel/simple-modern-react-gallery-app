import React, { useEffect } from 'react';
import PhotoCard from '../../components/photo-card';
import { CATEGORIES, photos } from '../../lib/data/photos';
import CategoryLink from '../../components/category-link';
import { useSearchParams } from 'react-router-dom';

export default function Gallery() {
	const [photoList, setPhotoList] = React.useState(photos);
	const [query, setQuery] = React.useState('');
	const [searchParams] = useSearchParams();
	const categoryParam = searchParams.get('category');

	const handleChangeSearch = (e) => setQuery(e.target.value.toLowerCase());

	useEffect(() => {
		if (!categoryParam) {
			setPhotoList(photos);
			return;
		}

		setPhotoList(() => {
			const filteredPhoto = photos.filter((p) =>
				p.category.includes(categoryParam)
			);

			return filteredPhoto;
		});
	}, [categoryParam]);

	useEffect(() => {
		if (!query) {
			setPhotoList(photos);
			return;
		}

		setPhotoList(() => {
			const filteredPhoto = photos.filter(
				(p) =>
					p.category.some((c) => c.includes(query)) ||
					p.title.toLowerCase().includes(query)
			);

			return filteredPhoto;
		});
	}, [query]);

	return (
		<React.Fragment>
			<section className="bg-center rounded-lg bg-no-repeat bg-[url('https://images.unsplash.com/photo-1444837881208-4d46d5c1f127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1645&q=80')] bg-gray-700 bg-blend-normal">
				<div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
					<h1 className='mb-10 font-extrabold tracking-tight leading-none text-white'>
						Timeless beauties in frames
					</h1>
					<div className='max-w-xl mx-auto'>
						<label
							htmlFor='search-input'
							className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
						>
							Search
						</label>
						<div className='relative'>
							<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
								<svg
									aria-hidden='true'
									className='w-5 h-5 text-gray-500 dark:text-gray-400'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
									></path>
								</svg>
							</div>
							<input
								type='search'
								id='search-input'
								className='block w-full p-4 pl-10 text-sm text-gray-900 border border-black bg-gray-50 outline-none'
								placeholder='Find images...'
								onChange={handleChangeSearch}
								value={query}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='categories my-8'>
				<nav className='bg-gray-50 overflow-auto rounded-lg py-4 dark:bg-gray-800'>
					<ul className='flex w-full md:justify-center'>
						{Object.keys(CATEGORIES).map((category) => (
							<CategoryLink key={category}>{category}</CategoryLink>
						))}
					</ul>
				</nav>
			</section>
			<section className='photos'>
				<div className='grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
					{photoList.map((image) => (
						<PhotoCard key={image.id} image={image} />
					))}
				</div>
			</section>
		</React.Fragment>
	);
}
