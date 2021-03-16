import Order from './Order'

const Orders = ({ orders, onDelete, onToggle }) => {
	return (
		<>
			{orders.map((order) => (
				<Order key={order.id} order={order} onDelete={onDelete} onToggle={onToggle} />
			))}
		</>
	);
};

export default Orders;
