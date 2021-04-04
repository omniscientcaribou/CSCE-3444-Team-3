import { useQuery } from 'react-query';
import { toast, Flip } from 'react-toastify';
import Cards from './Cards';

const getTicket = async () => {
	const order_content_api_url = 'https://swe3444.herokuapp.com/api/tickets/';
	const response = await fetch(order_content_api_url);
	return response.json();
};

// const getItems = async (orders) => {
// 	let table_number = 0;
// 	let table_numbers = [findOrdered(orders)];
// 	let items = [];
// 	const kitchen_view_api_url = `https://swe3444.herokuapp.com/api/kitchen_view/${table_number}`;

// 	for (table_number; table_number < table_numbers.length; table_number++) {
// 		const response = await fetch(kitchen_view_api_url);
// 		items.push(response.json());
// 	}

// 	return console.log(items);
// };

// const isOrdered = (id) => {
// 	return id.state === 'ORDERED' ? true : false;
// };

// const findOrdered = (data) => {
// 	let tmp = [];

// 	data.flatMap((order) =>
// 		order.state === 'ORDERED' ? tmp.push(order.table_number) : []
// 	);

// 	return tmp.flat();
// };

const FetchOrder = () => {
	const intervalMs = 3000; // Refresh Interval in MS
	const { data: ticket, error, isLoading, isError, status } = useQuery(
		'TICKET',
		getTicket,
		{
			refetchInterval: intervalMs,
		}
	);

	// const { data: items, isIdle } = useQuery(
	// 	orders && ['ORDERED', getItems(orders)]
	// );

	// const { data: items, isIdle } = useQuery(
	// 	orders && ['ORDERED', findOrdered(orders)],
	// 	(key, table_number) => {
	// 		const response = getItems(table_number);

	// 		return response;
	// 	}
	// );

	if (isLoading) {
		toast.info('⏳ Loading Data, Please Wait...', {
			toastId: 'loading',
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			transition: Flip,
		});
	}
	if (isError) {
		toast.error('🛑 Uhoh, ' + error.message, {
			toastId: 'error',
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			transition: Flip,
		});
	}

	return (
		<div>
			{status === 'success' && (
				<div>
					{ticket.map((ticket) => (
						<Cards key={ticket.id} ticket={ticket} />
					))}
				</div>
			)}
		</div>
	);
};

export default FetchOrder;
