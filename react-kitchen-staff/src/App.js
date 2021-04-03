import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
// import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Header from './components/Header';
import Button from './components/Button';
import CallWSPopup from './components/Popups/CallWSPopup';
import CallMngrPopup from './components/Popups/CallMngrPopup';
// import Cards from './components/Cards';
import OrdersCarousel from './components/OrdersCarousel';
// import Orders from './components/Orders';
// import Card from './components/Card';
// import Popup from './components/Popups/Popup';
import FetchOrders from './components/FetchOrders';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
	const [callWaitstaffButtonPopup, setCallWaitstaffButtonPopup] = useState(
		false
	);
	const [callManagerButtonPopup, setCallManagerButtonPopup] = useState(false);

	// // Delete Order
	// const deleteOrder = async (id) => {
	// 	await fetch(`https://swe3444.herokuapp.com/api/kitchen_view/${id}`, {
	// 		method: 'DELETE',
	// 	})

	// 	setOrders(orders.filter((order) => order.id !== id));
	// };

	// Display Popup
	const displayPopup = (pid) => {
		pid((prev) => !prev);
	};

	return (
		<QueryClientProvider client={queryClient}>
			<FetchOrders />
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
				<Header title='Kitchen Staff Interface' />
				{/* {orders.length > 0 ? (
				<Orders
					orders={orders}
					// onDelete={deleteOrder}
				/>
			) : (
				'All Tickets Completed!'
			)} */}

				{/* <Cards /> */}
				<OrdersCarousel />

				<div>
					<Card id='noteCard'>
						<Card.Header className='noteCard-Header' as='h5'>
							Notes:
						</Card.Header>
						<Card.Body className='noteCard-Body'>
							<Card.Title>Placeholder</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
								posuere erat a ante.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className='button-wrapper'>
					<Button
						className='btn'
						id='call_waitstaff_button'
						color='#74C3C8'
						text='Call Waitstaff'
						onClick={() => displayPopup(setCallWaitstaffButtonPopup)}
					/>
					<p></p>
					<Button
						className='btn'
						id='call_manager_button'
						color='#668EB9'
						text='Call Manager'
						onClick={() => displayPopup(setCallManagerButtonPopup)}
					/>
					<CallWSPopup
						showPopup={callWaitstaffButtonPopup}
						setShowPopup={setCallWaitstaffButtonPopup}
						btn_text='CALL'
						text='Do you want to call the waitstaff?'
						heading='Call Waitstaff'
					/>
					<CallMngrPopup
						showPopup={callManagerButtonPopup}
						setShowPopup={setCallManagerButtonPopup}
						btn_text='CALL'
						text='Do you want to call a manager?'
						heading='Call Manager'
					/>
				</div>
			</div>
		</QueryClientProvider>
	);
}

export default App;

// const [data, setData] = useState();
// const [ordered, setOrdered] = useState();
// const [ticket, setTicket] = useState();

// useEffect(() => {
// 	fetch('https://swe3444.herokuapp.com/api/ordercontent/')
// 		.then((response) => {
// 			if (response.ok) {
// 				return response.json();
// 			}
// 		})
// 		.then((data) => {
// 			setData(data);
// 		});
// 	.finally((data) => {
// 		for (let i = 0; i < data.length; i++) {
// 			if (data[i].state === 'ORDERED') {
// 				fetch(
// 					`https://swe3444.herokuapp.com/api/kitchen_view/${data[i].table_number}`
// 				)
// 					.then((res) => {
// 						if (res.ok) {
// 							return res.json();
// 						}
// 					})
// 					.then((ticket) => {
// 						setTicket(...ticket);
// 					});
// 			}
// 		}
// 		console.log(ordered);
// 	});
// });

// console.log('Data: ', data);
// console.log('Length: ', data.length);
