
var typed = new Typed(".typed1",
  {
    strings: [
      "Hello, World!",
      "I'm Maciek Chmura"],
    typeSpeed: 40,
    backSpeed: 15,
    backDelay: 1200,
    showCursor: false,
    loop: false
  });
var typed = new Typed(".typed2",
  {
    strings: [
      "a Front-End developer",
      ],
    startDelay: 4500,
    typeSpeed: 40,
    backSpeed: 15,
    backDelay: 1200,
    showCursor: false,
    loop: false
  });
  var typed = new Typed(".typed3",
  {
    strings: [
      "interested in...", "learning...", "working with:"
      ],
    startDelay: 6200,
    typeSpeed: 40,
    backSpeed: 15,
    backDelay: 600,
    showCursor: false,
    loop: false
  });
  var typed = new Typed(".typed4",
  {
    strings: [
      "React, PWA, charts and lots more",
      ],
    startDelay: 12000,
    typeSpeed: 80,
    backSpeed: 15,
    backDelay: 1200,
    showCursor: false,
    loop: false
  });







//Bulma control
  document.addEventListener('DOMContentLoaded', function () {
    
      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
    
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
    
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
    
    });
  