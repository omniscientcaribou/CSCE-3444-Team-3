import { useState } from 'react';
import { GiRoundTable } from 'react-icons/gi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FcClock } from 'react-icons/fc';
import { TiStopwatch } from 'react-icons/ti';
import { Button, CardDeck, Card } from 'react-bootstrap';
import Popup from '../components/Popups/Popup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = () => {
	const [orderReadyButtonPopup, setOrderReadyButtonPopup] = useState(false);

	// Display Popup
	const displayPopup = (pid) => {
		pid((prev) => !prev);
	};

	var today = new Date(),
		time =
			today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

	return (
		<div>
			<CardDeck>
				<Card
					className='shadow-sm p-3 mb-5 bg-white rounded'
					style={{ width: '18rem' }}
				>
					<Card.Body>
						<Card.Title className='d-flex justify-content-around'>
							<span>
								<GiRoundTable /> 1
							</span>
							<span>
								<HiOutlineClipboardList /> 1
							</span>
							<span>
								<FcClock /> {time}
							</span>
						</Card.Title>
						<Card.Title>
							<div className='d-flex justify-content-center p-3 mb-2 bg-white text-dark'>
								<TiStopwatch />
							</div>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
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
						/>
					</Card.Body>
				</Card>
				<Card
					className='shadow-sm p-3 mb-5 bg-white rounded'
					style={{ width: '18rem' }}
				>
					<Card.Body>
						<Card.Title className='d-flex justify-content-around'>
							<span>
								<GiRoundTable /> 2
							</span>{' '}
							<span>
								<HiOutlineClipboardList /> 2
							</span>{' '}
							<span>
								<FcClock /> {time}
							</span>
						</Card.Title>
						<Card.Title>
							<div className='d-flex justify-content-center p-3 mb-2 bg-warning text-dark'>
								<TiStopwatch />
							</div>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
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
						/>
					</Card.Body>
				</Card>
				<Card
					className='shadow-sm p-3 mb-5 bg-white rounded'
					style={{ width: '18rem' }}
				>
					<Card.Body>
						<Card.Title className='d-flex justify-content-around'>
							<span>
								<GiRoundTable /> 3
							</span>
							<span>
								<HiOutlineClipboardList /> 3
							</span>
							<span>
								<FcClock /> {time}
							</span>
						</Card.Title>
						<Card.Title>
							<div className='d-flex justify-content-center p-3 mb-2 bg-danger text-white'>
								<TiStopwatch />
							</div>
						</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
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
						/>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>
	);
};

export default Cards;
