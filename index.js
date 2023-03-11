/**
   *! Responsive Mobile Menu Here
   * * */

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu__mobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.dt__link').forEach((n) => n
  .addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

/**
   *! Form Validation Here
   * * */

const form = document.getElementById('form');
const email = document.getElementById('email');
function isEmail(email) {
  if (email.toLowerCase() === email) {
    return true;
  }
  return false;
}

function checkInputs(event) {
  const emailValue = email.value;

  if (isEmail(emailValue)) {
    return true;
  }

  document.querySelector('.small').innerHTML = 'Invalid email. It should only contain lowercace';
  event.preventDefault();
  return false;
}

form.addEventListener('submit', checkInputs);
