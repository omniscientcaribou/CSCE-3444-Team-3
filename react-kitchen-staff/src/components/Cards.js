import { useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import { GiConsoleController, GiRoundTable } from 'react-icons/gi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FcClock } from 'react-icons/fc';
import { TiStopwatch } from 'react-icons/ti';
import { GrFlagFill } from 'react-icons/gr';
import { Button, Card } from 'react-bootstrap';
import Popup from '../components/Popups/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import CommentCard from './CommentCard';
import AllergyCard from './AllergyCard';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en);

// allergy_flag
// comment
// group
// id
// item_name
// order_id
// placed_at
// quantity
// state
// table_number

// Dairy (emoji: Cow / Glass of Milk) Shellfish (emoji: Shrimp) Gluten (emoji: Loaf Of Bread) Peanut (emoji: Peanuts) TreeNut (emoji: Chestnut) Other (Show Comment)
const Cards = ({ ticket }) => {
	const [orderReadyButtonPopup, setOrderReadyButtonPopup] = useState(false);
	var hasFlag;
	var allergyArray = [7];
	// var allergyDairy;
	// var allergyShellfish;
	// var allergyGluten;
	// var allergyPeanut;
	// var allergyTreeNut;
	// var allergyOther;

	// Display Popup
	const displayPopup = (pid) => {
		pid((prev) => !prev);
	};

	const showAllergyFlag = ({ ticket }) => {
		return ticket.allergy_flag === 'True' ? (
			<span>
				<GrFlagFill
					style={{
						color: 'red',
						fontSize: '1.25em',
						fontWeight: 'bolder',
						paddingBottom: '2px',
					}}
				/>
			</span>
		) : (
			''
		);
	};

	const checkAllergies = ({ ticket }, allergyArray) => {
		var allergyList = [];

		allergyList = ticket.allergy_comment.split('|');
		// allergyList = allergyList.slice(0, allergyList.length - 1);

		for (let i = 0; i < allergyList.length; i++) {
			if (allergyList[i] === 'Dairy' ? (allergyArray[0] = true) : '');
			if (allergyList[i] === 'Shellfish' ? (allergyArray[1] = true) : '');
			if (allergyList[i] === 'Gluten' ? (allergyArray[2] = true) : '');
			if (allergyList[i] === 'Peanut' ? (allergyArray[3] = true) : '');
			if (allergyList[i] === 'TreeNut' ? (allergyArray[4] = true) : '');
			if (allergyList[i] === 'Other') {
				allergyArray[5] = true;
				allergyArray[6] = allergyList[i + 1];
				i++;
			}
		}

		// for (let i = 0; i < allergyList.length; i++) {
		// 	allergyList[i] === 'Dairy'
		// 		? (allergyDairy = true)
		// 		: (allergyDairy = false);
		// 	allergyList[i] === 'Shellfish'
		// 		? (allergyShellfish = true)
		// 		: (allergyShellfish = false);
		// 	allergyList[i] === 'Gluten'
		// 		? (allergyGluten = true)
		// 		: (allergyGluten = false);
		// 	allergyList[i] === 'Peanut'
		// 		? (allergyPeanut = true)
		// 		: (allergyPeanut = false);
		// 	allergyList[i] === 'TreeNut'
		// 		? (allergyTreeNut = true)
		// 		: (allergyTreeNut = false);
		// 	allergyList[i] === 'Other'
		// 		? (allergyOther = true)
		// 		: (allergyOther = false);

		// 	return {
		// 		allergyDairy,
		// 		allergyShellfish,
		// 		allergyGluten,
		// 		allergyPeanut,
		// 		allergyTreeNut,
		// 		allergyOther,
		// 	};
	};

	const setFlag = ({ ticket }) => {
		ticket.allergy_flag === 'True' ? (hasFlag = true) : (hasFlag = false);
	};

	var today = new Date(),
		time =
			today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

	return (
		<>
			{setFlag({ ticket })}
			{checkAllergies({ ticket }, allergyArray)}
			{/* <CardDeck> */}
			<Card
				className='shadow-sm p-3 mb-5'
				id='cardTemplate'
				style={{
					backgroundColor: hasFlag ? 'rgba(217, 83, 79, 0.65)' : 'white',
					borderRadius: '1.15rem',
				}}
			>
				<Card.Body>
					<Card.Title
						className='d-flex justify-content-around'
						style={{
							fontSize: '1em',
							fontWeight: 'bold',
						}}
					>
						<span>🍽️&nbsp;{ticket.table_number}</span>&emsp;
						<span>📋&nbsp;{ticket.id}</span>&emsp;
						<span>
							📅&nbsp;
							<Moment local format='hh:mm A'>
								{ticket.placed_at}
							</Moment>
						</span>
						<span>&ensp;{showAllergyFlag({ ticket })}</span>
					</Card.Title>
					<Card.Title>
						<div className='d-flex justify-content-center p-3 mb-2 text-dark'>
							⏱
						</div>
					</Card.Title>
					<Card.Text>
						<span
							style={{
								color: 'purple',
								fontSize: '1.17em',
								fontWeight: 'bolder',
							}}
						>
							<strong>{ticket.group}:</strong>
						</span>
						<br />
						<span>
							&emsp;{ticket.item_name}&ensp;-&ensp;QTY:&nbsp;{ticket.quantity}
						</span>
						<br />
						&emsp;<span>{allergyArray[0] === true ? '🥛' : ''}&ensp;</span>
						<span>{allergyArray[1] === true ? '🍤' : ''}&ensp;</span>
						<span>{allergyArray[2] === true ? '🍞' : ''}&ensp;</span>
						<span>{allergyArray[3] === true ? '🥜' : ''}&ensp;</span>
						<span>{allergyArray[4] === true ? '🌰' : ''}&ensp;</span>
						<span>{allergyArray[5] === true ? '👀' : ''}&ensp;</span>
						<br />
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
					<Button
						variant='success'
						size='lg'
						block
						onClick={() => displayPopup(setOrderReadyButtonPopup)}
					>
						Item READY!
					</Button>
					<Popup
						showPopup={orderReadyButtonPopup}
						setShowPopup={setOrderReadyButtonPopup}
						btn_text='🛎️ READY! 🛎️'
						text='Is this item ready to be sent to the table?'
						heading='ITEM READY'
						id={ticket.id}
					/>
				</Card.Body>
				<Card.Footer
					style={{
						backgroundColor: 'transparent',
						border: 'none',
						fontSize: '.75em',
					}}
				>
					Order Placed <ReactTimeAgo date={ticket.placed_at} locale='en-US' />
				</Card.Footer>
			</Card>
			{/* </CardDeck> */}
		</>
	);
};

export default Cards;
