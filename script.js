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