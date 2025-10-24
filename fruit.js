let mobileMenu = document.getElementById('mobileMenu');
let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('hidden');
});