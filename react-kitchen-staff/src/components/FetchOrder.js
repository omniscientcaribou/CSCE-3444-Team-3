import { useQuery } from 'react-query'; // Needed for useQuery
import { toast, Flip } from 'react-toastify'; // Needed for toast notifications
import { Splide, SplideSlide } from '@splidejs/react-splide'; // Needed for carousel
import Cards from './Cards'; // Card Generator Template

// Import the splidejs custom css stylesheet - they provided
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

// Function: getTicket - This is our API call
const getTicket = async () => {
	// variable to hold our API url
	const TICKETS_URL = 'https://swe3444.herokuapp.com/api/tickets/';
	// var that holds our fetch response
	const response = await fetch(TICKETS_URL);
	// return our response as a json object
	return response.json();
};

const FetchOrder = () => {
	// Refresh Interval in MS
	const intervalMs = 3000;
	// our React-Query useQuery setup
	const { data: ticket, error, isLoading, isError, status } = useQuery(
		'TICKET',
		getTicket,
		{
			refetchInterval: intervalMs,
		}
	);

	// if isLoading is true, fire off an info toast notification
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
	// if isError is true, fire off an error toast notification
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
		// our Splide carousel component with lots of options
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
			{/* if our react-query useQuery status is success, our fetch was good, map through it and generate cards */}
			{status === 'success' &&
				ticket.map((ticket) => (
					// Create a new Splide Slide
					<SplideSlide key={ticket.id}>
						{/* Generate our card */}
						<Cards ticket={ticket} />
					</SplideSlide>
				))}
		</Splide>
	);
};

export default FetchOrder;
