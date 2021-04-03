import Order from './Order';

const Orders = ({ orders }) => {
	return (
		<>
			{orders.map((index, order, onToggle) => (
				<Order key={index} order={order} onToggle={onToggle} />
			))}
		</>
	);
};

export default Orders;
