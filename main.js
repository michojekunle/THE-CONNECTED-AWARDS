const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    const hiddenMenu = document.querySelector('.mobile-menu');
    hiddenMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
})

const img = document.querySelectorAll('.imagePopUp');
const closeImg = document.getElementById('close-image');

img.addEventListener('click', () => {
    document.querySelector('.imagePopUpActive').style
})
