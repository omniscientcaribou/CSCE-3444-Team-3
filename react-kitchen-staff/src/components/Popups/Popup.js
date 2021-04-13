import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import { useRef, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import '../../css/Popup.css';

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

	const animation = useSpring({
		config: {
			duration: 75,
		},
		opacity: showPopup ? 1 : 0,
		transform: showPopup ? `translateY(0%)` : `translateY(-100%)`,
	});

	const closePopup = (e) => {
		if (popupRef.current === e.target) {
			setShowPopup((prev) => !prev);
			toast.warn('⚠️ Item READY Aborted', {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const closeOnKeyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showPopup) {
				setShowPopup((prev) => !prev);
				toast.warn('⚠️ Item READY Aborted', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
		},
		[setShowPopup, showPopup]
	);

	useEffect(() => {
		document.addEventListener('keydown', closeOnKeyPress);
		return () => document.removeEventListener('keydown', closeOnKeyPress);
	}, [closeOnKeyPress]);

	// PATCH Request
	const updateTicket = async (id) => {
		let PATCH_URL = `https://swe3444.herokuapp.com/api/ordercontent/${id}/`;
		const updateRequest = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ state: 'READY TO BE DELIVERED' }),
		};

		const response = await fetch(PATCH_URL, updateRequest);
		const result = await response.json();

		if (response.ok) {
			toast.success(`✔️ Ticket ${id} Marked as READY TO BE DELIVERED`, {
				position: 'bottom-right',
				autoClose: 2300,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}

		return result;
	};

	return ReactDOM.createPortal(
		<>
			{showPopup ? (
				<div className='popup-background' ref={popupRef} onClick={closePopup}>
					<animated.div className='popup-inner' style={animation}>
						<div className='row'>
							<h2 className='popup-inner-header'>{heading}</h2>
							<FaTimes
								className='popup-inner-header-x-btn'
								style={{ color: 'red', cursor: 'pointer' }}
								onClick={() => {
									setShowPopup((prev) => !prev);
									toast.warn('⚠️ Item READY Aborted', {
										position: 'bottom-right',
										autoClose: 5000,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true,
										progress: undefined,
									});
								}}
							/>
						</div>
						<hr />
						<p className='pop-up-inner-text'>{text}</p>
						<br />
						<Button
							onClick={() => updateTicket(id)}
							variant='info'
							size='lg'
							style={{ border: '1px solid black' }}
						>
							{btn_text}
						</Button>
						{children}
					</animated.div>
				</div>
			) : null}
		</>,
		document.getElementById('root')
	);
};

export default Popup;
