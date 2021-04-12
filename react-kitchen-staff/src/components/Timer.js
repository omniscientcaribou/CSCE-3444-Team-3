import React, { useState, useEffect } from 'react';

const Timer = ({
	autostart,
	showDays,
	showHours,
	showMinutes,
	showSeconds,
	showCentiseconds,
}) => {
	const [timer, setTimer] = useState(0);
	const [startTimer, setStartTimer] = useState(false);
	const [autoStartState, setAutostart] = useState();
	const [showDaysState, setShowDays] = useState();
	const [showHoursState, setShowHours] = useState();
	const [showMinutesState, setShowMinutes] = useState();
	const [showSecondsState, setShowSeconds] = useState();
	const [showCentisecondsState, setShowCentiseconds] = useState();

	useEffect(() => {
		let interval = null;
		setAutostart(autostart);
		setShowDays(showDays);
		setShowHours(showHours);
		setShowMinutes(showMinutes);
		setShowSeconds(showSeconds);
		setShowCentiseconds(showCentiseconds);

		autoStartState ? setStartTimer(true) : setStartTimer(false);

		startTimer
			? (interval = setInterval(
					() => setTimer((prevTime) => prevTime + 10),
					10
			  ))
			: clearInterval(interval);

		return () => clearInterval(interval);
	}, [autostart, autoStartState, showCentiseconds, showDays, showHours, showMinutes, showSeconds, startTimer]);

	let days = showDaysState
		? ('0' + Math.floor(timer / (60 * 60 * 24 * 1000))).slice(-2)
		: undefined;
	let hours = showHoursState
		? ('0' + Math.floor(timer / 3600000)).slice(-2)
		: undefined;
	let minutes = showMinutesState
		? ('0' + (Math.floor(timer / 60000) % 60)).slice(-2)
		: undefined;
	let seconds = showSecondsState
		? ('0' + (Math.floor(timer / 1000) % 60)).slice(-2)
		: undefined;
	let centiseconds = showCentisecondsState
		? ('0' + (Math.floor(timer / 10) % 100)).slice(-2)
		: undefined;

	return (
		<div className='Timers'>
			<div id='display'>
				{showDaysState ? <span>{days}:</span> : <></>}
				{showHoursState ? <span>{hours}</span> : <></>}
				{showMinutesState ? <span>:{minutes}</span> : <></>}
				{showSecondsState ? <span>:{seconds}</span> : <></>}
				{showCentisecondsState ? <span>:{centiseconds}</span> : <></>}
			</div>
		</div>
	);
};

export default Timer;
