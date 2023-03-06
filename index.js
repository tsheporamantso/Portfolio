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
