let renderGallery = '';
import SimpleLightbox from "simplelightbox";

//--------------simple lightbox image library----------------

function simpleLightbox() {
    const galleryHandler =  new SimpleLightbox('.gallery-card a', { captionsData: 'alt', captionDelay: 250 });
  galleryHandler.on('show.simplelightbox');
  galleryHandler.refresh();
  console.log(test);
};


export default renderGallery = images => {

  const gallery = document.querySelector('.gallery');
  
  const markup = images
    .map((image) => {
  
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
      } = image;

      return (gallery.innerHTML =
        `<div class="gallery-card">
          <a class="link" href="${largeImageURL}">
            <img class="gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b> ${likes}
            </p>
            <p class="info-item">
              <b>Views</b> ${views}
            </p>
            <p class="info-item">
              <b>Comments</b> ${comments}
            </p>
            <p class="info-item last">
              <b>Downloads</b> ${downloads}
            </p>
          </div>
        </div>`
      );
    })
    .join("");
  gallery.innerHTML = markup;
  simpleLightbox();
};

