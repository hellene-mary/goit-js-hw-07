import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryItem(galleryItem) {
    const { preview, original, description } = galleryItem;
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

const createGalleryItems = galleryItems.map(createGalleryItem).join('');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

galleryEl.addEventListener('click', lightbox);