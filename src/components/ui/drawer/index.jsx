export default function Drawer({ isOpen, setIsOpen, header, children }) {
	return (
		<aside
			className={
				'fixed overflow-hidden z-[99] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
				(isOpen
					? ' transition-opacity opacity-100 duration-500 translate-x-0  '
					: ' transition-all delay-500 opacity-0 translate-x-full  ')
			}
		>
			<section
				className={
					' w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform dark:bg-gray-800' +
					(isOpen ? ' translate-x-0 ' : ' translate-x-full ')
				}
			>
				<article className='relative p-4 w-screen max-w-lg pb-10 flex flex-col space-y-6 h-full'>
					<div className='flex'>
						<header className='font-bold text-base md:text-lg'>{header}</header>
						<button
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
							onClick={() => setIsOpen(false)}
						>
							<svg
								aria-hidden='true'
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
							<span className='sr-only'>Close drawer</span>
						</button>
					</div>
					<section className='overflow-auto grow'>{children}</section>
				</article>
			</section>
			<section
				className=' w-screen h-full cursor-pointer'
				onClick={() => setIsOpen(false)}
			></section>
		</aside>
	);
}
