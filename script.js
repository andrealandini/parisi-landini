const burger = document.querySelector('.burger-box');
const menu = document.querySelector('.fullscreen-menu');

burger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

menu.addEventListener('click', () => {
    menu.style.display = 'none';
});

