import { useState } from 'react';
import Header from './components/Header';
import Orders from './components/Orders';
import Button from './components/Button';
import Popup from './components/Popup';
import Card from './components/Card';

function App() {
	const [callWaitstaffButtonPopup, setCallWaitstaffButtonPopup] = useState(false);
	const [orderReadyButtonPopup, setOrderReadyButtonPopup] = useState(false);
	const [callManagerButtonPopup, setCallManagerButtonPopup] = useState(false);
	const [orders, setOrders] = useState([
		{
			id: 1,
			table: 1,
			ticket: 1,
			waiter: 'Jake',
			time: '7:13pm',
			appetizer: 'Mozzarella Sticks',
			appetizerMods: 'None',
			entree: 'Pulled Pork and Brisket Burger',
			entreeMods: 'None',
			kidsMeal: 'Grilled Cheese Sandwich',
			kidsMealMods: 'None',
			side: 'Brussels Sprouts',
			sideMods: 'None',
			drink: 'Coca-Cola',
			drinkMods: 'None',
			dessert: 'Mango Pudding',
			dessertMods: 'None',
		},
		{
			id: 2,
			table: 2,
			ticket: 2,
			waiter: 'Sebastian',
			time: '7:15pm',
			appetizer: 'Onion Rings',
			appetizerMods: 'None',
			entree: 'Lasagna',
			entreeMods: 'None',
			kidsMeal: 'Pepperoni Pizza',
			kidsMealMods: 'None',
			side: 'Dan-Dan Noodles',
			sideMods: 'None',
			drink: 'Water',
			drinkMods: 'None',
			dessert: 'Mango Pudding',
			dessertMods: 'None',
		},
		{
			id: 3,
			table: 3,
			ticket: 3,
			waiter: 'Rose',
			time: '7:24pm',
			appetizer: 'Calamari',
			appetizerMods: 'None',
			entree: 'Spicy Beef Noodles w/ Soup',
			entreeMods: 'None',
			kidsMeal: 'Spaghetti',
			kidsMealMods: 'None',
			side: 'Mac and Cheese',
			sideMods: 'None',
			drink: 'Bubble Milk Tea',
			drinkMods: 'None',
			dessert: 'Mango Pudding',
			dessertMods: 'None',
		},
		{
			id: 4,
			table: 4,
			ticket: 4,
			waiter: 'Luna',
			time: '7:29pm',
			appetizer: 'Nachos',
			appetizerMods: 'None',
			entree: "Bird's Nest",
			entreeMods: 'None',
			kidsMeal: 'Chicken Nuggets',
			kidsMealMods: 'None',
			side: 'Fries',
			sideMods: 'None',
			drink: 'Iced Tea',
			drinkMods: '+Lemon',
			dessert: 'Mango Pudding',
			dessertMods: 'None',
		},
	]);

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
