const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    const hiddenMenu = document.querySelector('.mobile-menu');
    hiddenMenu.classList.toggle('active');
    menuButton.classList.toggle('active');
})

const img = document.querySelectorAll('.image');
const closeImg = document.getElementById('close-image');

img.forEach(function(image) {
    image.addEventListener('click', () => {
        document.querySelector('.imagePopUpActive').style.display = "flex";
  })
});

closeImg.addEventListener('click', () => {
    document.querySelector('.imagePopUpActive').style.display = "none";
});


