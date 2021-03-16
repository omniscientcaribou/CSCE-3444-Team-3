import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

// Set Default Title
Header.defaultProps = {
    title: 'Kitchen Staff',
}

// Set Title to a String Type
Header.prototype = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
