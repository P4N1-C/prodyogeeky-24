gsap.registerPlugin(ScrollTrigger);

// toglle menu 

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

// main JS


// landing animations
function animateElements() {
  // Animation for the left image
  gsap.fromTo('.left-img-container', { x: '-100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  // Animation for the right image
  gsap.fromTo('.right-img-container', { x: '100%', opacity: 0 }, { x: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  // Animation for the header
  gsap.fromTo('.header', { y: '-100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' });

  baffle('.title h1')
    .reveal(500)
    .set({
        characters: '▒░░░░█░░▒█▓▓░█/░░>▒/▒/▓▒░',
        speed: 150
    });

  baffle('.header nav a')
    .reveal(1000)
    .set({
        characters: '▒░░░░█░░▒█▓▓░█/░░>▒/▒/▓▒░',
        speed: 150
    });
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(animateElements);
});


  // Scroll-triggered animations for the home section
gsap.to('.left-img-container img', { x: '-100%', opacity: '0', scrollTrigger: { trigger: '.landing-page', start: 'bottom bottom', end: 'bottom top', scrub: 0.5} });
gsap.to('.right-img-container img', { x: '100%', opacity: '0', scrollTrigger: { trigger: '.landing-page', start: 'bottom bottom', end: 'bottom top', scrub: 0.5} });

  // Scroll-triggered animations for the about section
gsap.from('.about-left-section', { x: '-100%', scrollTrigger: { trigger: '.about', start: 'top center', end: 'center center', scrub: 1 } });
gsap.from('.about-right-section', { y: '100%', scrollTrigger: { trigger: '.about', start: 'top center', end: 'center center', scrub: 1 } });

  // Scroll-triggered animations for the events section
gsap.from('.event-left-section', { x: '-100%', scrollTrigger: { trigger: '.events', start: 'top bottom', end: 'center center', scrub: 1 } });
gsap.from('.event-right-section', { y: '100%', scrollTrigger: { trigger: '.events', start: 'top bottom', end: 'center center', scrub: 1 } });

// Scroll-triggered animations for the contact section
gsap.to('.bg-image-container img', { 
  scale: '1.5', 
  scrollTrigger: { 
    trigger: '.contact', 
    start: 'top center', 
    end: 'center center', 
    scrub: 1
  } });
gsap.from('.contact-left-section', { 
  y: '100%',
  scrollTrigger: {
  trigger: '.contact',
  start: 'top bottom',
  end: 'center center',
  scrub: 1
} });
gsap.from('.contact-right-section', { 
  x: '-200%',
  scrollTrigger: {
  trigger: '.contact',
  start: 'top bottom',
  end: 'center center',
  scrub: 1
} });

//scrol-triggered animations for the footer section
gsap.from('footer', {
  y: '20%',
  opacity: '0',
  scrollTrigger: {
    trigger: '.footer',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: 1
  }
})

//active class 

document.addEventListener("DOMContentLoaded", function() {
  // Get all section elements
  var sections = document.querySelectorAll("section");
  // Get all anchor tags in the menu
  var menuItems = document.querySelectorAll(".menu-home a");

  // Function to check which section is in the viewport
  function updateActiveSection() {
      sections.forEach(function(section, index) {
          var rect = section.getBoundingClientRect();
          var offset = window.innerHeight * 0.4; // Adjust this value as needed

          if (rect.top < offset && rect.bottom >= offset) {
              // Add "active" class to the corresponding menu item
              menuItems[index].classList.add("active");
          } else {
              // Remove "active" class from other menu items
              menuItems[index].classList.remove("active");
          }
      });
  }
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection();
});

