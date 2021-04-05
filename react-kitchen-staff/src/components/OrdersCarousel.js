import React, { Component } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import FetchOrder from '../components/FetchOrder';
import '../css/OrdersCarousel.css';
import Cards from './Cards';

export default class ThumbnailSlider extends React.Component {
	constructor(props) {
		super(props);

		this.primaryRef = React.createRef();
	}

	componentDidMount() {
		// Set the sync target right after the component is mounted.
		this.primaryRef.current.sync(this.secondaryRef.current.splide);
	}

	render() {
		const primaryOptions = {
			type: 'loop',
			width: 800,
			perPage: 2,
			perMove: 1,
			gap: '1rem',
			pagination: false,
		};

		return (
			<div>
				<Splide options={primaryOptions} ref={this.primaryRef}>
					<FetchOrder />
				</Splide>
			</div>
		);
	}
}
