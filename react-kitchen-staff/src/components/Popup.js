import './Popup.css';
import Button from './Button';

const Popup = ({ trigger, setTrigger, children, text, heading, btn1_text, btn2_text }) => {
	return trigger ? (
		<div className='popup'>
			<div className='popup-inner'>
				<div className='popup-inner-header'>
					<h2>{heading}</h2>
				</div>
				<div className='pop-up-inner-text'>{text}</div>
				<div className='pop-up-inner-btn-container'>
					<Button
						className='close-btn'
						onClick={() => setTrigger(false)}
						text={btn1_text}
						color='purple'
					/>
					<Button
						className='close-btn'
						onClick={() => setTrigger(false)}
						text={btn2_text}
						color='purple'
					/>
				</div>
				{children}
			</div>
		</div>
	) : (
		''
	);
};

export default Popup;
