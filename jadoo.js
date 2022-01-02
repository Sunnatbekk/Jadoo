
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});




var splide = new Splide( '.splide', {
  perPage: 3,
  gap    : '2rem',
  breakpoints: {
    640: {
      perPage: 2,
      gap    : '.7rem',
      height : '12rem',
    },
    480: {
      perPage: 1,
      gap    : '.7rem',
      height : '14rem',
    },
  },
} );

splide.mount();

