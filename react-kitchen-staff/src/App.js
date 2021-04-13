import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'; // Used for handling background fetching from the API
import { useState } from 'react'; 								// Used for handing simple state changes
import { ToastContainer } from 'react-toastify'; 				// Used for the toast notifications
import FetchOrder from './components/FetchOrder';				// Custom component that does the fetch api calls
import CallWSPopup from './components/Popups/CallWSPopup';		// Component to display the 'Call Waitstaff' Modal (or Overlay or Popup)
import CallMngrPopup from './components/Popups/CallMngrPopup';	// Component to display the 'Call Manager' Modal (or Overlay or Popup)
import Header from './components/Header';						// Component to display the header of the page
import Button from './components/Button';						// Custom button component

import 'react-toastify/dist/ReactToastify.css';					// CSS file from the Toastify library

// queryClient is used by react-query, part of their installation instructions to do this
const queryClient = new QueryClient();

function App() {
	// useState to handle the popup for the 'Call Waitstaff' button
	const [callWaitstaffButtonPopup, setCallWaitstaffButtonPopup] = useState(
		false
	);
	// useState to handle the popup for the 'Call Manager' button
	const [callManagerButtonPopup, setCallManagerButtonPopup] = useState(false);

	// Display Popup Function, flips the state between two states
	const displayPopup = (pid) => {
		pid((prev) => !prev);
	};

	return (
		// QueryClientProvider is needed for reactQuery, recommended to put at the top of the app by their instructions
		<QueryClientProvider client={queryClient}> 
			{/* div container for the Toastify notifications, recommended by their installation instructions */}
			<div className='container'>
				{/* ToastContainer is part of the Toastify Library and they have a variety of props you can pass:
				position where the toast will happen
				how long for it to auto close in ms
				show or hide the progress bar
				newest on top
				click to Close
				right to left
				pause if the focus is lost
				make it draggable or not
				pause progress when you hover over it */}
				<ToastContainer
					position='bottom-right'
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover
				/>
				{/* Header component with the title being passed as a prop */}
				<Header title='SOFTWARE CAFE Kitchen' /> 
				{/* FetchOrder component which handles the API calls */}
				<FetchOrder />
				{/* div button wrapper for our two buttons: Call Waitstaff and Request Manager */}
				<div className='button-wrapper'>
					{/* Button component that passes a className, id, color (background of the button), text of the button, and an onClick action (display our popup) */}
					<Button
						className='my_btn'
						id='call_waitstaff_button'
						color='#74C3C8'
						text='📞 Call Waitstaff'
						onClick={() => displayPopup(setCallWaitstaffButtonPopup)}
					/>
					<p></p>
					{/* Button component that passes a className, id, color (background of the button), text of the button, and an onClick action (display our popup) */}
					<Button
						className='my_btn'
						id='call_manager_button'
						color='#668EB9'
						text='📟 Request Manager'
						onClick={() => displayPopup(setCallManagerButtonPopup)}
					/>
					{/* Popup component that passes our state, sets the state, the button text, body text, and heading text */}
					<CallWSPopup
						showPopup={callWaitstaffButtonPopup}
						setShowPopup={setCallWaitstaffButtonPopup}
						btn_text='CALL'
						text='Do you want call waitstaff to the kitchen?'
						heading='CALL WAITSTAFF'
					/>
					{/* Popup component that passes our state, sets the state, the button text, body text, and heading text */}
					<CallMngrPopup
						showPopup={callManagerButtonPopup}
						setShowPopup={setCallManagerButtonPopup}
						btn_text='REQUEST'
						text='Do you want to request a manager to come to the kitchen?'
						heading='REQUEST MANAGER'
					/>
				{/* Close button wrapper div */}
				</div>
			{/* Close container div */}
			</div>
		{/* Close QueryClientProvider component */}
		</QueryClientProvider>
	);
}

export default App;
