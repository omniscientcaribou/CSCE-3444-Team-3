import { useState } from 'react';
import Header from './components/Header';
import Orders from './components/Orders';
import Button from './components/Button';
import Popup from './components/Popup';
// import Card from './components/Card';

function App() {
	const [callWaitstaffButtonPopup, setCallWaitstaffButtonPopup] = useState(false);
	const [orderReadyButtonPopup, setOrderReadyButtonPopup] = useState(false);
	const [callManagerButtonPopup, setCallManagerButtonPopup] = useState(false);

	// Delete Order
	const deleteOrder = (id) => {
		setOrders(orders.filter((order) => order.id !== id));
	};

	// Display Popup
	const displayPopup = (pid) => {
		pid(prev => !prev)
	}

	return (
		<div className='container'>
			<Header title='Kitchen Staff Interface' />
			{orders.length > 0 ? (
				<Orders
					orders={orders}
					onDelete={deleteOrder}
					// onToggle={toggleReminder}
				/>
			) : (
				'All Tickets Completed!'
			)}
			{/* <Card title='Card Title' body='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique quis quam commodo imperdiet. Ut vestibulum est ac turpis tempus, ut efficitur purus pellentesque. Ut eu orci viverra, porta neque ac, vulputate est. Suspendisse pulvinar condimentum neque, sit amet fringilla justo porttitor vitae. Morbi sollicitudin semper odio, vel pellentesque mi sodales vitae. Quisque tempus eros vel sem pretium, sit amet tempor urna tempor. Morbi vitae ante quis nulla elementum fermentum ac sed diam. Duis eu auctor odio. Nullam augue lorem, convallis eu suscipit non, auctor vitae dui. Morbi aliquet luctus sapien nec mollis. Fusce tempor justo vel turpis interdum, ut molestie orci sodales.' /> */}
			<div className='button-wrapper'>
				<Button
					className='btn'
					color='#74C3C8'
					text='Call Waitstaff'
					onClick={() => displayPopup(setCallWaitstaffButtonPopup)}
				/>
				<div class="d-grid gap-2 d-md-block">
					<Button
						className='btn'
						color='#FF8800'
						text='Order READY!'
						onClick={() => displayPopup(setOrderReadyButtonPopup)}
					/>
				</div>
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
				<Popup
					showPopup={orderReadyButtonPopup}
					setShowPopup={setOrderReadyButtonPopup}
					btn_text='READY!'
					text='Is the order ready for pickup?'
					heading='Order Ready'
				/>
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
