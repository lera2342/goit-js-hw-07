import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const listGallery = galleryItems.map(({preview, original, description}) => `
    <li class="gallery__item">
        <a href="${original}" class="gallery__link">
            <img src="${preview}" data-source="${original} alt="${description}" class="gallery__image">
        </a></li>`).join(" ");

gallery.insertAdjacentHTML('afterbegin', listGallery);

gallery.onclick = (event) => {
    if (event.target.tagName !== 'IMG') {
        return;
    
    }
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${event.target.dataset.source}"> 
    `, {
        onShow: () => {
            document.addEventListener('keydown', closeModal);
        },
        onClose: () => {
            document.removeEventListener('keydown', closeModal);
        },
    });
    instance.show();
    function closeModal(event) {
        if (event.code !== 'Escape') {
            return;
        }
        instance.close();
    }
}