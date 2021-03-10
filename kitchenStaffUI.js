document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide', {
    type       : 'loop',
    rewind     : true,
    trimSpace  : false,
    perPage    : 4,
    perMove    : 1,
    heightRatio: 0.325,
    gap        : '1rem',
  } ).mount();
} );
