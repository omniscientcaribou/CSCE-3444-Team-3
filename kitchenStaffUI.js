document.addEventListener( 'DOMContentLoaded', function () {
	var ordersSlider = new Splide( '#orders-slider', {
    type        : 'loop',
    isNavigation: true,
    rewind      : true,
    trimSpace   : false,
    perPage     : 4,
    perMove     : 1,
    heightRatio : 0.325,
    gap         : '1rem',
	} ).mount();
	
	var notesSlider = new Splide( '#notes-slider', {
		type       : 'fade',
		pagination : false,
		arrows     : false,
		cover      : true,
    height     : '7vh',
	} ); // do not call mount() here.
	
	notesSlider.sync( ordersSlider ).mount();
} );