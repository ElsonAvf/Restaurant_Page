import slicingPizzaGif from './../assets/images/slicing_pizza.gif';
import moped from './../assets/icons/moped-outline.svg';
import phone from './../assets/icons/phone.svg';
import email from './../assets/icons/at.svg';
import adress from './../assets/icons/map-marker-outline.svg';

import './../assets/css/contact.css';

const contactDiv = document.createElement('div');

const slicingPizzaImg = document.createElement('img');
slicingPizzaImg.src = slicingPizzaGif;

//Icons
const deliveryIcon = document.createElement('img').classList.add('icon');
const phoneIcon = document.createElement('img').classList.add('icon');
const emailIcon = document.createElement('img').classList.add('icon');
const adressIcon = document.createElement('img').classList.add('icon');

deliveryIcon.src = moped;
phoneIcon.src = phone;
emailIcon.src = email;
adressIcon.src = adress;
//Text Spans
const freeDeliveryMessage = document.createElement('spam');
const phoneNumber = document.createElement('spam');
const emailAdress = document.createElement('spam');
const restaurantAdress = document.createElement('spam');

freeDeliveryMessage.textContent = 'FREE DELIVERY';
phoneNumber.textContent = '(000)00000-0000';
emailAdress.textContent = 'myfakeemail@fake.com';
restaurantAdress.textContent = 'Fake Street 00, Fake City, Fake Country';

//Icon && Text spam Containers
const deliveryDiv = document.createElement('div');
const phoneDiv = document.createElement('div');
const emailDiv = document.createElement('div');
const adressDiv = document.createElement('div');

deliveryDiv.append(deliveryIcon, freeDeliveryMessage);
phoneDiv.append(phoneIcon, phoneNumber);
emailDiv.append(emailIcon, emailAdress);
adressDiv.append(adressIcon, restaurantAdress);

contactDiv.append(
  slicingPizzaImg,
  deliveryDiv,
  phoneDiv,
  emailDiv,
  adressDiv
);

export {contactDiv};
