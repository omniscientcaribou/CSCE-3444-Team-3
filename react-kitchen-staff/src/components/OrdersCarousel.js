import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import '../css/OrdersCarousel.css';
import Cards from './Cards';

export default class OrdersCarousel extends Component {
	state = {
		slideIndex: 0,
	};

	render() {
		return (
			<Carousel
				slideIndex={this.state.slideIndex}
				afterSlide={(slideIndex) => this.setState({ slideIndex })}
			>
				<Cards />
			</Carousel>
		);
	}
}
