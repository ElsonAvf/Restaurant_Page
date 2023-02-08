import margherittaPng from './../assets/images/margherita.png';
import pepperoniPng from './../assets/images/pepperoni.png';
import quattroFormaggiPng from './../assets/images/quatro-formaggi.png';
import marinaraPng from './../assets/images/marinara.png';
import catupiryPng from './../assets/images/catupiry.png';
import fruttiDiMarePng from './../assets/images/frutti-di-mare.png';
import portuguesePng from './../assets/images/portuguese.png';
import hawaiianPng from './../assets/images/hawaiian.png';

import './../assets/css/menu.css';

class Pizza {
  constructor(srcImage, name, ingredients, price) {
    this.srcImage = srcImage;
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
  };
};

const pizzaFactory = (pizza) => {
  const createPopup = () => {
    //Create Elements
    const fixedContainer = document.createElement('div');
    //FixedContainer Child
    const container = document.createElement('div');
    //Container children
    const removeButton = document.createElement('button');
    const popupDiv = document.createElement('div');
    //PopDiv children
    const pizzaImg = document.createElement('img');
    const pizzaName = document.createElement('h1');
    const pizzaIngredients = document.createElement('p');
    const pizzaPrice = document.createElement('div');
    //Add Values
    fixedContainer.id = 'fixedContainer';
    container.id = 'popupContainer';
    removeButton.id = 'removeButton';
    popupDiv.id = 'popDiv';
    pizzaPrice.id = 'pizzaPrice';
    
    removeButton.textContent = 'X';
      
    pizzaImg.src = pizza.srcImage;
    pizzaName.textContent = pizza.name;
    pizzaIngredients.textContent = pizza.ingredients;
    pizzaPrice.textContent = pizza.price;
      
    popupDiv.append(
      pizzaImg,
      pizzaName,
      pizzaIngredients,
      pizzaPrice
    );
      
    container.append(removeButton, popupDiv);
    
    //Remov fixedContainer if the popDiv and its children are not clicked
    fixedContainer.addEventListener('click', (e) => {
      if (e.target !== popupDiv && Array.from(popupDiv.children).every(elem => e.target !== elem)) {
        fixedContainer.remove();
      };
    });
    
    fixedContainer.appendChild(container)
    
      
    document.body.appendChild(fixedContainer);
  };
  
  const createPizzaElement = () => {
    //Main Container
    const pizzaContainer = document.createElement('div');
    //Pizza Container children
    const pizzaImg = document.createElement('img');
    const pizzaName = document.createElement('h1');
      
    pizzaContainer.id = 'pizzaContainer';
      
    pizzaImg.src = pizza.srcImage;
      
    pizzaName.textContent = pizza.name;
      
    pizzaContainer.append(pizzaImg, pizzaName);
      
    pizzaContainer.addEventListener('click',createPopup);
      
      
    return pizzaContainer
  };
  
  return { createPizzaElement };
};

let menu = [
  new Pizza(
    margherittaPng,
    'Margherita',
    'Tomato sauce, mozzarella di bufula, fresh basil',
    '$9.99'),
  new Pizza(
    pepperoniPng,
    'Pepperoni',
    'Tomato sauce, mozzarella, pepperoni sausage',
    '$10.99'),
  new Pizza(
    quattroFormaggiPng,
    'Quattro Formaggi',
    'Tomato sauce, mozzarella di bufula, gorgonzola, fontina cheese, grana padano',
    '$11.99'),
  new Pizza(
    marinaraPng,
    'Marinara',
    'Tomato sauce, olive oil, garlic, oregano',
    '$8.99'),
  new Pizza(
    catupiryPng,
    'Chicken',
    'Tomato sauce, chicken, catupiry cheese',
    '$10.99'),
  new Pizza(
    fruttiDiMarePng,
    'Frutti di Mare',
    'Tomato sauce, mozzarella, shrimps, squid, mussels',
    '$12.99'),
  new Pizza(
    portuguesePng,
    'Portuguese',
    'Tomato sauce, ham, boiled eggs, onion, olive',
    '$8.99'),
  new Pizza(
    hawaiianPng,
    'Hawaiian',
    'Tomato sauce, pineapple, prosciutto cotto',
    '$9.99'),
  ];

//Create an array of pizza elements
menu = menu.map((pizza) => {
  return pizzaFactory(pizza).createPizzaElement();
});
//Append the pizza elements to menuContainer
const menuContainer = document.createElement('div');
menuContainer.id = 'menuContainer';
menu.forEach(pizza => menuContainer.appendChild(pizza));

export {menuContainer};
