import './css/Popup.css';
import Button from './Button';
import { FaTimes } from 'react-icons/fa';
import { useRef, useEffect, useCallback } from 'react';

const Popup = ({ showPopup, setShowPopup, children, text, heading, btn_text }) => {
    const popupRef = useRef();

    const closePopup = e => {
        if (popupRef.current === e.target) {
            setShowPopup(prev => !prev);
        }
    };

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showPopup) {
            setShowPopup(prev => !prev)
        }
    }, [setShowPopup, showPopup])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

	return (
        <>
            {showPopup ? (
                <div className='popup-background' ref={popupRef} onClick={closePopup}>
                    <div className='popup-inner'>
                        <h2 className='popup-inner-header'>{heading}</h2>
                        <FaTimes
                            className='popup-inner-header-x-btn'
                            style={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => setShowPopup(prev => !prev)}
                        />
                        <br />
                        <p className='pop-up-inner-text'>{text}</p>
                        <br />
                        <Button className='popup-btn' text={btn_text} color='purple' />
                        {children}
                    </div>
                </div>
            ) : null}
        </>
	);
};

export default Popup;