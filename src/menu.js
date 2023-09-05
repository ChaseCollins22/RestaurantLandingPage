import pizzaOne from './assets/pizza-pic1.jpeg';

const mainContainer = document.getElementById('main-container');

function createMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menu-container';

  const pizzaHome = new Image();
  pizzaHome.src = pizzaOne;

  menuContainer.appendChild(pizzaHome);
  mainContainer.appendChild(menuContainer);
}

export { createMenu };