/* eslint-disable max-len */
/**
 *!                                         Project Object, keys and values
 * */
const projects = [
  {
    id: 0,
    mobTitle: 'To-Do List',
    desTitle: 'Awesome Book',
    client: ['Microverse', 'Front End Dev', '2023'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMod: 'This Awesome books project is based on an online website that allows users to add/remove books and their authors from a list of books or to form a library of books which are stored in a local storage.',
    technologies: ['html', 'css', 'JavaScript'],
    desTechnologies: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    featureImageMob: './images/Awesome books2.png',
    featureImageDes: './images/awesome books 3.png',
    live: 'https://tsheporamantso.github.io/Awesome_books/',
    source: 'https://github.com/tsheporamantso/Awesome_books',
  },

  {
    id: 1,
    mobTitle: 'Multi-Post Stories',
    desTitle: 'To-Do List',
    client: ['Microverse', 'Front End Dev', '2023'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMod: 'This project is an online To Do list that display users activities planned to do, also allow user to add task planned to accomplish and delete those already done.',
    technologies: ['html', 'css', 'JavaScript'],
    desTechnologies: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    featureImageMob: './images/To-Do-List.png',
    featureImageDes: './images/To-Do-List.png',
    live: 'https://tsheporamantso.github.io/To-Do-List/dist/',
    source: 'https://github.com/tsheporamantso/To-Do-List',
  },

  {
    id: 2,
    mobTitle: 'To-Do-List',
    desTitle: 'United Nations Climate Change',
    client: ['United Nations', 'Front End Dev', '2022'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMod: 'This project is about the United Nations Climate Change conference held in November 2022.',
    technologies: ['html', 'css', 'JavaScript'],
    desTechnologies: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    featureImageMob: './images/UN Climate Change.png',
    featureImageDes: './images/to-do-list2.png',
    live: ' https://tsheporamantso.github.io/First-Capstone-Project/',
    source: 'https://github.com/tsheporamantso/First-Capstone-Project',
  },

  {
    id: 3,
    mobTitle: 'Awesome Books',
    desTitle: 'Awesome Books',
    client: ['Microverse', 'Front End Dev', '2023'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'css', 'JavaScript'],
    desTechnologies: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    featureImageMob: './images/card-1.svg',
    featureImageDes: './images/Snapshoot Portfolio4.svg',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 4,
    desTitle: 'Multi-Post Stories',
    mobTitle: 'Awesome Books',
    client: ['Microverse', 'Front End Dev', '2023'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionMod: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    desTechnologiesDes: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    featureImageMob: './images/card-1.svg',
    featureImage: './images/Snapshoot Portfolio2.svg',
    live: 'https://tsheporamantso.github.io/Portfolio/',
    source: 'https://tsheporamantso.github.io/Portfolio/',
  },

  {
    id: 5,
    desTitle: 'Awesome Books',
    mobTitle: 'Awesome Books',
    client: ['Microverse', 'Front End Dev', '2023'],
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    descriptionMod: 'This Awesome books project is based on an online website that allows users to add/remove books and their authors from a list of books or to form a library of books which are stored in a local storage.',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    desTechnologies: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    featureImageMob: './images/awesome books 3.png',
    featureImageDes: './images/Snapshoot Portfolio3.svg',
    live: 'https://tsheporamantso.github.io/Awesome_books/',
    source: 'https://github.com/tsheporamantso/Awesome_books',
  },

  {
    id: 6,
    desTitle: 'United Nations',
    client: ['UN', 'Lead Developer', '2022'],
    description: ' A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    descriptionMod: 'This project is about the United Nations Climate Change conference held in November 2022.',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    desTechnologies: ['html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstraps'],
    featureImageMob: './images/UN2.png',
    featureImageDes: './images/Snapshoot Portfolio4.svg',
    live: 'https://tsheporamantso.github.io/First-Capstone-Project/',
    source: 'https://github.com/tsheporamantso/First-Capstone-Project',
  },

];

// This function is for close for mobile ------------------------------->
const allElement = document.querySelector('#all-elements');
const modal = document.querySelector('.modal');

document.body.appendChild(modal);

modal.addEventListener('click', (e) => {
  if (e.target.id === 'close-btn') {
    modal.style.display = 'none';
    allElement.classList.remove('mobile-popup');
  }
});

// Ends here---------------------------------------------------------^

//  Dynamic designs for all cards -------------------------------------------->
const cards = document.querySelector('.allProjects');
function createCards() {
  const code = `
  <section class="desktop__cards__container">
        <div class="desktop__works" id="portfolio2">
          <div class="desktop__cards">
            <img
              tabindex="0"
              src="./images/Awesome books2.png"
              alt="Project image"
            />
            <div class="desktop__clients__info">
              <h tabindex="0" class="desktop__project__title">Awesome Books</h>
              <ul class="desktop__client">
                <li tabindex="0" class="desktop__project__name">Microverse</li>
                <li class="desktop__counter">
                  <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="desktop__project__role">
                  Front End Dev
                </li>
                <li class="desktop__counter">
                  <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="desktop__year">2023</li>
              </ul>
              <p tabindex="0" class="desktop__project__description">
              This Awesome books project is based on an online website that allows users to add/remove books.
              </p>
              <ul class="desktop__tags">
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">html</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">css</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">javaScript</a>
                </li>
              </ul>
              <button type="button" class="btn4" data-modal-target="#1" id="1">
                <a href="#" class="see__project1 h__effect">See Project</a>
              </button>
            </div>
          </div>
        </div>

        <div class="desktop__works2">
          <div class="desktop__cards">
            <img
              tabindex="0"
              class="img2"
              src="./images/To-Do-List.png"
              alt="Project image"
            />
            <div class="desktop__clients__info2">
              <h tabindex="0" class="desktop__project__title"
                >To-Do List</h
              >
              <ul class="desktop__client">
                <li tabindex="0" class="desktop__project__name">Microverse</li>
                <li class="desktop__counter">
                  <img src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="desktop__project__role">
                  Front End Dev
                </li>
                <li class="desktop__counter">
                  <img src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="desktop__year">2023</li>
              </ul>
              <p tabindex="0" class="desktop__project__description">
              This project is an online To Do list that display users activities planned to do, also allow user to add task planned to accomplish and delete those already done.
              </p>
              <ul class="desktop__tags">
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">html</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">Ruby on rails</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">css</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">javaScript</a>
                </li>
              </ul>
              <button type="button" class="btn4" data-modal-target="#2" id="2">
                <a href="#" class="see__project1">See Project</a>
              </button>
            </div>
          </div>
        </div>

        <div class="desktop__works">
          <div class="desktop__cards">
            <img
              tabindex="0"
              src="./images/UN Climate Change.png"
              alt="Project image"
            />
            <div class="desktop__clients__info">
              <h tabindex="0" class="desktop__project__title">United Nations Climate Change</h>
              <ul class="desktop__client">
                <li tabindex="0" class="desktop__project__name">United Nations</li>
                <li class="desktop__counter">
                  <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="desktop__project__role">
                  Front End Dev
                </li>
                <li class="desktop__counter">
                  <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="desktop__year">2015</li>
              </ul>
              <p tabindex="0" class="desktop__project__description">
              This project is about the United Nations Climate Change conference held in November 2022.
              </p>
              <ul class="desktop__tags">
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">html</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">Ruby on rails</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">css</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">javaScript</a>
                </li>
              </ul>
              <button type="button" class="btn4" data-modal-target="#3" id="3">
                <a href="#" class="see__project1">See Project</a>
              </button>
            </div>
            <img
              tabindex="0"
              class="hand__cursor"
              src="./images/hand-cursor 1.png"
              alt="hand cursor image"
            />
          </div>
        </div>

        <div class="desktop__works2">
          <div class="desktop__cards">
            <img
              tabindex="0"
              class="img2"
              src="./images/Snapshoot Portfolio4.svg"
              alt="Project image"
            />
            <div class="desktop__clients__info2">
              <h tabindex="0" class="desktop__project__title"
                >Uber Navigation</h
              >
              <ul class="desktop__client">
                <li tabindex="0" class="desktop__project__name">Uber</li>
                <li class="desktop__counter">
                  <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="desktop__project__role">
                  Lead Developer
                </li>
                <li class="desktop__counter">
                  <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="desktop__year">2015</li>
              </ul>
              <p tabindex="0" class="desktop__project__description">
                A smart assistant to make driving more safe, efficient, and fun
                by unlocking your most expensive computer: your car.
              </p>
              <ul class="desktop__tags">
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">html</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">Ruby on rails</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">css</a>
                </li>
                <li class="desktop__tag__language">
                  <a href="#" class="desktop__language">javaScript</a>
                </li>
              </ul>
              <button type="button" class="btn4" data-modal-target="#4" id="4">
                <a href="#" class="see__project1">See Project</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="works">
        <div class="works__cards" id="portfolio">
          <img tabindex="0" src="./images/to-do-list2.png" />
          <h tabindex="0" class="project__title">To-Do List</h>
          <ul class="client">
            <li tabindex="0" class="project__name">Microverse</li>
            <li class="counter">
              <img tabindex="0" src="./images/Counter.svg" alt="period" />
            </li>
            <li tabindex="0" class="project__role">Front End Dev</li>
            <li class="counter">
              <img tabindex="0" src="./images/Counter.svg" alt="period" />
            </li>
            <li tabindex="0" class="year">2023</li>
          </ul>
          <p tabindex="0" class="project__description">
          This project is an online To Do list that display users activities planned to do, also allow user to add task planned to accomplish and delete those already done.
          </p>
          <ul class="tags">
            <li class="html">
              <a href="#" class="language">html</a>
            </li>
            <li class="css">
              <a href="#" class="language">css</a>
            </li>
            <li class="javascript">
              <a href="#" class="language">JavaScript</a>
            </li>
          </ul>
          <button type="button" class="btn" data-model-target="#modal" id="open">
            <a href="#" class="see__project1">See Project</a>
          </button>
        </div>

        <div class="works__cards">
          <img tabindex="0" src="./images/awesome books 3.png" alt="Project image" />
          <h tabindex="0" class="project__title">Awesome Books</h>
          <ul class="client">
            <li tabindex="0" class="project__name">Microverse</li>
            <li class="counter">
              <img tabindex="0" src="./images/Counter.svg" alt="period" />
            </li>
            <li tabindex="0" class="project__role">Front End Dev</li>
            <li class="counter">
              <img tabindex="0" src="./images/Counter.svg" alt="period" />
            </li>
            <li tabindex="0" class="year">2023</li>
          </ul>
          <p tabindex="0" class="project__description">
          This Awesome books project is based on an online website that allows users to add/remove books and their authors from a list of books or to form a library of books which are stored in a local storage.
          </p>
          <ul class="tags">
            <li class="html">
              <a href="#" class="language">html</a>
            </li>
            <li class="css">
              <a href="#" class="language">css</a>
            </li>
            <li class="javascript">
              <a href="#" class="language">JavaScript</a>
            </li>
          </ul>
          <button type="button" class="btn" data-model-target="#modal" id="open">
            <a href="#" class="see__project1">See Project</a>
          </button>
        </div>

        <div class="works__cards">
          <img tabindex="0" src="./images/UN2.png" alt="Project image" />
          <h tabindex="0" class="project__title">United Nations Climate Change</h>
          <ul class="client">
            <li tabindex="0" class="project__name">UN</li>
            <li class="counter">
              <img tabindex="0" src="./images/Counter.svg" alt="Period" />
            </li>
            <li tabindex="0" class="project__role">Front End Dev</li>
            <li class="counter">
              <img tabindex="0" src="./images/Counter.svg" alt="Period" />
            </li>
            <li tabindex="0" class="year">2022</li>
          </ul>
          <p tabindex="0" class="project__description">
          This project is about the United Nations Climate Change conference held in November 2022.
          </p>
          <ul class="tags">
            <li class="html">
              <a href="#" class="language">html</a>
            </li>
            <li class="css">
              <a href="#" class="language">css</a>
            </li>
            <li class="javascript">
              <a href="#" class="language">JavaScript</a>
            </li>
          </ul>
          <button type="button" class="btn" data-model-target="#modal" id="open">
            <a href="#" data-model-target="#modal" class="see__project1">See Project</a>
          </button>
        </div>
      </section>
  `;
  cards.innerHTML += code;
}

createCards();

//  ----------------------Ends here --------------------------------------------^

// eslint-disable-next-line max-len
//  Dynamic designs for the both-popup and the opening function -------------------------------------------->

document.querySelectorAll('.see__project1').forEach((el, index) => {
  el.addEventListener('click', () => {
    modal.style.display = 'block';
    allElement.classList.add('mobile-popup');
    modal.innerHTML = `
    <div id="modal">
    <div class="modal__header">
    <h class="modal__title" id="modal__title">${projects[index].desTitle}</h>
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
  <img class="modal__image" src="${projects[index].featureImageMob}">
  <div class="technologies">
    <ul class="first__tech">
        <li class="dt__modal__html">
            <a class="dt__modal__tech" href="#">${projects[index].desTechnologies[0]}</a>
        </li>
        <li class="dt__modal__css">
            <a class="dt__modal__tech" href="#">${projects[index].desTechnologies[1]}</a>
        </li>
        <li class="dt__modal__javascript">
            <a class="dt__modal__tech" href="#">${projects[index].desTechnologies[2]}</a>
        </li>
    </ul>
    <ul class="sec__tech">
        <li class="dt__modal__github">
            <a class="dt__modal__tech" href="#">${projects[index].desTechnologies[3]}</a>
        </li>
        <li class="dt__modal__ruby">
            <a class="dt__modal__tech" href="#">${projects[index].desTechnologies[4]}</a>
        </li>
        <li class="dt__modal__bootstraps">
            <a class="dt__modal__tech" href="#">${projects[index].desTechnologies[5]}</a>
        </li>
    </ul>
    <hr class="hr-bar">
  </div>
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
    <div class="dt-btn-container">
            <button class="dt-see-live-container-btn">
              <a id="dt-see__live" href="${projects[index].live}" class="dt-see-live-btn"
                >See live &nbsp
                <img src="./images/Icon.svg" alt="see-live-icon" />
              </a>
            </button>
            <button class="dt-see-source-container-btn">
              <a id="dt-see__source" href="${projects[index].source}" class="dt-see-source-btn"
                >See Source &nbsp
                <img src="./images/github.svg" alt="see-source-icon" />
              </a>
            </button>
        </div>
    `;
  });
});

//  ----------------------Ends here --------------------------------------------^
