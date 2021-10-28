const btnOpenLetter = document.getElementById('open-carta');
const btnCloseLetter = document.getElementById('close-carta');


const btnOpenGallery = document.getElementById('open-gallery')
const btnCloseGallery = document.getElementById('close-gallery');

const contentLetter = document.querySelectorAll('.content')[0];
const contentGallery = document.querySelectorAll('.gallery')[0];

btnOpenLetter.addEventListener('click', () => {
  contentLetter.style.display = 'block'
})

btnCloseLetter.addEventListener('click', () => {
  contentLetter.style.display = 'none'
})

btnOpenGallery.addEventListener('click', () => {
  contentGallery.style.display = 'flex'
})

btnCloseGallery.addEventListener('click', () => {
  contentGallery.style.display = 'none'
})