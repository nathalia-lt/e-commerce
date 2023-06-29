// Hamburger menu

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburgerBtn');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon')

hamburger.addEventListener('click', () =>{
    if (menu.classList.contains('showMenu')){
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
        hamburger.style.left= '1rem';
    }else{
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
        hamburger.style.left= '32%';
    }
})