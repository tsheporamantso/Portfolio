/**
 *!                                         Project Object, keys and values
 * */
// const projects = [

//   {
//     id: 0,
//     projectTitle: 'Tonic',
//     client: ['Canopy', 'Back End Dev', '2015'],
//     projectDescription: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     technologies: ['html', 'css', 'JavaScript'],
//     featureImage: './images/card-1.svg',
//     live: ' https://tsheporamantso.github.io/Portfolio/',
//     source: ' https://tsheporamantso.github.io/Portfolio/',
//   },

//   {
//     id: 1,
//     projectTitle: 'Tonic',
//     client: ['Canopy', 'Back End Dev', '2015'],
//     projectDescription: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     technologies: ['html', 'css', 'JavaScript'],
//     featureImage: './images/Snapshoot Portfolio1.png.',
//     live: ' https://tsheporamantso.github.io/Portfolio/',
//     source: ' https://tsheporamantso.github.io/Portfolio/',
//   },

//   {
//     id: 2,
//     projectTitle: 'Multi-Post Stories',
//     clientMob: ['Canopy', 'Back End Dev', '2015'],
//     projectDescriptionMob: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     technologies: ['html', 'css', 'JavaScript'],
//     featureImageMob: './images/card-2.svg',
//     live: ' https://tsheporamantso.github.io/Portfolio/',
//     source: ' https://tsheporamantso.github.io/Portfolio/',
//   },

//   {
//     id: 3,
//     projectTitle: 'Multi-Post Stories',
//     clientMob: ['Canopy', 'Back End Dev', '2015'],
//     projectDescriptionDes: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
//     technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
//     featureImageDes: './images/Snapshoot Portfolio2.svg.',
//     live: ' https://tsheporamantso.github.io/Portfolio/',
//     source: ' https://tsheporamantso.github.io/Portfolio/',
//   },

//   {
//     id: 4,
//     projectTitleMob: 'Tonic',
//     clientMob: ['Canopy', 'Back End Dev', '2015'],
//     projectDescriptionMob: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
//     technologies: ['html', 'css', 'JavaScript'],
//     featureImageMob: './images/card-3.svg',
//     live: ' https://tsheporamantso.github.io/Portfolio/',
//     source: ' https://tsheporamantso.github.io/Portfolio/',
//   },

//   {
//     id: 5,
//     projectTitleDes: 'Facebook 360',
//     clientDes: ['FACEBOOK', 'Back End Dev', '2015'],
//     projectDescriptionDes: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
//     technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
//     featureImageDes: './images/Snapshoot Portfolio3.svg.',
//     live: ' https://tsheporamantso.github.io/Portfolio/',
//     source: ' https://tsheporamantso.github.io/Portfolio/',
//   },

//   {
//     id: 6,
//     projectTitleDes: 'Uber Navigation',
//     clientDes: ['Uber', 'Lead Developer', '2015'],
//     projectDescriptionDes: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
//     technolies: ['html', 'Ruby on rails', 'css', 'javaScript'],
//     featureImageDes: './images/Snapshoot Portfolio4.svg.',
//     live: ' https://tsheporamantso.github.io/Portfolio/',
//     source: ' https://tsheporamantso.github.io/Portfolio/',
//   },
// ];

// console.log(projects[1]);

const body = document.querySelector('body');
const btn = document.querySelector('.see__project1');
btn.addEventListener('click', () => {
  const section = document.createElement('div');
  const popup = document.createElement('div');
  section.className = 'mobile-popup';
  popup.className = 'modal';
  popup.innerHTML = `
  <div class="modal" id="modal">
  <div class="modal__header">
    <h class="modal__title" id="modal__title">Tonic</h>
    <button data-close-button class="close-btn">&times;</button>
  </div>
  <ul class="modal__client" id="modal__client">
    <li class="modal__client__name" id="modal__client__name">Canopy</li>
    <li class="modal__counter">
      <img src="./images/Counter.svg" alt="">
    </li>
    <li class="modal__role" id="modal__role">Back End Dev</li>
    <li class="modal__counter">
      <img src="./images/Counter.svg" alt="">
    </li>
    <li class="modal__client__year">2015</li>
  </ul>
  <img class="modal__image" id="modal__image" src="./images/card-1.svg" alt="">
  <p class="modal__text" id="modal__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
  <ul class="modal__tech">
    <li class="modal__html">
      <a class="modal__technologies" id="modal__technologies" href="#">html</a>
    </li>
    <li class="modal__css">
      <a class="modal__technologies" id="modal__technologies" href="#">css</a>
    </li>
    <li class="modal__javascript">
      <a class="modal__technologies" id="modal__technologies" href="#">JavaScript</a>
    </li>
  </ul>
  <hr class="modal__line">
  <div class="btn-container">
    <button class="see-live-container-btn">
      <a id="see__live" href="#" class="see-live-btn"
        >See live &nbsp
        <img src="./images/Icon.svg" alt="see-live-icon" />
      </a>
    </button>
    <button class="see-source-container-btn">
      <a id="see__source" href="#" class="see-source-btn"
        >See Source &nbsp
        <img src="./images/github.svg" alt="see-source-icon" />
      </a>
    </button>
</div>
            `;
  section.appendChild(popup);
  body.appendChild(section);
  const close = document.querySelector('.close-btn');

  close.addEventListener('click', () => {
    body.removeChild(section);
  });
});