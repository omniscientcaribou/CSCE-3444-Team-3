import { useState } from 'react';
import Header from './components/Header';
import Orders from './components/Orders';
import Button from './components/Button';

function App() {
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
			side: 'Brussel Sprouts',
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
			appetizer: 'Callamari',
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

	// Toggle ___
	const toggleReminder = (id) => {
		setOrders(
			orders.map((order) =>
				order.id === id ? { ...order, reminder: !order.reminder } : order
			)
		);
	};

	return (
		<div className='container'>
			<Header title='Kitchen Staff Interface' />
			{orders.length > 0 ? (
				<Orders
					orders={orders}
					onDelete={deleteOrder}
					onToggle={toggleReminder}
				/>
			) : (
				'All Tickets Completed!'
			)}
      <div className='button-wrapper'>
        <Button className ='btn' color='#74C3C8' text='Call Waitstaff'></Button>
        <Button className ='btn' color='#FF8800' text='Order READY!'></Button>
        <Button className ='btn' color='#668EB9' text='Call Manager'></Button>
      </div>
		</div>
	);
}

export default App;
