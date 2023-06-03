import { Classic } from '@theme-toggles/react';
import React from 'react';

export default function ThemeToggler() {
	const [theme, setTheme] = React.useState(() => {
		const theme = localStorage.getItem('theme');

		if (theme === 'dark') {
			return 'dark';
		} else {
			return 'light';
		}
	});

	const handleToggleTheme = () => {
		const html = document.querySelector('html');

		if (theme !== 'dark') {
			html.classList.add('dark');
			setTheme('dark');
		} else {
			html.classList.remove('dark');
			setTheme('light');
		}
	};

	React.useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	React.useEffect(() => {
		const html = document.querySelector('html');

		if (theme === 'dark') {
			html.classList.add('dark');
		}
	}, []);

	return (
		<Classic
			duration={750}
			className='h-full w-[24px] ml-3 sm:ml-0 flex justify-center items-center transition-all rounded-md hover:bg-gray-100 dark:hover:bg-gray-800'
			onClickCapture={handleToggleTheme}
			toggled={theme === 'dark'}
		/>
	);
}
