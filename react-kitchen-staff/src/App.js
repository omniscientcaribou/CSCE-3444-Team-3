import { useState, useEffect } from 'react';
import Header from './components/Header';
// import Orders from './components/Orders';
import Button from './components/Button';
import Popup from './components/Popup';
import Cards from './components/Cards';
// import Card from './components/Card';

function App() {
	const [callWaitstaffButtonPopup, setCallWaitstaffButtonPopup] = useState(
		false
	);
	// const [orderReadyButtonPopup, setOrderReadyButtonPopup] = useState(false);
	const [callManagerButtonPopup, setCallManagerButtonPopup] = useState(false);
	const [orders, setOrders] = useState([]);
	const [orderedState, setFilteredOrders] = useState([]);

	useEffect(() => {
		setInterval(() => {
			const getOrders = async () => {
				const ordersFromServer = await fetchOrders();
				setOrders(ordersFromServer);
			};

			getOrders();
		}, 3000);
	}, []);

	// Fetch Orders
	const fetchOrders = async () => {
		const res = await fetch('https://swe3444.herokuapp.com/api/ordercontent/');
		const data = await res.json();

		return data;
	};

	useEffect(() => {
		const getFilteredOrders = async () => {
			const filteredOrdersFromServer = await filterFetchedOrders();
			setFilteredOrders(filteredOrdersFromServer);
		};

		// Fetch Orders
		const filterFetchedOrders = async () => {
			const filteredData = [];
			for (let i = 0; i < orders.length; i++) {
				if (orders[i].state === 'Ordered') {
					filteredData.push(orders[i]);
				}
			}

			return filteredData;
		};

		getFilteredOrders();
	}, [orders]);

	console.log('Filtered Orders:');
	console.log(orderedState);
	// // Delete Order
	// const deleteOrder = async (id) => {
	// 	await fetch(`https://swe3444.herokuapp.com/kitchen_view/5/${id}`, {
	// 		method: 'DELETE',
	// 	})

	// 	setOrders(orders.filter((order) => order.id !== id));
	// };

	// Display Popup
	const displayPopup = (pid) => {
		pid((prev) => !prev);
	};

	return (
		<div className='container'>
			<Header title='Kitchen Staff Interface' />
			{/* {orders.length > 0 ? (
				<Orders
					orders={orders}
					// onDelete={deleteOrder}
				/>
			) : (
				'All Tickets Completed!'
			)} */}
			<Cards />
			<div>
				<p>Notes Here</p>
			</div>
			<div className='button-wrapper'>
				<Button
					className='btn'
					color='#74C3C8'
					text='Call Waitstaff'
					onClick={() => displayPopup(setCallWaitstaffButtonPopup)}
				/>
				{/* <div class='btn'>
					<Button
						className='btn'
						color='#FF8800'
						text='Order READY!'
						onClick={() => displayPopup(setOrderReadyButtonPopup)}
					/>
				</div> */}
				<Button
					className='btn'
					color='#668EB9'
					text='Call Manager'
					onClick={() => displayPopup(setCallManagerButtonPopup)}
				/>
				<Popup
					showPopup={callWaitstaffButtonPopup}
					setShowPopup={setCallWaitstaffButtonPopup}
					btn_text='CALL'
					text='Do you want to call the waitstaff?'
					heading='Call waitstaff'
				/>
				{/* <Popup
					showPopup={orderReadyButtonPopup}
					setShowPopup={setOrderReadyButtonPopup}
					btn_text='READY!'
					text='Is the order ready for pickup?'
					heading='Order Ready'
				/> */}
				<Popup
					showPopup={callManagerButtonPopup}
					setShowPopup={setCallManagerButtonPopup}
					btn_text='CALL'
					text='Do you want to summon a manager?'
					heading='call manager'
				/>
			</div>
		</div>
	);
}

export default App;
