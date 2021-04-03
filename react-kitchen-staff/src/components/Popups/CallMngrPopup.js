import '../../css/Popup.css';
import { FaTimes } from 'react-icons/fa';
import { useRef, useEffect, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const CallMngrPopup = ({
	showPopup,
	setShowPopup,
	children,
	text,
	heading,
	btn_text,
}) => {
	const popupRef = useRef();

	const closePopup = (e) => {
		if (popupRef.current === e.target) {
			setShowPopup((prev) => !prev);
			toast.warn('⚠️ Call Manager Aborted', {
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
				toast.warn('⚠️ Call Manager Aborted', {
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
	const CallMngr = async () => {
		const kitchenRequest = {
			role: 'Kitchen',
			call_manager: 'true',
		};

		const response = await fetch('https://swe3444.herokuapp.com/api/task/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(kitchenRequest),
		});

		const result = await response.json();

		if (response.ok) {
			toast.success('🚀 Manager Successfully Called!', {
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
								onClick={() => {
									setShowPopup((prev) => !prev);
									toast.warn('⚠️ Call Manager Aborted', {
										position: 'bottom-right',
										autoClose: 5000,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true,
										progress: undefined,
									});
								}}
								// onClick={() => setShowPopup((prev) => !prev)}
							/>
						</div>
						<hr />
						<p className='pop-up-inner-text'>{text}</p>
						<br />
						{/* <Button className='popup-btn' text={btn_text} color='#74C3C8' /> */}
						<Button
							onClick={() => {
								CallMngr();
								setShowPopup((prev) => !prev);
							}}
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

export default CallMngrPopup;
