const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    const hiddenMenu = document.querySelector('.mobile-menu');
    hiddenMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
})
