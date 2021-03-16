import images from './gallery-items.js'

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

const galleryUlRef = document.querySelector('.js-gallery');


const imageCardMarkup = images.map(({ preview, original, description }) => {
    
    return `<li class="gallery__item">
<a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
       
});

galleryUlRef.insertAdjacentHTML('afterbegin', imageCardMarkup.join(''))


