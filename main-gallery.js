import images from './gallery-items.js'

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

// Получение DOM ссылки на <ul> галереи
const galleryUlRef = document.querySelector('.js-gallery');
const modalWindowRef = document.querySelector('div.js-lightbox');

// создание разметки карточки изображения
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

// генерация разметки всей галереии 
galleryUlRef.insertAdjacentHTML('afterbegin', imageCardMarkup.join(''))

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна
const openModalWindow = (e) => {
    e.preventDefault();

    if (!e.target.classList.contains("gallery__image")) {
        return;
    } 
      
    openModalWIndow();
    
}

const openModalWIndow = () => {
    modalWindowRef.classList.add('is-open');
}

galleryUlRef.addEventListener('click', openModalWindow);


/*

*/