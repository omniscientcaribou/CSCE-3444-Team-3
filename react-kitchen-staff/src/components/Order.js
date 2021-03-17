import { FaTimes } from 'react-icons/fa';

const Order = ({ order, onDelete, onToggle }) => {
	return (
		<div
			className={`order ${order.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onToggle(order.id)}
		>
			<h3>
				{order.entree}{' '}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => onDelete(order.id)}
				/>
			</h3>
			<p>{order.appetizer}</p>
			<p>{order.side}</p>
			<p>{order.kidsMeal}</p>
			<p>{order.dessert}</p>
			<p>{order.drink}</p>
			<p>{order.time}</p>
		</div>
	);
};

export default Order;
