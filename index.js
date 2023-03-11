/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

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

const fullName = document.querySelector('#username');
const feedback = document.querySelector('.msg');
function visitorData() {
  const visitor = {
    Name: fullName.value,
    Email: email.value,
    Message: feedback.value,
  };
  localStorage.setItem('visitor', JSON.stringify(visitor));
}
[fullName, email, feedback].forEach((input) => input.addEventListener('focusout', visitorData));
const visitorDataExist = JSON.parse(localStorage.getItem('visitor'));
if (visitorDataExist) {
  fullName.value = visitorDataExist.Name;
  email.value = visitorDataExist.Email;
  feedback.value = visitorDataExist.Message;
}

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
