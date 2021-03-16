const CallWaitstaff = () => {
	return (
		<form className='add-form'>
			<div className='form-control'>
				<label>Call Waitstaff</label>
			</div>
			<div className='form-control form-control-check'>
				<label></label>
				<input type='checkbox' />
			</div>

			<input type='submit' value='Call Waitstaff' className='btn btn-block' />
		</form>
	);
};

export default CallWaitstaff;
