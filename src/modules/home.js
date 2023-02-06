import pizzaSliceImage from './../assets/images/pizza-slice-icon.png';
import './../assets/css/home.css';

const homeDiv = document.createElement('div');
const pizzaSliceIcon = document.createElement('img');
const introductionMessage1 = document.createElement('p');
const introductionMessage2 = document.createElement('p');
const introductionMessage3 = document.createElement('p');
const welcomeMessage = document.createElement('p');
const restaurantName = document.createElement('p');

//Add Values
homeDiv.classList.add('homeDiv');

pizzaSliceIcon.src = pizzaSliceImage;

// Add Text
introductionMessage1.textContent = 'You have tried the rest, now taste the BEST!';
introductionMessage2.textContent = 'All you need is our pizza!';
introductionMessage3.textContent = 'We have the best pizza in the country.';


welcomeMessage.textContent = 'Welcome to';

restaurantName.textContent = 'La Pizza';

homeDiv.append(
  pizzaSliceIcon,
  introductionMessage1,
  introductionMessage2,
  introductionMessage3,
  welcomeMessage,
  restaurantName,
);
  
export {homeDiv};



