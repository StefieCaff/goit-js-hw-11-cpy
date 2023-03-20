import axios from 'axios';
import renderGallery from './render-gallery';
import { Notify } from 'notiflix';

let pageNum = 1;
const limit = 40;

const loadBtn = document.querySelector('.load-more');
const form = document.querySelector('.search-form')
// let userInput = document.querySelector('input#search-query');

export default async function getImages() {
  
  let userInput = document.querySelector('input#search-query');
  const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
  const URL = `https://pixabay.com/api/?key=${ API_KEY }&q=${ userInput.value }&image_type=photo&per_page=${ limit }&orientation=horizontal&safesearch=true&page=${ pageNum }`

    try {
      const response = await axios.get(URL);
      let images = response.data;
      pageNum += 1
      
      console.log(images);

      if (images.hits.length === 0) {
        clearHTML(gallery);
        Notify.info('Sorry! There are no images to match your search. Try another.')
        hideBtn(loadBtn);
        window.location.reload();
        return;
      }
      
      if (images.hits.length < 40) {
        renderGallery(images.hits);
        console.log(images.hits);
        hideBtn(loadBtn);
        Notify.success(`Woot! Maximum search values found! We have ${images.hits.length} images.`)
        pageNum = 1;
        return;
      }
      
      if (pageNum >= 3 && pageNum <= 13) {
        console.log(pageNum);
        renderGallery(images.hits);
        console.log(images.hits);
        showBtn(loadBtn);
        return;
      }

      if (pageNum === 14) {
        console.log(pageNum);
        renderGallery(images.hits.slice(20));
        hideBtn(loadBtn);
      }

      else if (images.totalHits > 40) {
        console.log(pageNum);
        renderGallery(images.hits);
        console.log(images.hits);
        showBtn(loadBtn);
        Notify.success(`Hooray! We found ${images.totalHits} images.`);
        return;
      };

      return images;

    } catch (error) {
      Notify.failure('Oops, that request did not work, try another search.');
    }
};

//------------------------helper functions -------------------------------------------------
const hideBtn = (element) => element.classList.add('hidden');
const showBtn = (element) => element.classList.remove('hidden');
const clearHTML = (element) => element.innerHTML = '';