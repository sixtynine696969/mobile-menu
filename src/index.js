import './style.css';

const menu = document.querySelector('.menu');
const display = document.querySelector('.display')
const burgerMenuButton = document.querySelector('input.burger-menu');
const mainContent = document.body.querySelector('.content');
const menuButtons = document.querySelectorAll('.menu button');

function hideMenu() {
    menu.style.display = 'none';
    display.style.gridTemplateColumns = '';
}

function showMenu() {
    menu.style.display = 'flex';
    display.style.gridTemplateColumns = 'calc(var(--phone-width) / 2.5) calc(var(--phone-width) - 10px)';
}

burgerMenuButton.addEventListener('click', (e) => {
    const menuStyles = getComputedStyle(menu);
    if (menuStyles.display === 'none') {
        showMenu();
    } else {
        hideMenu();
    }
})

mainContent.addEventListener('click', (e) => {
    if (e.target.classList.contains('burger-menu')) return;
    hideMenu();
})


menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        hideMenu();
    })
})
