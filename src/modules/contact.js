import slicingPizzaGif from './../assets/images/slicing_pizza.gif';
import moped from './../assets/icons/moped-outline.svg';
import phone from './../assets/icons/phone.svg';
import email from './../assets/icons/at.svg';
import adress from './../assets/icons/map-marker-outline.svg';

import './../assets/css/contact.css';

const contactDiv = document.createElement('div');
contactDiv.id = 'contactDiv';

const slicingPizzaImg = document.createElement('img');
slicingPizzaImg.src = slicingPizzaGif;

//Icons
const deliveryIcon = document.createElement('img');
const phoneIcon = document.createElement('img');
const emailIcon = document.createElement('img');
const adressIcon = document.createElement('img');

deliveryIcon.classList.add('icon');
phoneIcon.classList.add('icon');
emailIcon.classList.add('icon');
adressIcon.classList.add('icon');

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

deliveryDiv.classList.add('infoContainer');
deliveryDiv.id = 'deliveryDiv';
phoneDiv.classList.add('infoContainer');
emailDiv.classList.add('infoContainer');
adressDiv.classList.add('infoContainer');
//Contact container
const contactContainer = document.createElement('div');
contactContainer.id = 'contactContainer';
//Append
deliveryDiv.append(deliveryIcon, freeDeliveryMessage);
phoneDiv.append(phoneIcon, phoneNumber);
emailDiv.append(emailIcon, emailAdress);
adressDiv.append(adressIcon, restaurantAdress);

contactContainer.append(
  phoneDiv,
  emailDiv,
  adressDiv
);

contactDiv.append(
  slicingPizzaImg,
  deliveryDiv,
  contactContainer
);

export {contactDiv};
