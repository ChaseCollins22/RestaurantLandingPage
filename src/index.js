import _ from 'lodash';
import './styles/mainStyles.css';
import { home } from './home.js';
import { createMenu } from './menu.js';

function clearMainContainer() {
  while(mainContainer.lastChild.id !== 'navbar') {
    mainContainer.removeChild(mainContainer.lastChild);
  }
}

const mainContainer = document.getElementById('main-container');
const navBar = document.createElement('nav');
const tabList = document.createElement('ul');

const homeTab = document.createElement('li');
const menuTab = document.createElement('li');
const contactTab = document.createElement('li');

navBar.id = 'navbar';
homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
contactTab.textContent = 'Contact';

homeTab.addEventListener('click', function() {
  clearMainContainer();
  home();
});

menuTab.addEventListener('click', function() {
  clearMainContainer();
  createMenu(); 
});

tabList.appendChild(homeTab);
tabList.appendChild(menuTab);
tabList.appendChild(contactTab);

navBar.appendChild(tabList);
mainContainer.appendChild(navBar);

homeTab.click();



