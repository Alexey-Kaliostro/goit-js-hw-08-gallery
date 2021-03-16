import images from './gallery-items.js'

//Создание и рендер разметки по массиву данных и предоставленному шаблону.

// Получение DOM ссылки на <ul> галереи
const galleryUlRef = document.querySelector('.js-gallery');
const modalWindowRef = document.querySelector('div.js-lightbox');
const modalWindowImgRef = modalWindowRef.querySelector('img.lightbox__image');
//modalWindowImgRef.src = 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg'
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
    
    modalWindowRef.classList.add('is-open');

    console.log(e.target.dataset.source)
    
    modalWindowImgRef.setAttribute('src', e.target.dataset.source);
     
}

galleryUlRef.addEventListener('click', openModalWindow);

