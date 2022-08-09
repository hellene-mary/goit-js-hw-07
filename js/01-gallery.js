import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

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

const createGalleryItems = galleryItems.map(createGalleryItem).join("");

galleryEl.insertAdjacentHTML("beforeend", createGalleryItems);

function callModalWithLargeImage(event) {
    event.preventDefault();
    const sourseImage = event.target.dataset.source;
    console.log('~ sourseImage', sourseImage)
    return basicLightbox.create(`
<img src='${sourseImage}' width="800" height="600">
`).show()
}

galleryEl.addEventListener("click", callModalWithLargeImage);

