import {homeDiv} from './modules/home.js';
import {menuContainer} from './modules/menu.js';
import {contactDiv} from './modules/contact.js';

const content = document.querySelector('#content');

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

content.appendChild(homeDiv);

homeTab.addEventListener('click', () => {
  content.firstElementChild.remove()
  content.appendChild(homeDiv);
});
menuTab.addEventListener('click', () => {
  content.firstElementChild.remove()
  content.appendChild(menuContainer);
});
contactTab.addEventListener('click', () => {
  content.firstElementChild.remove();
  content.appendChild(contactDiv);
});
