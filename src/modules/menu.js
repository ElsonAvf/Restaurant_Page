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
    '$10.00'),
  new Pizza(
    quattroFormaggiPng,
    'Ai Quattro Formaggi',
    'Tomato sauce, mozzarella di bufula, gorgonzola, fontina cheese, grana padano',
    '$11.99'),
  new Pizza(
    marinaraPng,
    'Marinara',
    'Tomato sauce, olive oil, garlic, oregano',
    '$8.99'),
  new Pizza(
    catupiryPng,
    'Chicken with Catupiry Cheese',
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

const createPizzaElement = (pizza) => {
  //Main Container
  const pizzaContainer = document.createElement('div');
  const pizzaImg = document.createElement('img');
  const pizzaName = document.createElement('h1');
  
  pizzaImg.src = pizza.srcImage;
  
  pizzaName.textContent = pizza.name;
  
  pizzaContainer.append(pizzaImg, pizzaName);
  
  function createPopup (e) {
    const container = document.createElement('div');
    container.id = 'fixedPopupContainer';
    
    const removeButton = document.createElement('button');
    
    const popupDiv = document.createElement('div');
    const pizzaImg = document.createElement('img');
    const pizzaName = document.createElement('h1');
    const pizzaIngredients = document.createElement('p');
    const pizzaPrice = document.createElement('div');
    
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
    
    container.addEventListener('click', remove);
    
    document.body.appendChild(container);
  };
  
  function remove (e) {
    if (e.target !== e.currentTarget) {
      e.currentTarget.remove();
    };
  };
  
  pizzaContainer.addEventListener('click', createPopup);
  
  return pizzaContainer;
};

menu = menu.map(createPizzaElement)

const menuContainer = document.createElement('div');
menuContainer.id = 'menuContainer';

menu.forEach(pizza => menuContainer.appendChild(pizza));

export {menuContainer};
