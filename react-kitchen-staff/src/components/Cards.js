import { useState } from 'react';
// import { Icon, InlineIcon } from '@iconify/react';
// import { GiConsoleController, GiRoundTable } from 'react-icons/gi';
// import { HiOutlineClipboardList } from 'react-icons/hi';
// import { FcClock } from 'react-icons/fc';
// import { TiStopwatch } from 'react-icons/ti';
import { GrFlagFill } from 'react-icons/gr';
import { Button, Card } from 'react-bootstrap';
import Popup from '../components/Popups/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import DayJS from 'react-dayjs';
import CommentCard from './CommentCard';
import AllergyCard from './AllergyCard';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Timer from './Timer';

TimeAgo.addDefaultLocale(en);

const Cards = ({ ticket }) => {
	const [orderReadyButtonPopup, setOrderReadyButtonPopup] = useState(false);
	var hasFlag;
	var allergyArray = [7];

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
	};

	const setFlag = ({ ticket }) => {
		ticket.allergy_flag === 'True' ? (hasFlag = true) : (hasFlag = false);
	};

	return (
		<>
			{setFlag({ ticket })}
			{checkAllergies({ ticket }, allergyArray)}
			<Card
				className='shadow-sm p-3 mb-5'
				id='cardTemplate'
				style={{
					backgroundColor: hasFlag ? 'rgba(217, 83, 79, 0.65)' : 'white',
					borderRadius: '1.15rem',
				}}
			>
				<Card.Body className='d-flex flex-column'>
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
							<DayJS local format='hh:mm A'>
								{ticket.placed_at}
							</DayJS>
						</span>
						<span>&ensp;{showAllergyFlag({ ticket })}</span>
					</Card.Title>
					<Card.Title>
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
						</div>
					</Card.Title>
					<Card.Text style={{ marginLeft: '0' }}>
						<span
							style={{
								color: 'purple',
								fontSize: '1.25em',
								fontWeight: 'bolder',
								marginLeft: '0',
							}}
						>
							<strong>{ticket.group}:</strong>
						</span>
						<br />
						<span style={{ fontSize: '1.25rem' }}>
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
					{/* Button Alignment */}
					<Button
						className='mt-auto'
						id='item-ready-card-button'
						variant='success'
						size='lg'
						onClick={() => displayPopup(setOrderReadyButtonPopup)}
						style={{ border: '1px solid black' }}
					>
						Item READY!
					</Button>
					{/* End Button Alignment */}

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
		</>
	);
};

export default Cards;
