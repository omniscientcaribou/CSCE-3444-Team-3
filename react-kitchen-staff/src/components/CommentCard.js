import PropTypes from 'prop-types'; // Needed for PropTypes
import { Card } from 'react-bootstrap'; // Used for the BootStrap cards

import '../css/CommentCard.css'; // Import our CommentCard Stylesheet

// This component is used to display the Comments card on the order card. The comment card contains order customization information
// Ticket is the json object retrieved from the API
const CommentCard = ({ ticket }) => {
	const commentCardHeader = 'COMMENTS:'; // variable to hold our HEADER string
	return (
		// Bootstrap Card container to hold our card
		<Card id='comment-card-container'>
			{/* Bootstrap Card Text Container */}
			<Card.Text id='comment-card-text'>
				{/* Span to hold our header text */}
				<span id='comment-card-header'>{commentCardHeader}</span>
			</Card.Text>
			{/* Bootstrap Card Body to hold our comment */}
			<Card.Body id='comment-card-body'>{ticket.comment}</Card.Body>
		</Card>
	);
};

// State that our prototype is an object and is required
CommentCard.protoTypes = {
	ticket: PropTypes.object.isRequired,
};

export default CommentCard;
