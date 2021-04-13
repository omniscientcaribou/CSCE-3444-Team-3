import PropTypes from 'prop-types'; // Needed for DefaultProps and PropTypes
import DayJS from 'react-dayjs'; // Used to convert time given from API endpoint to localized time
import CommentCard from './CommentCard'; // Our CommentCard Component
import AllergyCard from './AllergyCard'; // Our AllergyCard Component
import Timer from './Timer'; // Our Timer Component (Stopwatch)
import TimeAgo from 'timeago-react'; // let TimeAgo = require('timeago-react'); -- Used for the 'time ago' text in the footer of the card
import Popup from '../components/Popups/Popup'; // Our Popup Modal Component
import { useState } from 'react'; // useState from React
import { GrFlagFill } from 'react-icons/gr'; // Icon
import { Button, Card } from 'react-bootstrap'; // Bootstrap Components

// Import BootStrap CSS Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
// Import our custom stylesheet
import '../css/Cards.css';

// This is a Card Template for dynamically generating the cards
// Uses Bootstrap Card as the framework
// Takes in the ticket object fetched from the API
const Cards = ({ ticket }) => {
	// useState to keep track of our Popup Modal
	const [orderReadyButtonPopup, setOrderReadyButtonPopup] = useState(false);
	// Array to hold true/false if an allergy is selected - this will be how we display the icons on the card. If new allergies are added, increase the array size
	// Position [0] - Dairy
	// Position [1] - Shellfish
	// Position [2] - Gluten
	// Position [3] - Peanut
	// Position [4] - TreeNut
	// Position [5] - Other
	// Position [6] - Holds the string typed into the other box
	let allergyArray = [7];

	// Function that handles the Display Popup
	const displayPopup = (pid) => {
		pid((prev) => !prev);
	};

	// Function that handles displaying the Allergy Flag on the card
	// Takes in the ticket object
	const showAllergyFlag = ({ ticket }) => {
		// if the ticket flag from the API is true
		return ticket.allergy_flag === 'True' ? (
			// Show our icon flag in a span
			<span>
				<GrFlagFill id='allergy-flag' />
			</span>
		) : (
			// otherwise show nothing
			''
		);
	};

	// Function to check for allergies
	// Allergies are a string delimitated by a | via the API
	// takes in the ticket object, and our allergy array
	const checkAllergies = ({ ticket }, allergyArray) => {
		// create an empty temp array
		let allergyList = [];

		// split the string and hold it in our array
		allergyList = ticket.allergy_comment.split('|');

		// Go through the split list and set the corresponding allergyArray position to true if the values are present
		for (let i = 0; i < allergyList.length; i++) {
			if (allergyList[i] === 'Dairy' ? (allergyArray[0] = true) : '');
			if (allergyList[i] === 'Shellfish' ? (allergyArray[1] = true) : '');
			if (allergyList[i] === 'Gluten' ? (allergyArray[2] = true) : '');
			if (allergyList[i] === 'Peanut' ? (allergyArray[3] = true) : '');
			if (allergyList[i] === 'TreeNut' ? (allergyArray[4] = true) : '');
			if (allergyList[i] === 'Other') {
				allergyArray[5] = true;
				// if other is found we need to set the subsequent position to the typed in comment
				allergyArray[6] = allergyList[i + 1];
				// and manually advance the count so we don't iterate over it
				i++;
			}
		}
	};

	return (
		<>
			{/* run our checkAllergies function at the top to set our flags */}
			{checkAllergies({ ticket }, allergyArray)}
			{/* Begin our card with a Bootstrap Card container */}
			<Card
				className='shadow-sm p-3 mb-5'
				id='card-container'
				// We'll use in-line styling because we want to dynamically change the background
				// color of the card by using a ternary operator based on if the allergy flag is true or false
				style={{
					backgroundColor:
						ticket.allergy_flag === 'True'
							? 'rgba(217, 83, 79, 0.65)'
							: 'white',
					borderRadius: '1.15rem',
				}}
			>
				{/* Open our Card Body Tag */}
				<Card.Body className='d-flex flex-column'>
					{/* Open a Card Title Tag  */}
					<Card.Title
						className='d-flex justify-content-around'
						id='card-title-icons'
					>
						{/* This will hold the icon row at the top of the card */}
						{/* Table Number | Ticket # | Time Order was Placed At | Allergy Flag */}
						<span>🍽️&nbsp;{ticket.table_number}</span>&emsp;
						<span>📋&nbsp;{ticket.id}</span>&emsp;
						<span>
							📅&nbsp;
							{/* We use the DayJS library to convert time to a readable format */}
							<DayJS format='hh:mm A'>{ticket.placed_at}</DayJS>
						</span>
						{/* call our showAllergyFlag function for displaying the flag or not */}
						<span>&ensp;{showAllergyFlag({ ticket })}</span>
						{/* End icon-row title tag */}
					</Card.Title>
					{/* Open Stopwatch title tag */}
					<Card.Title id='stopwatch'>
						{/* div box to show our Stopwatch using our Timer Component */}
						<div className='d-inline-flex justify-content-center p-3 mb-2 text-dark'>
							⏱&nbsp;
							<Timer
								autostart={true}
								showDays={false}
								showHours={true}
								showMinutes={true}
								showSeconds={true}
								showCentiseconds={false}
							/>
							{/* Close div */}
						</div>
						{/* close Stopwatch Title tag */}
					</Card.Title>
					{/* open a Card Text container for the order info */}
					<Card.Text id='item-category-container'>
						{/* This span will hold the group name */}
						<span id='item-category-name'>
							<strong>{ticket.group}:</strong>
						</span>
						<br />
						{/* this span will hold the item name */}
						<span id='item-name'>
							&emsp;{ticket.item_name}&ensp;-&ensp;QTY:&nbsp;{ticket.quantity}
						</span>
						<br />
						{/* These spans will display the icons if true is found in the respected position */}
						&emsp;<span>{allergyArray[0] === true ? '🥛' : ''}&ensp;</span>
						<span>{allergyArray[1] === true ? '🍤' : ''}&ensp;</span>
						<span>{allergyArray[2] === true ? '🍞' : ''}&ensp;</span>
						<span>{allergyArray[3] === true ? '🥜' : ''}&ensp;</span>
						<span>{allergyArray[4] === true ? '🌰' : ''}&ensp;</span>
						<span>{allergyArray[5] === true ? '👀' : ''}&ensp;</span>
						<br />
						{/* Close the item-category-container tag */}
					</Card.Text>
					{/* Allergy Card */}
					{allergyArray[5] === true ? (
						<AllergyCard allergyComment={allergyArray[6]} />
					) : (
						<></>
					)}
					{/* End Allergy Card */}
					{/* Comment Card */}
					<CommentCard ticket={ticket} />
					{/* End Comment Card */}
					{/* Item Ready Button */}
					<Button
						className='mt-auto'
						id='item-ready-card-button'
						variant='success'
						size='lg'
						onClick={() => displayPopup(setOrderReadyButtonPopup)}
					>
						Item READY!
						{/* End Item Ready Button */}
					</Button>
					{/* Item Ready Popup Modal */}
					<Popup
						showPopup={orderReadyButtonPopup}
						setShowPopup={setOrderReadyButtonPopup}
						btn_text='🛎️ READY! 🛎️'
						text='Is this item ready to be sent to the table?'
						heading='ITEM READY'
						id={ticket.id}
					/>
					{/* Close Card Body Tag */}
				</Card.Body>
				{/* Open Card Footer Tag */}
				<Card.Footer id='card-footer-container'>
					{/* Span container to hold our placed ago text */}
					<span id='card-footer-placed-ago-text'>
						{/* uses the TimeAgo package to display the 'placed ago' text */}
						{/* takes in a date, provided by the API endpoint object */}
						{/* and a locale (optional) for formatting */}
						Order Placed <TimeAgo datetime={ticket.placed_at} locale='en_US' />
						{/* close placed ago text span */}
					</span>
					{/* close footer */}
				</Card.Footer>
				{/* close our card */}
			</Card>
		</>
	);
};

export default Cards;

// Set Title to a String Type
Cards.prototype = {
	ticket: PropTypes.object.isRequired, // ticket is an Object
};
