import axios from 'axios';
import renderGallery from './render-gallery';
import { Notify } from 'notiflix';
import { hideBtn, showBtn } from './pagination'

let pageNum = 1;
// export default async function getImages() {
//   let userInput = document.querySelector('input#search-query');
//   const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
//   const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput.value + "&image_type=photo&per_page=40&orientation=horizontal&safesearch=true&page=" + pageNum
//   let totalPages = Math.floor(500 / limit);
//     try {
//       const response = await axios.get(URL);
//       let images = response.data;
//       pageNum += 1
//       console.log(images);
      
//       if (pageNum > 1) {
//         showBtn();
//       }

//       if (images.total === 0) {
//         gallery.innerHTML = "";
//         return;
//       }

//         if (!response.ok) {
//             if (response.status == 404) {
//               gallery.innerHTML = "";
//               Notify.failure('Oops, no matches, try another search.')
//               throw Error(response.statusText);
//           }
//         }
      
//         if (response.status == 200) {
//           renderGallery(images.hits);
//           console.log(images.hits);
//         }
            
//       return images;
//     }
    
//     catch (error) {
//       Notify.info("Sorry, there are no images matching your query.");
//     }
// };


export default async function getImages() {
  let userInput = document.querySelector('input#search-query');
  const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
  const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput.value + "&image_type=photo&per_page=40&orientation=horizontal&safesearch=true&page=" + pageNum
  
  try {
    const response = await axios.get(URL);
    let images = response.data;
    console.log(images);
      
    if (!response.ok) {
      if (response.status == 404) {
        Notify.failure('Oops, no matches, try another search.');
      }
    }
      
    console.log(images.hits);
    return images.hits;
  }
    
  catch (error) {
    Notify.info("Sorry, there are no images matching your query.");
  }
};