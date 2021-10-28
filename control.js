const btnClose = document.getElementById('close-carta');

const contentCarta = document.querySelectorAll('.content')[0];
const contentGallery = document.querySelectorAll('.gallery')[0];

const btnOpenGallery = document.getElementById('open-gallery')
const btnCloseGallery = document.getElementById('close-gallery');

function mudaStyle() {
  btnClose.style.marginTop = '16px';
}

function resetaStyle() {
  btnClose.style.marginTop = 'inherent';
}

function ToggleBtn() {
  if (contentCarta.style.display === 'none'){
    contentCarta.style.display = 'block';
  
    mudaStyle();

    btnClose.innerHTML = 'Fechar Carta'
    return;
  }
  contentCarta.style.display = 'none';
  btnClose.innerHTML = 'Abrir Carta'
  resetaStyle();
}

btnClose.addEventListener('click', (e) => {
  ToggleBtn();
})

btnOpenGallery.addEventListener('click', () => {
  contentGallery.style.display = 'flex'
})

btnCloseGallery.addEventListener('click', () => {
  contentGallery.style.display = 'none'
})