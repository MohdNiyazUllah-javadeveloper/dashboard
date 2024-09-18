import zemranLogo from '../images/logo.png'; // Adjust the path if necessary

const Header = ({ title }) => {
	return (
		<header className='bg-#D2E9E9-200 bg-opacity-65 backdrop-blur-md shadow-lg border-b border-pink-500'>
			<div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
				{/* Title */}
				<h1 className='text-2xl font-semibold text-blue-900'>{title}</h1>

				{/* Logo */}
				<img src={zemranLogo} alt="Zemran Logo" className='h-10 w-auto bg-#D2E9E9-200' />
			</div>
		</header>
	);
};

export default Header;
