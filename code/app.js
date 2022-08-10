// theme toggle
const themeToggle = document.querySelector('.sun-icon');
const themeToggle2 = document.querySelector('.moon-icon');
const bodyElement = document.body;
const lightTheme = document.querySelector('nav'); 

// menu toggle
const menuToggle = document.querySelector('#menu-toggle-icon');
const mobileMenu = document.querySelector('#menu');

menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('activated');
    mobileMenu.classList.toggle('activated');
});

// theme-toggle
themeToggle.addEventListener('click', ()=>{
    bodyElement.classList.add('light-theme');
});

themeToggle2.addEventListener('click', ()=>{
    bodyElement.classList.remove('light-theme');
});

// search-popup

const searchBtn = document.getElementById('search-btn');
const searchPop = document.getElementById('search-popup');
const closeBtnMenu = document.querySelector('.close-icon-popup');


searchBtn.addEventListener('click', () =>{
    searchPop.classList.add('activated');
});

closeBtnMenu.addEventListener('click', () =>{
    searchPop.classList.remove('activated');
})

window.addEventListener('keyup', (event) =>{
    if (event.key === "Escape") {
        searchPop.classList.remove('activated');
    }
});
