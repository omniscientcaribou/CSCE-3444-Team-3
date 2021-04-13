import PropTypes from 'prop-types'; // Needed for PropTypes
import { Card } from 'react-bootstrap'; // Used for the BootStrap cards

import '../css/AllergyCard.css'; // Import our AllergyCard Stylesheet

// This component is used to display the Allergy Card on the order card.
// The Allergy Card is only shown when other is selected and lists the customer's allergies
// allergyComment is the json object retrieved from the API
const AllergyCard = ({ allergyComment }) => {
	const allergyCardHeader = 'ALLERGY (OTHER):'; // variable to hold our HEADER string

	return (
		// Bootstrap Card container to hold our card
		<Card id='allergy-card-container'>
			{/* Bootstrap Card Text Container */}
			<Card.Text id='allergy-card-text'>
				{/* Span to hold our header text */}
				<span id='allergy-card-header'>{allergyCardHeader}</span>
			</Card.Text>
			{/* Bootstrap Card Body to hold our allergy comment */}
			<Card.Body id='allergy-card-body'>{allergyComment}</Card.Body>
		</Card>
	);
};

AllergyCard.protoTypes = {
	allergyComment: PropTypes.string.isRequired,
};

export default AllergyCard;
