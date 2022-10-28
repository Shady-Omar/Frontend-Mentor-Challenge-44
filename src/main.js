let menuIcon = document.querySelector(".menu");
let closeIcon = document.querySelector(".close");
let nav = document.querySelector(".mob-nav");
let overlay = document.querySelector(".overlay");
let body = document.getElementsByTagName("BODY")[0];

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    nav.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.style.overflowY = "hidden";
});

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    nav.classList.add('hidden');
    overlay.classList.add('hidden');
    body.style.overflowY = "scroll";
});