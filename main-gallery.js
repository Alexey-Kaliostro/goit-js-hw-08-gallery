import images from './gallery-items.js'

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

// Получение DOM ссылок на ключевые элементы
const galleryUlRef = document.querySelector('.js-gallery');
const modalWindowRef = document.querySelector('div.js-lightbox');
const modalWindowImgRef = modalWindowRef.querySelector('img.lightbox__image');
const closeModalWindowButtonRef = modalWindowRef.querySelector('button.lightbox__button');
const overlayModalWindowRef = modalWindowRef.querySelector('div.lightbox__overlay');

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

const openModalWindow = (e) => {
    e.preventDefault();

    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    
 // Открытие модального окна по клику на элементе галереи.   
    modalWindowRef.classList.add('is-open');

 // Подмена значения атрибута src и alt элемента img.lightbox__image.       
    modalWindowImgRef.setAttribute('src', e.target.dataset.source);
    modalWindowImgRef.setAttribute('alt', e.target.alt);
    
}

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"] и при клике на overlay.
const closeModalWindow = () => {
    modalWindowRef.classList.remove('is-open');

//Очистка значения атрибута src и alt элемента img.lightbox__image.
    modalWindowImgRef.setAttribute('src', '');
    modalWindowImgRef.setAttribute('alt', '');
}


// слушатели событий. 
//Открытие модального окна по клику на изображение 
galleryUlRef.addEventListener('click', openModalWindow);
//Закрытие модального окна по клику на кнопку закрытия
closeModalWindowButtonRef.addEventListener('click', closeModalWindow);
// Закрытие модального окна поклику на overlay
overlayModalWindowRef.addEventListener('click', closeModalWindow);
