const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block'; // Показываем меню при клике
    } else {
        menu.style.display = 'none'; // Скрываем меню при повторном клике
    }
});