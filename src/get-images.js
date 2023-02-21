import axios from 'axios';
import renderGallery from './render-gallery';
import { Notify } from 'notiflix';

const gallery = document.querySelector('.gallery');

export default async function getImages() {
  let userInput = document.querySelector('input#search-query');
  let pageNUm = "";
  const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
  const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput.value + "&image_type=photo&orientation=horizontal&safesearch=true?per_page=40"
  
    try {
      const response = await axios.get(URL);
      let images = response.data;
      console.log(images);
        if (images.total === 0) {
            gallery.innerHTML = "";
            Notify.info("Sorry, there are no images matching your search query. Please try again.");
            return;
        }

        if (!response.ok) {
            if (response.status == 404) {
              gallery.innerHTML = "";
              Notify.failure('Oops, there is no country with that name')
              throw Error(response.statusText);
          }
      }
    
      images = images.hits
      console.log(images);
      return images;
    }
    
    catch (error) {
      Notify.failure(error);
    }
};
