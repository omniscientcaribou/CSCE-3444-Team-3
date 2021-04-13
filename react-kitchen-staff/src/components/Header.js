import PropTypes from 'prop-types';

const Header = ({ title }) => {
	return (
		<header
			className='header'
			style={{ fontFamily: 'Sue Ellen Francisco, cursive' }}
		>
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
