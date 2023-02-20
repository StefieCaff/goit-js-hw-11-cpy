//------------------local---------------------------------
import './css/styles.css';
import getImages from './get-images';
import renderGallery from './render-gallery';

//------------------libraries------------------------------
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';

const userInput = document.querySelector('input#search-query');
// const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
// const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput.value + "&image_type=photo&orientation=horizontal&safesearch=true";
const form = document.querySelector('form');


// //------------API request-------------------------
// async function getImages() {
//     try {
//       const response = await axios.get(URL);
//       console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };


//-----------helper functions---------------------

const handleSubmit = e => {
    e.preventDefault();
    let input = userInput.value.trim();

    if (input.value === "") {
        return;
    };
    console.log(input);
    return response = getImages(input);
};





//--------------initialize/events----------------------------

form.addEventListener('submit', handleSubmit);

//simple lightbox image library
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, throttleInterval: 100 });