import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: color,
				border: '1px solid black',
				height: '4rem',
				fontSize: '1.5rem',
				borderRadius: '.5vw',
			}}
			className='my_btn'
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: 'steelblue',
};

Button.protoTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
