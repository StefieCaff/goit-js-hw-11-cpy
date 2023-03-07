import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getImages from './get-images'; 
import renderGallery from './render-gallery';
import axios from 'axios';
const loadBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

const loadMore = () => {
  
  let pageNum = 1;
  let limit = 5;
  let totalHits = 500;
  let totalPages = (totalHits / limit);
    

    if (pageNum > totalPages) {
        hideBtn();
       return  Notify.info("We're sorry, but you've reached the end of search results.");
    }
    if (pageNum < totalPages) {
        console.log('test');
        getImagesAgain();
        pageNum += 1;
    }

    async function getImagesAgain() {
      let userInput = document.querySelector('input#search-query');
      const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
      const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput.value + "&image_type=photo&per_page=5&orientation=horizontal&safesearch=true&page=" + pageNum + "
  
    try {
      const response = await axios.get(URL);
      let images = response.data;
      console.log(images);
      
        if (response.status == 200) {
            renderGallery(images.hits);
            console.log(images.hits);
        }
     
      return images;
    }
    
    catch (error) {
      Notify.failure(error.message);
      }
    };
}

const hideBtn = () => loadBtn.classlist.add('hidden');
const showBtn = () => loadBtn.classlist.remove('hidden');

export { loadMore, hideBtn };