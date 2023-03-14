import getImages from "./get-images";
import renderGallery from "./render-gallery";



const limit = 40;
//let totalPages = Math.floor(500 / limit);
const loadBtn = document.querySelector('.load-more');

const hideBtn = () => loadBtn.classList.sdd('hidden');
const showBtn = () => loadBtn.classList.remove('hidden');

export { showImages, hideBtn, showBtn };

const showImages = async () => {
   const response = await getImages();
 
   const gallery = await renderGallery(response)
   page =+1
    return gallery;
}