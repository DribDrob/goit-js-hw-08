// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryListEl = document.querySelector(".gallery");

galleryListEl.insertAdjacentHTML("beforeend", `${createGalleryMarkup (galleryItems)}`);

function createGalleryMarkup (galleryItems) {
    return galleryItems.map(image => `
<div><a class="gallery__item" href="${image.original}">
<img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a></div>`).join("");}

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', fadeSpeed: 250,});
