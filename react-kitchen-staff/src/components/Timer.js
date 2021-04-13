import React, { useState, useEffect } from 'react'; // Needed for useState and useEffect
import PropTypes from 'prop-types'; // Needed for making the prototype 

// This is a custom Timer component used as a Stopwatch (incremental counting)
// Props include:
// 	autostart 			| Values: true / false | Should the Stopwatch start counting automatically once it's loaded | Default: false
// 	showDays 			| Values: true / false | Show Days in the time makeup 										| Default: false
// 	showHours 			| Values: true / false | Show Hours in the time makeup 										| Default: true
// 	showMinutes 		| Values: true / false | Show Minutes in the time makeup 									| Default: true
// 	showSeconds 		| Values: true / false | Show Seconds in the time makeup 									| Default: true
// 	showCentiseconds	| Values: true / false | Show Centiseconds/Milliseconds in the time makeup 					| Default: false
const Timer = ({
	autostart,
	showDays,
	showHours,
	showMinutes,
	showSeconds,
	showCentiseconds,
}) => {
	// useState arrays to handle the state changes of the various things
	const [timer, setTimer] = useState(0);
	const [startTimer, setStartTimer] = useState(false);
	const [autoStartState, setAutostart] = useState();
	const [showDaysState, setShowDays] = useState();
	const [showHoursState, setShowHours] = useState();
	const [showMinutesState, setShowMinutes] = useState();
	const [showSecondsState, setShowSeconds] = useState();
	const [showCentisecondsState, setShowCentiseconds] = useState();

	useEffect(() => {
		let interval = null; // Set interval to null
		// set our states to the passed in props
		setAutostart(autostart);
		setShowDays(showDays);
		setShowHours(showHours);
		setShowMinutes(showMinutes);
		setShowSeconds(showSeconds);
		setShowCentiseconds(showCentiseconds);

		// if autoStateState is true, set the state of startTimer to true, otherwise set it to false
		autoStartState ? setStartTimer(true) : setStartTimer(false);

		// if startTimer is true
		startTimer
			// set interval to update every 10s setting setTimer to the previous time + 10
			? (interval = setInterval(
					() => setTimer((prevTime) => prevTime + 10),
					10
			  ))
			  // if startTimer is false, clear our interval
			: clearInterval(interval);

		return () => clearInterval(interval); // return our cleaner function
	}, [ // List of dependencies for this function
		autostart,
		autoStartState,
		showCentiseconds,
		showDays,
		showHours,
		showMinutes,
		showSeconds,
		startTimer,
	]);

	// ternary operators that set the variable to the math formula to calculate the unit limited to 2 digits (.slice(-2)) if they're set to show, or undefined if they're set to false
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
		// div to hold out timers
		<div className='Timers'>
			{/* div to hold our display */}
			<div id='display'>
				{/* ternary operators to show the unit if true, or a fragment if false */}
				{showDaysState ? <span>{days}:</span> : <></>}
				{showHoursState ? <span>{hours}</span> : <></>}
				{showMinutesState ? <span>:{minutes}</span> : <></>}
				{showSecondsState ? <span>:{seconds}</span> : <></>}
				{showCentisecondsState ? <span>:{centiseconds}</span> : <></>}
			{/* close Timers div */}
			</div>
		{/* close Timers div */}
		</div> 
	);
};

// Set Default Props for Timer
Timer.defaultProps = {
	autostart: false,
	showDays: false,
	showHours: true,
	showMinutes: true,
	showSeconds: true,
	showCentiseconds: false,
};

// Set PropTypes for Timer
Timer.prototype = {
	autostart: PropTypes.bool,
	showDays: PropTypes.bool,
	showHours: PropTypes.bool,
	showMinutes: PropTypes.bool,
	showSeconds: PropTypes.bool,
	showCentiseconds: PropTypes.bool,
};

export default Timer;
