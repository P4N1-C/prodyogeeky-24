gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  var loginLink1 = document.querySelector('.login-form .form-change');
  var loginLink2 = document.querySelector('.register-form .form-change');

  loginLink1.addEventListener('click', function (event) {
      event.preventDefault();
      elemAnimation();
      console.log(55);
      var registerForm = document.querySelector('.register-form');
      var loginForm = document.querySelector('.login-form');

      if (registerForm.style.display === 'block') {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
      } else {
          registerForm.style.display = 'block';
          loginForm.style.display = 'none';
      }

  });

  loginLink2.addEventListener('click', function (event) {
    event.preventDefault();
    elemAnimation();
    var registerForm = document.querySelector('.register-form');
    var loginForm = document.querySelector('.login-form');

    if (registerForm.style.display === 'block') {
      registerForm.style.display = 'none';
      loginForm.style.display = 'block';
    } else {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    }

});
});


// -----togle menu-----

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.right = (menu.style.right === '0%' || menu.style.right === '') ? '-100%' : '0%';

  gsap.from('.menu-list', {
    x: '-100%',
    opacity: 0,
    duration: .75
  })

  gsap.from('.menu-socials', {
    x: '-100%',
    duration: 1
  })
}


// landing animations
function animateElements() {
  // Animation for the left image
  gsap.fromTo('.left-img-container', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  // Animation for the right image
  gsap.fromTo('.right-img-container', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  // Animation for the header
  gsap.fromTo('.header', { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  baffle('.header nav a')
    .reveal(1000)
    .set({
        characters: '▒░░░░█░░▒█▓▓░█/░░>▒/▒/▓▒░',
        speed: 150
    });
  
    elemAnimation();
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(animateElements);
});

function elemAnimation() {
  gsap.from('.register-content', {
    x: '-100%',
    opacity: 0,
    duration:1
  })

  gsap.from('.wrapper', {
    y: '100%',
    opacity: 0,
    duration:1
  })
}
