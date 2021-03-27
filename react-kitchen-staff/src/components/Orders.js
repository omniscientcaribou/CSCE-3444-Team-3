import Order from './Order';

const Orders = ({ orders, onDelete, onToggle }) => {
	return (
		<>
			{orders.map((order, index) => (
				<Order
					key={index}
					order={order}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</>
	);
};

export default Orders;
