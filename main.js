const toggle = document.querySelector('.toggle');
const hamburger = document.querySelector('.hamburger');
const showMenu = document.querySelector('.show-nav');

toggle.addEventListener('click', () => {
    showMenu.classList.toggle('open');
});