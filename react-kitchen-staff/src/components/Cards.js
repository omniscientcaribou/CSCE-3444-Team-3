import { useState } from 'react';
import { GiConsoleController, GiRoundTable } from 'react-icons/gi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FcClock } from 'react-icons/fc';
import { TiStopwatch } from 'react-icons/ti';
import { Button, CardDeck, Card } from 'react-bootstrap';
import Popup from '../components/Popups/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'react-moment';

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

	// Display Popup
	const displayPopup = (pid) => {
		pid((prev) => !prev);
	};

	const allergyFlag = () => {
		return ticket.allergy_flag === 'True' ? <span>👀</span> : '';
	};

	var today = new Date(),
		time =
			today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

	return (
		<div>
			<CardDeck>
				<Card className='shadow-sm p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Card.Title className='d-flex justify-content-around'>
							<span>🍽️{ticket.table_number}</span>
							<span>📋{ticket.id}</span>
							<span>
								⌚️
								<Moment local format='hh:mm A'>
									{ticket.placed_at}
								</Moment>
							</span>
							{allergyFlag()}
						</Card.Title>
						<Card.Title>
							<div className='d-flex justify-content-center p-3 mb-2 bg-white text-dark'>
								⏱
							</div>
						</Card.Title>
						<Card.Text>
							<h3>
								<strong>{ticket.group}</strong>
							</h3>
							<p>
								{ticket.item_name} - QTY: {ticket.quantity}
							</p>
						</Card.Text>
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
							btn_text='READY!'
							text='Is the order ready for pickup?'
							heading='Order Ready'
							id={ticket.id}
						/>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>
	);
};

export default Cards;
