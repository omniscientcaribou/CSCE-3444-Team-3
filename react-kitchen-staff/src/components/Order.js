// import { FaTimes } from 'react-icons/fa';
// import Moment from 'react-moment';

const Order = ({ order }) => {
	return (
		
	// 	<div
	// 		className={`order ${order.reminder ? 'reminder' : ''}`}
	// 		onDoubleClick={() => onToggle(order.id)}
	// 	>
	// 		<h3>
	// 			{order.entree}{' '}
	// 			<FaTimes
	// 				style={{ color: 'red', cursor: 'pointer' }}
	// 				onClick={() => onToggle(order.id)}
	// 			/>
	// 		</h3>
	// 		<div className='order-header'>
	// 			Table: {order.table_number} Ticket: {order.order_id} Time:{' '}
	// 			<Moment local format='HH:mm:ss'>
	// 				{order.placed_at}
	// 			</Moment>{' '}
	// 			- <Moment date={order.placed_at} format='HH:mm:ss' durationToNow />
	// 		</div>
	// 		<h4>{order.group}</h4>
	// 		<p>{order.item_name}</p>
	// 	</div>
	// );
};

export default Order;
