import { galleryItems } from "./gallery-items.js";
// Change code below this line
const listImg = document.querySelector(`.gallery`);
const markupCards = creatImageList();
listImg.insertAdjacentHTML(`beforeend`, markupCards);
function creatImageList() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a onclick="return false" class="gallery__link" href="${original}">
      <img class="gallery__image"
       src="${preview}"
        data-source="${original}"
         alt="${description}">
         </img></a>`;
    })
    .join(``);
}



listImg.addEventListener(`click`, creatElm)


function creatElm(event) {
   if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalImage = event.target.closest(`.gallery__link`).href;
  const originalDescription = event.target.alt;
  const instance = basicLightbox
    .create(`<img src="${originalImage}" alt="${originalDescription}"></img>`)
    instance.show()
  }


