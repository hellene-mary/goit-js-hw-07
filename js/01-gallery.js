import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGalleryItem(galleryItem) {
    const { preview, original, description } = galleryItem;
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`;
}

const createGalleryItems = galleryItems.map(createGalleryItem).join('');

galleryEl.insertAdjacentHTML('beforeend', createGalleryItems);

function onGalleryImageClick(event) {
    event.preventDefault();

    const sourseImage = event.target.dataset.source;
    const instance = basicLightbox
        .create(`<img src='${sourseImage}' width="800" height="600">`);
    
    instance.show();

    window.addEventListener('keydown', onEscPress);

    function onEscPress(event) {
        if (event.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPress);
        }
    }
}

galleryEl.addEventListener('click', onGalleryImageClick);



