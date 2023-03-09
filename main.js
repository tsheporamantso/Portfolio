/**
 *!                                         Project Object, keys and values
 * */
const projects = [
  {
    id: 0,
    mobTitle: 'Tonic',
    client: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'JavaScript'],
    featureImage: './images/card-1.svg',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 1,
    mobTitle: 'Multi-Post Stories',
    client: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'JavaScript'],
    featureImage: './images/card-2.svg',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 2,
    mobTitle: 'Tonic',
    client: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'JavaScript'],
    featureImage: './images/card-3.svg',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 3,
    DesTitle: 'Tonic',
    client: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'JavaScript'],
    featureImage: './images/Snapshoot Portfolio1.png',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 4,
    DesTitle: 'Multi-Post Stories',
    client: ['FACEBOOK', 'Back End Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    featureImage: './images/Snapshoot Portfolio2.svg',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 5,
    DesTitle: 'Facebook 360',
    client: ['FACEBOOK', 'Back End Dev', '2015'],
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    featureImage: './images/Snapshoot Portfolio3.svg',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 6,
    DesTitle: 'Uber Navigation',
    client: ['Uber', 'Lead Developer', '2015'],
    description: ' A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    featureImage: './images/Snapshoot Portfolio4.svg',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

];

const allElement = document.querySelector('#all-elements');
const ShowBtn = document.querySelectorAll('.see__project1');
const modal = document.querySelector('.modal');
ShowBtn.forEach((seeBtn, index) => {
  seeBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    allElement.classList.add('mobile-popup');
    modal.innerHTML = `
    <div id="modal">
    <div class="modal__header">
    <h class="modal__title" id="modal__title">${projects[index].mobTitle}</h>
    <button data-close-button class="close-btn" id="close-btn">&times;</button>
  </div>
  <ul class="modal__client" id="modal__client">
    <li class="modal__client__name" id="modal__client__name">${projects[index].client[0]}</li>
    <li class="modal__counter">
      <img tabindex="0" src="./images/Counter.svg" alt="period" />
    </li>
    <li class="modal__role" id="modal__role">${projects[index].client[1]}</li>
    <li class="modal__counter">
      <img tabindex="0" src="./images/Counter.svg" alt="period" />
    </li>
    <li class="modal__client__year">${projects[index].client[2]}</li>
  </ul>
  <img class="modal__image" src="${projects[index].featureImage}">
  <p class="modal__text" id="modal__text">${projects[index].descriptionMod}</p>
  <ul class="modal__tech">
    <li class="modal__html">
      <a class="modal__technologies" id="modal__technologies" href="#">${projects[index].technologies[0]}</a>
    </li>
    <li class="modal__css">
      <a class="modal__technologies" id="modal__technologies" href="#">${projects[index].technologies[1]}</a>
    </li>
    <li class="modal__javascript">
      <a class="modal__technologies" id="modal__technologies" href="#">${projects[index].technologies[2]}</a>
    </li>
  </ul>
  <hr class="modal__line">
  <div class="btn-container">
    <button class="see-live-container-btn">
      <a id="see__live" href="${projects[index].live}" class="see-live-btn"
        >See live &nbsp
        <img src="./images/Icon.svg" alt="see-live-icon" />
      </a>
    </button>
    <button class="see-source-container-btn">
      <a id="see__source" href="${projects[index].source}" class="see-source-btn"
        >See Source &nbsp
        <img src="./images/github.svg" alt="see-source-icon" />
      </a>
    </button>
    </div>
    `;
  });
});

document.body.appendChild(modal);

modal.addEventListener('click', (e) => {
  if (e.target.id === 'close-btn') {
    modal.style.display = 'none';
    allElement.classList.remove('mobile-popup');
  }
});

const AllElement = document.querySelector('#all-elements');
const showBtn = document.querySelectorAll('.see__project');
const Modal = document.querySelector('.modal');
showBtn.forEach((seeBtn, index) => {
  seeBtn.addEventListener('click', () => {
    Modal.style.display = 'block';
    AllElement.classList.add('mobile-popup');
    Modal.innerHTML = `
    <div class="d__modal">
        <div class="d__modal__header">
            <div class="d__modal__title">
                <h class="tittle">Tonic</h>
                <button data-close-button class="close-btn" id="close-btn">&times;</button>
            </div>
            <ul class="d__modal__client">
                <li class="d__modal__client__name">CANOPY</li>
                <li class="d__modal__counter">
                    <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li class="d__modal__client__role">Back End Dev</li>
                <li class="d__modal__counter">
                    <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li class="d__modal__year">2015</li>  
            </ul>
        </div>

        <div class="d__modal__image">
            <img src="./image/Snapshoot Portfolio1.png" alt="">
        </div>

        <div class="d__modal__main">
            <div class="d__modal__text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
            </div>
            <div class="technologies">
                <ul class="first__tech">
                    <li>
                        <a href="#">html</a>
                    </li>
                    <li>
                        <a href="#">css</a>
                    </li>
                    <li>
                        <a href="#">javascript</a>
                    </li>
                </ul>
                <ul class="sec__tech">
                    <li>
                        <a href="#">github</a>
                    </li>
                    <li>
                        <a href="#">ruby</a>
                    </li>
                    <li>
                        <a href="#">Bootstraps</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="btn-container">
            <button class="see-live-container-btn">
              <a id="see__live" href="${projects[index].live}" class="see-live-btn"
                >See live &nbsp
                <img src="./images/Icon.svg" alt="see-live-icon" />
              </a>
            </button>
            <button class="see-source-container-btn">
              <a id="see__source" href="${projects[index].source}" class="see-source-btn"
                >See Source &nbsp
                <img src="./images/github.svg" alt="see-source-icon" />
              </a>
            </button>
    </div>
    `;
  });
});

document.body.appendChild(Modal);

Modal.addEventListener('click', (e) => {
  if (e.target.id === 'close-btn') {
    modal.style.display = 'none';
    AllElement.classList.remove('mobile-popup');
  }
});
