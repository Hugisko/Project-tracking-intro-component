const nav_btn = document.querySelector('.nav-btn');
const hamburger = document.querySelector('.hamburger');
const close_btn = document.querySelector('.close');
const nav = document.querySelector('nav');

nav_btn.addEventListener('click', () => {
    hamburger.classList.toggle('hidden');
    close_btn.classList.toggle('hidden');
    nav.classList.toggle('hidden');
});

window.addEventListener('load', () => {
    if(window.innerWidth >= 720) {
        nav.classList.remove('hidden');
    }
});

window.addEventListener('resize', () => {
    if(window.innerWidth >= 720) {
        nav.classList.remove('hidden');
    } else {
        if(close_btn.classList.contains('hidden')){
            nav.classList.add('hidden');
        }
    }
});
