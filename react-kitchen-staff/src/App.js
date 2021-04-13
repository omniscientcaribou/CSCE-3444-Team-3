import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import FetchOrder from './components/FetchOrder';
import CallWSPopup from './components/Popups/CallWSPopup';
import CallMngrPopup from './components/Popups/CallMngrPopup';
import Header from './components/Header';
import Button from './components/Button';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
	const [callWaitstaffButtonPopup, setCallWaitstaffButtonPopup] = useState(
		false
	);
	const [callManagerButtonPopup, setCallManagerButtonPopup] = useState(false);

	// Display Popup
	const displayPopup = (pid) => {
		pid((prev) => !prev);
	};

	return (
		<QueryClientProvider client={queryClient}>
			<div className='container'>
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
				<Header title='SOFTWARE CAFE Kitchen' />
				<FetchOrder />
				<div className='button-wrapper'>
					<Button
						className='my_btn'
						id='call_waitstaff_button'
						color='#74C3C8'
						text='📞 Call Waitstaff'
						onClick={() => displayPopup(setCallWaitstaffButtonPopup)}
					/>
					<p></p>
					<Button
						className='my_btn'
						id='call_manager_button'
						color='#668EB9'
						text='📟 Request Manager'
						onClick={() => displayPopup(setCallManagerButtonPopup)}
					/>
					<CallWSPopup
						showPopup={callWaitstaffButtonPopup}
						setShowPopup={setCallWaitstaffButtonPopup}
						btn_text='CALL'
						text='Do you want call waitstaff to the kitchen?'
						heading='CALL WAITSTAFF'
					/>
					<CallMngrPopup
						showPopup={callManagerButtonPopup}
						setShowPopup={setCallManagerButtonPopup}
						btn_text='REQUEST'
						text='Do you want to request a manager to come to the kitchen?'
						heading='REQUEST MANAGER'
					/>
				</div>
			</div>
		</QueryClientProvider>
	);
}

export default App;
