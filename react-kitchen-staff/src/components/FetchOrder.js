import React from 'react';
import { useQuery } from 'react-query';
import { toast, Flip } from 'react-toastify';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import Cards from './Cards';

const getTicket = async () => {
	const TICKETS_URL = 'https://swe3444.herokuapp.com/api/tickets/';
	const response = await fetch(TICKETS_URL);
	return response.json();
};

const FetchOrder = () => {
	const intervalMs = 3000; // Refresh Interval in MS
	const { data: ticket, error, isLoading, isError, status } = useQuery(
		'TICKET',
		getTicket,
		{
			refetchInterval: intervalMs,
		}
	);

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
		<Splide
			options={{
				type: 'slide',
				rewind: 'true',
				perPage: 4,
				perMove: 1,
				gap: '1rem',
				trimSpace: false,
				pagination: true,
				focus: 'left',
				updateOnMove: true,
				isNavigation: false,
				fixedHeight: '40%',
				autoWidth: true,
				padding: {
					left: '.5rem',
					right: '.5rem',
				},
			}}
		>
			{status === 'success' &&
				ticket.map((ticket) => (
					<SplideSlide key={ticket.id}>
						<Cards ticket={ticket} />
					</SplideSlide>
				))}
		</Splide>
	);
};

export default FetchOrder;
