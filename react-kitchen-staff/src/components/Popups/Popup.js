import '../../css/Popup.css';
// import Button from './Button';
import { FaTimes } from 'react-icons/fa';
import { useRef, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Popup = ({
	showPopup,
	setShowPopup,
	children,
	text,
	heading,
	btn_text,
	id,
}) => {
	const popupRef = useRef();

	const closePopup = (e) => {
		if (popupRef.current === e.target) {
			setShowPopup((prev) => !prev);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showPopup) {
				setShowPopup((prev) => !prev);
			}
		},
		[setShowPopup, showPopup]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	// PUT Request
	const updateTicket = async (id) => {
		let p_id = id.id;
		// console.log('p_id: ', p_id);
		const updateRequest = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json', 'Accept': 'application/json',
			},
			body: JSON.stringify({ state: 'READY TO BE DELIVERED' }),
		};

		const response = await fetch(
			`https://swe3444.herokuapp.com/api/ordercontent/${p_id}`,
			updateRequest
		);
		const result = await response.json();

		if (response.ok) {
			toast.success('✔️ Ticket Marked as READY TO BE DELIVERED', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		return result;
	};

	return (
		<>
			{showPopup ? (
				<div className='popup-background' ref={popupRef} onClick={closePopup}>
					<div className='popup-inner'>
						<div className='row'>
							<h2 className='popup-inner-header'>{heading}</h2>
							<FaTimes
								className='popup-inner-header-x-btn'
								style={{ color: 'red', cursor: 'pointer' }}
								onClick={() => setShowPopup((prev) => !prev)}
							/>
						</div>
						<hr />
						<p className='pop-up-inner-text'>{text}</p>
						<br />
						{/* <Button className='popup-btn' text={btn_text} color='#74C3C8' /> */}
						<Button
							onClick={() => updateTicket({ id })}
							variant='info'
							size='lg'
							block
						>
							{btn_text}
						</Button>
						{children}
					</div>
				</div>
			) : null}
		</>
	);
};

export default Popup;
