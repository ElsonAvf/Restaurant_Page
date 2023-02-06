import pizzaSliceImage from './../assets/images/pizza-slice-icon.png';

const homeDiv = document.createElement('div');
const pizzaSliceIcon = document.createElement('img');
const introductionMessage = document.createElement('p');
const welcomeMessage = document.createElement('p');
const restaurantName = document.createElement('p');

pizzaSliceIcon.src = pizzaSliceImage;
introductionMessage.textContent = 'We have the best pizza in the country.\nAll you need is our pizza!'
welcomeMessage.textContent = 'You have tried the rest, now taste the BEST!\nWelcome to'
restaurantName.textContent = 'La Pizza';

homeDiv.append(
  pizzaSliceIcon,
  introductionMessage,
  welcomeMessage,
  restaurantName,
  )
  
  export {homeDiv};



