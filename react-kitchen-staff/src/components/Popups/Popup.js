import PropTypes from 'prop-types'; // Needed for DefaultProps and PropTypes
import { createPortal } from 'react-dom'; // Needed to create a portal for our modal
import { useSpring, animated } from 'react-spring'; // Animation Library
import { FaTimes } from 'react-icons/fa'; // X icon
import { useRef, useEffect, useCallback } from 'react'; // Needed for react hooks
import { Button } from 'react-bootstrap'; // Bootstrap Button
import { toast } from 'react-toastify'; // Toast Notification

// Import our stylesheet
import '../../css/Popup.css';

// This is a Modal (or Overlay or Popup) which displays when we click the item ready button on the cards
// Props include:
// showPopup 	| boolean (true/false) 	| our useState for showing the popup or not
// setShowPopup | function				| our function used by the useState to display the popup or not
// text 		| string				| string text that appears in the body of the modal
// heading 		| string				| string text that appears in the heading of the modal
// btn_text 	| string				| string text that appears on the button within the modal
// id 			| string				| string used for our FETCH POST request to update the state on the API endpoint
const Popup = ({ showPopup, setShowPopup, text, heading, btn_text, id }) => {
	// useRef part of React
	const popupRef = useRef();

	// Used by react-spring to handle our animation for sliding the modal down from the top of the screen
	const animation = useSpring({
		config: {
			duration: 75,
		},
		opacity: showPopup ? 1 : 0,
		transform: showPopup ? `translateY(0%)` : `translateY(-100%)`,
	});

	// Function to close our modal when we click outside the little modal card
	const closePopup = (e) => {
		// if the current popupRef is equal to the event target
		if (popupRef.current === e.target) {
			// change the value of setShowPopup to the previous value (boolean)
			setShowPopup((prev) => !prev);
			// trigger a warning toast notification through Toastify
			toast.warn('⚠️ Item READY Aborted', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	// Function to close our modal when we press escape (also works with space|enter)
	const closeOnKeyPress = useCallback(
		(e) => {
			// if the event key pressed is Escape and showPopup is true
			if (e.key === 'Escape' && showPopup) {
				// Change the value of setShowPopup to the previous value (bool, so false)
				setShowPopup((prev) => !prev);
				// trigger a warning toast notification through Toastify
				toast.warn('⚠️ Item READY Aborted', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		},
		[setShowPopup, showPopup]
	);

	// Keep track of our event listener for pressing a key
	useEffect(() => {
		document.addEventListener('keydown', closeOnKeyPress);
		return () => document.removeEventListener('keydown', closeOnKeyPress);
	}, [closeOnKeyPress]);

	// PATCH Request
	const updateTicket = async (id) => {
		// our PATCH request URL, dynamically add the id into the url
		let PATCH_URL = `https://swe3444.herokuapp.com/api/ordercontent/${id}/`;
		const updateRequest = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ state: 'READY TO BE DELIVERED' }),
		};

		// do the fetch
		const response = await fetch(PATCH_URL, updateRequest);
		// get response
		const result = await response.json();

		// if response is good
		(response.ok) ? 
			// Display a success toast notification through Toastify
			(toast.success(`✔️ Ticket ${id} Marked as READY TO BE DELIVERED`, {
				position: 'bottom-right',
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})) :
			// Otherwise Display an error toast notification through Toastify
			(toast.error(`💥 Error with PATCH Request on Ticket ${id}`, {
				position: 'bottom-right',
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			}))
		
		// return the results
		return result;
	};

	// Create a portal through React-DOM to make it display in-front of other elements
	return createPortal(
		<>
			{/* if showPopup is true */}
			{showPopup ? (
				// div for our background
				<div className='popup-background' ref={popupRef} onClick={closePopup}>
					{/* animated div used by react-spring for our modal box */}
					<animated.div className='popup-inner' style={animation}>
						{/* row div for alignment */}
						<div className='row'>
							{/* display our heading */}
							<h2 className='popup-inner-header'>{heading}</h2>
							{/* display an X icon from react-icons that gets it from font awesome */}
							<FaTimes
								className='popup-inner-header-x-btn'
								// in-line styling to back it red and change the cursor to a pointer
								style={{ color: 'red', cursor: 'pointer' }}
								// on click	
								onClick={() => {
									// set setShowPopup to it's previous value
									setShowPopup((prev) => !prev);
									// display a warning toast notification through Toastify
									toast.warn('⚠️ Item READY Aborted', {
										position: 'bottom-right',
										autoClose: 5000,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true,
										progress: undefined,
									});
								}}
							/>
						{/* end 'row' div */}
						</div>
						{/* horizontal rule */}
						<hr />
						{/* display our text */}
						<p className='pop-up-inner-text'>{text}</p>
						<br />
						{/* display our button */}
						<Button
							onClick={() => updateTicket(id)}
							variant='info'
							size='lg'
							style={{ border: '1px solid black' }}
						>
							{/* display our button text */}
							{btn_text}
						
						</Button>
					{/* end our animated div */}
					</animated.div>
				{/* end our background div */}
				</div>
				// otherwise do nothing
			) : null}
		</>,
		// attach our portal to the root
		document.getElementById('root')
	);
};

export default Popup;

// Set our Button Prop Types
Popup.protoTypes = {
	showPopup	: PropTypes.bool.isRequired, 	// showPopup is a boolean
	setShowPopup: PropTypes.func.isRequired, 	// setShowPopup is a function
	text		: PropTypes.string.isRequired, 	// text is a string
	heading		: PropTypes.string.isRequired, 	// heading is a string
	btn_text	: PropTypes.string.isRequired, 	// btn_text is a string
	id			: PropTypes.string.isRequired,	// id is a string
};
