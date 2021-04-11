import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const CommentCard = ({ ticket }) => {
	return (
		<div
			style={{
				border: '1px solid black',
				backgroundColor: '#fef6df',
				marginBottom: '1em',
				borderRadius: '1rem',
				width: '100%',
			}}
		>
			<Card.Text
				style={{
					paddingTop: '.35em',
					paddingLeft: '.15em',
					marginBottom: '.25em',
					backgroundColor: '#fabfb9',
					borderBottom: '1px solid black',
					borderRadius: '1rem 1rem 0 0',
				}}
			>
				<span
					style={{
						paddingTop: '.15em',
						paddingLeft: '.15em',
						fontSize: '1.1em',
						fontWeight: 'bolder',
						wordWrap: 'normal',
					}}
				>
					COMMENTS:
				</span>
			</Card.Text>
			<Card.Body>
				<pre>{ticket.comment}</pre>
			</Card.Body>
		</div>
	);
};

CommentCard.protoTypes = {
	ticket: PropTypes.object.isRequired,
};

export default CommentCard;
