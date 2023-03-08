/**
 *!                                         Project Object, keys and values
 * */
const projects = [

  {
    id: 0,
    projectTitle: 'Tonic',
    client: ['Canopy', 'Back End Dev', '2015'],
    projectDescription: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'css', 'JavaScript'],
    featureImageMob: './images/card-1.svg',
    featureImageDes: './images/Snapshoot Portfolio1.png.',
    live: ' https://tsheporamantso.github.io/Portfolio/',
    source: ' https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 1,
    projectTitle: 'Multi-Post Stories',
    clientMob: ['Canopy', 'Back End Dev', '2015'],
    clientDes: ['FACEBOOK', 'Back End Dev', '2015'],
    projectDescriptionMob: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectDescriptionDes: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tagsMob: ['html', 'css', 'JavaScript'],
    tagsDes: ['html', 'Ruby on rails', 'css', 'javaScript'],
    featureImageMob: './images/card-2.svg',
    featureImageDes: './images/Snapshoot Portfolio2.svg.',
    live: ' https://tsheporamantso.github.io/Portfolio/',
    source: ' https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 3,
    projectTitleMob: 'Tonic',
    projectTitleDes: 'Facebook 360',
    clientMob: ['Canopy', 'Back End Dev', '2015'],
    clientDes: ['FACEBOOK', 'Back End Dev', '2015'],
    projectDescriptionMob: ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    projectDescriptionDes: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tagsMob: ['html', 'css', 'JavaScript'],
    tagsDes: ['html', 'Ruby on rails', 'css', 'javaScript'],
    featureImageMob: './images/card-3.svg',
    featureImageDes: './images/Snapshoot Portfolio3.svg.',
    live: ' https://tsheporamantso.github.io/Portfolio/',
    source: ' https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 4,
    projectTitleDes: 'Uber Navigation',
    clientDes: ['Uber', 'Lead Developer', '2015'],
    projectDescriptionDes: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tagsDes: ['html', 'Ruby on rails', 'css', 'javaScript'],
    featureImageDes: './images/Snapshoot Portfolio4.svg.',
    live: ' https://tsheporamantso.github.io/Portfolio/',
    source: ' https://tsheporamantso.github.io/Portfolio/',
  },
];

// console.log(projects[0].client[0]);

const body = document.querySelector('body');
const btn = document.querySelector('.see__project1');
btn.addEventListener('click', () => {
  const section = document.createElement('div');
  const popup = document.createElement('div');
  section.className = 'mobile-popup';
  popup.className = 'modal';
  popup.innerHTML = `
  <div class="project__title__container">
  <h class="project__title">${projects[0].projectTitle}</h>
  <button data-close-button class="close-btn">&times;</button>
</div>
<ul class="client">
  <li class="project__name">${projects[0].client[0]}</li>
  <li class="counter">
    <img src="./images/Counter.svg" alt="period" />
  </li>
  <li class="project__role">${projects[0].client[1]}</li>
  <li class="counter">
    <img src="./images/Counter.svg" alt="period" />
  </li>
  <li class="year">${projects[0].client[2]}</li>
</ul>
<div class="card__image">
  <img src="${projects[0].featureImageMob}"/>
</div>
<p class="project__description">${projects[0].projectDescription}</p>
<ul class="tags">
  <li class="html">
    <a href="#" class="language">${projects[0].tags[0]}</a>
  </li>
  <li class="css">
    <a href="#" class="language">${projects[0].tags[1]}</a>
  </li>
  <li class="javascript">
    <a href="#" class="language">${projects[0].tags[1]}</a>
  </li>
</ul>
<hr id="line-pop" />
<div class="btn-container">
  <button class="see-live-container-btn">
    <a id="btn-icon" href="${projects.live}" class="see-live-btn"
      >See live &nbsp
      <img src="./images/Icon.svg" alt="see-live-icon" />
    </a>
  </button>
  <button class="see-source-container-btn">
    <a id="btn-icon" href="${projects.source}" class="see-source-btn"
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