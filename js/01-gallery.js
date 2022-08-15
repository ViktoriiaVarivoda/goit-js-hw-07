import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createColorCardsGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createColorCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`;
        })
        .join('');
}


galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    const isGalleryEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryEl) {
        return;
    }
    console.log(evt.target.dataset.source);   
    }