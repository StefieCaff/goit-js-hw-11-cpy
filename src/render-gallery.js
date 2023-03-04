let renderGallery = '';
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
        `<ul class=" list gallery-list">
           <li class="gallery-item">
            <div class="gallery-card">
              <a class="gallery__item" href="${largeImageURL}">
                <img class="gallery__image" src="${webformatURL}" alt="${tags}" width="300" height="200" loading="lazy" />
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
            </div>
          </li>
        </ul>
        `
      );
    })
    .join("");
  gallery.innerHTML = markup;
};