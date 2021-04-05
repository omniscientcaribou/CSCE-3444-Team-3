import { useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import { GiConsoleController, GiRoundTable } from 'react-icons/gi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FcClock } from 'react-icons/fc';
import { TiStopwatch } from 'react-icons/ti';
import { GrFlagFill } from 'react-icons/gr';
import { Button, CardDeck, Card } from 'react-bootstrap';
import Popup from '../components/Popups/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';
import NoteCard from './NoteCard';
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
const Cards = ({ ticket }) => {
	const [orderReadyButtonPopup, setOrderReadyButtonPopup] = useState(false);
	var hasFlag;

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

	const setFlag = ({ ticket }) => {
		ticket.allergy_flag === 'True' ? (hasFlag = true) : (hasFlag = false);
	};

	var today = new Date(),
		time =
			today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

	return (
		<>
			{setFlag({ ticket })}
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
					</Card.Text>
					{/* Note Card */}
					{hasFlag ? <NoteCard ticket={ticket} /> : <></>}
					{/* End Note Card */}
					<Button
						variant='success'
						size='lg'
						block
						onClick={() => displayPopup(setOrderReadyButtonPopup)}
					>
						Order READY!
					</Button>
					<Popup
						showPopup={orderReadyButtonPopup}
						setShowPopup={setOrderReadyButtonPopup}
						btn_text='🛎️ READY! 🛎️'
						text='Is this order ready to be delivered?'
						heading='ORDER READY'
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
