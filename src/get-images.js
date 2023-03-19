import axios from 'axios';
import renderGallery from './render-gallery';
import { Notify } from 'notiflix';

let pageNum = 1;
const limit = 40
const loadBtn = document.querySelector('.load-more');
// export default async function getImages() {
 
//   const userInput = document.querySelector('input#search-query');
//   const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
//   const URL = `https://pixabay.com/api/?key=${ API_KEY }&q=${ userInput.value }&image_type=photo&per_page=${ limit }&orientation=horizontal&safesearch=true&page=${ pageNum }`
  
//     try {
//       const response = await axios.get(URL);
//       //let images = response.data;
//       pageNum += 1
//       console.log(images);
        
//       return response.data.hits;



  // if (!response.ok) {
  //         if (response.status == 404) {
  //           gallery.innerHTML = "";
  //           Notify.failure('Oops, that request did not work, try another search.')
  //           // throw Error(response.statusText);
  //         }
  //     }

  // else if (response.status == 200) {
  //       renderGallery(images.hits);
  //       console.log(images.hits);
  //       showBtn(loadBtn);
  //     }
  //



//     }
    
//     catch (error) {
//      Notify.info('Sorry! There are no images to match your search. Try another.')
//     }
// };


export default async function getImages() {
 
  const userInput = document.querySelector('input#search-query');
  const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
  const URL = `https://pixabay.com/api/?key=${ API_KEY }&q=${ userInput.value }&image_type=photo&per_page=${ limit }&orientation=horizontal&safesearch=true&page=${ pageNum }`
  
    try {
      const response = await axios.get(URL);
      let images = response.data;
      pageNum += 1
      console.log(images);
      
      if (images.hits.length == 0) {
        gallery.innerHTML = "";
        Notify.info('Sorry! There are no images to match your search. Try another.')
        return;
      }
      
      if (images.total <= 40) {
        renderGallery(images.hits);
        console.log(images.hits);
        hideBtn(loadBtn);
      }
      
      else {
        renderGallery(images.hits);
        console.log(images.hits);
        showBtn(loadBtn);
      }

      return images;
    } catch (error) {
      Notify.failure('Oops, that request did not work, try another search.')
    }
  
};

const hideBtn = (element) => element.classList.add('hidden');
const showBtn = (element) => element.classList.remove('hidden');