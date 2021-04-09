import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const AllergyCard = ({ allergyComment }) => {
	return (
		<div
			style={{
				border: '1px solid black',
				backgroundColor: '#fef6df',
				marginBottom: '1em',
				borderRadius: '1rem',
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
						fontSize: '1.17em',
						fontWeight: 'bolder',
					}}
				>
					ALLERGY (OTHER):
				</span>
			</Card.Text>
			<Card.Body>
				<pre>{allergyComment}</pre>
			</Card.Body>
		</div>
	);
};

AllergyCard.protoTypes = {
	allergyComment: PropTypes.string.isRequired,
};

export default AllergyCard;
