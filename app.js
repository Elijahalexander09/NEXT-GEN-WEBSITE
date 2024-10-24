const menu = document.querySelector|('#mobile-menu')
const menuLinks = decument.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});