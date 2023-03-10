const body = document.querySelector('body');
const btn = document.querySelector('.see__project1');
btn.addEventListener('click', () => {
  const section = document.createElement('div');
  const popup = document.createElement('div');
  section.className = 'mobile-popup';
  popup.className = 'modal';
  popup.innerHTML = `
        <div class="project__title__container">
            <h tabindex="0" class="project__title">Tonic</h>
            <button data-close-button class="close-btn">&times;</button>
        </div>
        <ul class="client">
                <li tabindex="0" class="project__name">Canopy</li>
                <li class="counter">
                    <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="project__role">Back End Dev</li>
                <li class="counter">
                    <img tabindex="0" src="./images/Counter.svg" alt="period" />
                </li>
                <li tabindex="0" class="year">2015</li>
        </ul>
        <div class="card__image">
                <img src="./images/card-1.svg" alt="" />
        </div>
        <p class="project__description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essent
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
        <hr id="line-pop" />
        <div class="btn-container">
            <button class="see-live-container-btn">
                    <a id="btn-icon" href="#" class="see-live-btn"
                    >See live &nbsp
                        <img src="./images/Icon.svg" alt="see-live-icon" />
                    </a>
            </button>
            <button class="see-source-container-btn">
                    <a id="btn-icon" href="#" class="see-source-btn"
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
// const allElement = document.querySelector('#all-elements');
// const showBtn = document.querySelectorAll('.see__project');
// const modalPop = document.querySelector('#modal');
// showBtn.forEach((seeBtn, index) => {
//   seeBtn.addEventListener('click', () => {
//     modalPop.style.display = 'flex';
//     allElement.classList.add('mobile-popup');
//     modalPop.innerHTML = `
//     <div class="modalHeader">
//     <h2>
//         <span class="pTitle">${projects[0].projectTitle}</span>
//         <span class="dTitle">${projects[0].projectTitle}</span>
//         <button data-close-button class="close-btn">&times;</button>
//     </h2>
//     <ul class="modalTech">
//         <li>${projects[0].client[0]}</li>
//         <li> <img src="./images/Counter.svg"></li>
//         <li>${projects[0].client[1]}</li>
//         <li> <img src="./images/Counter.svg"></li>
//         <li>${projects[0].client[2]}</li>
//     </ul>
//     <div style="background-image:url(${projects[0].featureImageMob})"></div>
//     <div style="background-image:url(${projects[0].featureImageDes})"></div>
//     <p class="pDesc">${projects[0].projectDescription}</p>
//     <ul class="lang">
//         <li>${projects[0].tags[0]}</li>
//         <li>${projects[0].tags[1]}</li>
//         <li>${projects[0].tags[2]}</li>
//     </ul>

//     <div class="btn__container">
//         <button class="see-live-container-btn">
//         <a href="${projects[0].live}" class="see-live-btn"
//         >See live &nbsp
//             <img src="./images/Icon.svg" alt="see-live-icon" />
//         </a>
//     </button>

//     <button class="see-source-container-btn">
//         <a href="${projects[0].source}" class="see-source-btn"
//         >See Source &nbsp
//             <img src="./images/github.svg" alt="see-source-icon" />
//         </a>
//     </button>
//     </div>
//     </div>
// `;
// document.body.appendChild(modal);
// modal.addEventListener('click', (e) => {
//     if(e.target.id === 'close-btn'){
//         modal.style.display= 'none';
//         allElements.classList.remove('mobile-popup');
//     }
// });

// const popupWindow = document.querySelector('.modal');
// const openModalButtons = document.querySelectorAll('[data-modal-target]');
// const closeModalButtons = document.querySelectorAll('[data-close-button]');
// const modalTitle = document.querySelector('#modal__title');
// const modalText = document.querySelector('#modal__text');
// const modalImage = document.querySelector('#modal__image');
// const modalClient = document.querySelector('#modal__client');
// const modalTech = document.querySelector('#modal__tech');
// const live = document.querySelector('#see__live');
// const source = document.querySelector('#see__source');
// const overlay = document.getElementById('overlay');

// function openModal(popupWindow) {
//   // eslint-disable-next-line no-undef
//   if (modal === null) return;
//   popupWindow.classList.add('active');
//   overlay.classList.add('active');
// }

// function closeModel(popupWindow) {
//   // eslint-disable-next-line no-undef
//   if (modal === null) return;
//   popupWindow.classList.remove('active');
//   overlay.classList.remove('active');
// }

// openModalButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // eslint-disable-next-line no-unused-vars
//     const model = document.querySelector(button.dataset.modelTarget);
//     openModal(popupWindow);

//     projects.forEach((popup) => {
//       if (popup.id === button.id) {
//         modalImage.src = popup.featureImageMob;
//         modalTitle.textContent = popup.projectTitle;
//         modalClient.textContent = '';
//         popup.tagsDes.forEach((tags) => {
//           const taglist = document.createElement('li');
//           taglist.innerText = tags;
//           modalTech.appendChild(taglist);
//         });
//         modalText.innerText = popup.projectDescriptionDes;
//         live.href = popup.see__live;
//         source.href = popup.see__source;
//       }
//     });
//   });
// });

// overlay.addEventListener('click', () => {
//   const model = document.querySelectorAll('.modal.active');
//   model.forEach((popupWindow) => {
//     closeModel(popupWindow);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     // eslint-disable-next-line no-unused-vars
//     const model = button.closest('.modal');
//     closeModel(popupWindow);
//   });
// });






<div class="dtmodal">
<div class="d__modal__header">
    <div class="dt__modal__title__container">
        <h class="dt__modal__title">${projects[index].desTitle}</h>
        <button data-close-button class="dt__close-btn" id="close-btn">&times;</button>
    </div>
    <ul class="dt__modal__client">
        <li class="dt__modal__client__name">${projects[index].client[0]}</li>
        <li class="d__modal__counter">
            <img tabindex="0" src="./images/Counter.svg" alt="period" />
        </li>
        <li class="dt__modal__client__role">${projects[index].client[1]}</li>
        <li class="d__modal__counter">
            <img tabindex="0" src="./images/Counter.svg" alt="period" />
        </li>
        <li class="dt__modal__year">${projects[index].client[2]}</li>  
    </ul>
</div>

<div class="d__modal__image">
    <img class="dt__modal__img" src="${projects[index].featureImageDes}" alt="">
</div>

<div class="dt__modal__main">
    <div class="d__modal__text">
        <p class="dt__modal__text">${projects[index].descriptionMod}</p>
    </div>
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