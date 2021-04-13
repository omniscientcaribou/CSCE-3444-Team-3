import PropTypes from 'prop-types'; // Needed for DefaultProps and PropTypes

// This is a custom button component
// Props include:
// color 	| Sets the background color of the button
// text 	| Set the text to appear on the button
// onClick 	| Set the function that happens when you click the button
const Button = ({ color, text, onClick }) => {
	return (
		// my_btn wrapper
		// in-line styling to hold our onClick prop and color
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
			{/* our button text */}
			{text}
			{/* end my_btn wrapper */}
		</button>
	);
};

// Set our Default Props
Button.defaultProps = {
	color: 'steelblue', // Set a default color
};

// Set our Button Prop Types
Button.protoTypes = {
	text: PropTypes.string, // Text is a String
	color: PropTypes.string, // Color is a String
	onClick: PropTypes.func, // onClick is a Function
};

export default Button;
