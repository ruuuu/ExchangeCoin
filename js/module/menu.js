const headerNavBtn = document.querySelector('.header__nav-btn'); // кнопка бургер
const headerNavigation = document.querySelector('.header__navigation');// меню <nav>


headerNavBtn.addEventListener('click', () => { // клик по нажатию на кнопку  бургера(для мобилок)
    headerNavigation.classList.toggle('header__navigation--open');
});