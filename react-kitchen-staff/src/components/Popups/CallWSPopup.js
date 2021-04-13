import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { FaTimes } from 'react-icons/fa';
import { useRef, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

import '../../css/Popup.css';

const CallWSPopup = ({
	showPopup,
	setShowPopup,
	children,
	text,
	heading,
	btn_text,
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
			toast.warn('⚠️ Call Waitstaff Aborted', {
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

	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && showPopup) {
				setShowPopup((prev) => !prev);
				toast.warn('⚠️ Call Waitstaff Aborted', {
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
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	// POST Request
	const CallWS = async () => {
		const kitchenRequest = {
			role: 'Kitchen',
			call_waitstaff: 'true',
		};

		const response = await fetch('https://swe3444.herokuapp.com/api/task/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(kitchenRequest),
		});

		const result = await response.json();

		if (response.ok) {
			toast.success('🚀 Waitstaff Successfully Called!', {
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
									toast.warn('⚠️ Call Waitstaff Aborted', {
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
							onClick={() => {
								CallWS();
								setShowPopup((prev) => !prev);
							}}
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

export default CallWSPopup;
