import { FaTimes } from 'react-icons/fa';

const Order = ({ order, onDelete, onToggle }) => {
	return (
		<div
			className={`order ${order.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onToggle(order.id)}
		>
			<h3>
				{order.waiter}{' '}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => onDelete(order.id)}
				/>
			</h3>
			<p>{order.time}</p>
		</div>
	);
};

export default Order;
