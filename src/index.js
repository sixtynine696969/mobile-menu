import './style.css';
import burgerMenuImage1 from './images/burger-bar.png';
import burgerMenuImage2 from './images/menu-bar.png';

const menu = document.querySelector('.menu');
const display = document.querySelector('.display');
const burgerMenuButton = document.querySelector('input.burger-menu');
const mainContent = document.body.querySelector('.content');
const menuButtons = document.querySelectorAll('.menu button');

function hideMenu() {
  menu.style.display = 'none';
  display.style.gridTemplateColumns = '';

  burgerMenuButton.src = burgerMenuImage1;
}

function showMenu() {
  menu.style.display = 'flex';
  display.style.gridTemplateColumns = 'calc(var(--phone-width) / 2.5) calc(var(--phone-width) - 10px)';

  burgerMenuButton.src = burgerMenuImage2;
}

burgerMenuButton.addEventListener('click', () => {
  const menuStyles = getComputedStyle(menu);
  if (menuStyles.display === 'none') {
    showMenu();
  } else {
    hideMenu();
  }
});

mainContent.addEventListener('click', (e) => {
  if (e.target.classList.contains('burger-menu')) return;
  hideMenu();
});

menuButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    hideMenu();
  });
});

(function init() {
  hideMenu(); // initially load image for burger menu button
}());
