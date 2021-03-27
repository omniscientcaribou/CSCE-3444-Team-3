import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

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
			<div className='order-header'>
				Table: {order.table_number} Ticket: {order.order_id} Time:{' '}
				<Moment local format='HH:mm:ss'>{order.placed_at}</Moment> -{' '}
				<Moment date={order.placed_at} format="HH:mm:ss" durationToNow />
			</div>
			<h4>{order.group}</h4>
			<p>{order.item_name}</p>
			{/* <h4>Appetizers:</h4>
			<p>{order.appetizer}</p>
			<h4>{order.group}</h4>
			<p>{order.item_name}</p>
			<h4>Kid's Meals:</h4>
			<p>{order.kidsMeal}</p>
			<h4>Desserts:</h4>
			<p>{order.dessert}</p>
			<h4>Beverages:</h4>
			<p>{order.drink}</p>
			<p>{order.time}</p> */}
		</div>
	);
};

export default Order;
