import {homeDiv} from './modules/home.js';
import {menuContainer} from './modules/menu.js';
import {contactDiv} from './modules/contact.js';

const content = document.querySelector('#content');

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

content.appendChild(homeDiv);

const removeHomeTabClass = () => {
  if (homeTab.classList.contains('homeInitialStyle')) {
    homeTab.classList.remove('homeInitialStyle');
  };
};

//Hover Events
menuTab.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const checkbox = document.elementFromPoint(touch.clientX, touch.clientY);
  if (checkbox) {
    removeHomeTabClass();
  };
});
contactTab.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  const checkbox = document.elementFromPoint(touch.clientX, touch.clientY);
  if (checkbox) {
    removeHomeTabClass();
  };
});
//Click Events
homeTab.addEventListener('click', () => {
  content.firstElementChild.remove()
  content.appendChild(homeDiv);
});
menuTab.addEventListener('click', () => {
  removeHomeTabClass();
  content.firstElementChild.remove()
  content.appendChild(menuContainer);
});
contactTab.addEventListener('click', () => {
  removeHomeTabClass();
  content.firstElementChild.remove();
  content.appendChild(contactDiv);
});
