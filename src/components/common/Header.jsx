import zemranLogo from '../images/logo.png'; // Adjust the path if necessary
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = ({ title }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
		// Add search functionality here if needed
	};

	return (
		<header className='bg-#D2E9E9-200 bg-opacity-65 backdrop-blur-md shadow-lg border-b border-pink-500'>
			<div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
				{/* Title */}
				<h1 className='text-2xl font-semibold text-blue-900'>{title}</h1>

				{/* Search Bar and Logo on the right */}
				<div className='flex items-center space-x-4'>
					{/* Search Bar with Icon */}
					<div className='flex items-center relative'>
						<FontAwesomeIcon
							icon={faSearch}
							className='absolute left-3 text-gray-500'
						/>
						<input
							type='text'
							value={searchQuery}
							onChange={handleSearch}
							placeholder='Search...'
							className='w-40 pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent'
						/>
					</div>

					{/* Logo */}
					<img src={zemranLogo} alt="Zemran Logo" className='h-10 w-auto' />
				</div>
			</div>
		</header>
	);
};

export default Header;
