document.addEventListener('DOMContentLoaded', function () {
  var loginLink1 = document.querySelector('.login-form .form-change');
  var loginLink2 = document.querySelector('.register-form .form-change');

  loginLink1.addEventListener('click', function (event) {
      event.preventDefault();

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
});


// -----togle menu-----

function toggleMenu() {
  console.log(55);
  var menu = document.querySelector('.menu');
  menu.style.right = (menu.style.right === '0%' || menu.style.right === '') ? '-100%' : '0%';
}