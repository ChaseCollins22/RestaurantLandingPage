import pizzaOne from './assets/pizza-pic1.jpeg';
import './styles/homeStyles.css';
const mainContainer = document.getElementById('main-container');

function home() {
  const homeContainer = document.createElement('div');
  const mainTextContainer = document.createElement('div');
  const mainTextLineOne = document.createElement('h2');
  const mainTextLineTwo = document.createElement('h1');
  const mainTextLineThree = document.createElement('h2');
   
  homeContainer.id = 'home-container';
  document.body.style.backgroundImage = `url(${pizzaOne})`;
  document.body.style.backgroundSize = 'cover';
  
  mainTextLineOne.textContent = 'ENJOY THE BEST';
  mainTextLineTwo.textContent = 'NEW YORK STYLE PIZZA';
  mainTextLineThree.textContent = 'IN TOWN!';

  mainTextContainer.appendChild(mainTextLineOne);
  mainTextContainer.appendChild(mainTextLineTwo);
  mainTextContainer.appendChild(mainTextLineThree);
  mainTextContainer.id = 'main-text-container';

  homeContainer.appendChild(mainTextContainer);
  mainContainer.appendChild(homeContainer);
}

export { home };