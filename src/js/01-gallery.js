import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightboxRef = document.querySelector('.gallery');
const lightboxMarkup = createBoxItem(galleryItems);
lightboxRef.insertAdjacentHTML(`afterbegin`, lightboxMarkup);

function createBoxItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>`
    )
    .join('');
}

lightboxRef.addEventListener('click', onBoxRefClick);

function onBoxRefClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
