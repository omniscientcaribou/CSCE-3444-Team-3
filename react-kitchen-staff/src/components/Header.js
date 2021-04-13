import PropTypes from 'prop-types'; // Needed for making the prototype 

const Header = ({ title }) => {
	return (
		// Header Container - in-line style to set the font-family
		<header
			className='header'
			style={{ fontFamily: 'Sue Ellen Francisco, cursive' }}
		>
			{/* Page title in h1 tags */}
			<h1>{title}</h1>
		</header>
	);
};

// Set Default Title
Header.defaultProps = {
	title: 'Kitchen Staff Interface',
};

// Set Title to a String Type
Header.prototype = {
	title: PropTypes.string.isRequired,
};

export default Header;
