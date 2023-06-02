export default function Footer() {
	return (
		<footer className='bg-gray-100 md:bg-white rounded-lg m-4 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
			<div className='w-full container md:flex justify-center'>
				<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2023{' '}
					<a
						href='https://rhenaldkarrel.vercel.app/'
						className='hover:underline'
						target='_blank'
						rel='noreferrer'
					>
						Rhenald Karrel
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
}
