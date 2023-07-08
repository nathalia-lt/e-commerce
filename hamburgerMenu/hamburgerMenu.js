// Hamburger menu

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburgerBtn');
const menuIcon = document.querySelector('.menuIcon');
const closeIcon = document.querySelector('.closeIcon')

//eu que crio essa const para usar no meu renderMenuItem.
//url: manter com o mesmo nome da pasta
const menuItemsData = [
    {url: '/women/', text: 'Women'},
    {url: '/men/', text: 'Men'},
    {url: '/accessories/', text: 'Acessories'},
    {url: '/about/', text: 'About Us'},
];

function renderMenuItems(){
    menuItemsData.forEach(item => {
        menu.innerHTML += menuItemTemplate(item)
    })
}

function menuItemTemplate(item){
    return `
    <li><a class="menuItem" href="${item.url}">
            <span>${item.text}</span>
            <svg class="chevron" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </a></li>
    `
}



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

renderMenuItems();