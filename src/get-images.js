import axios from 'axios';
import renderGallery from './render-gallery';
import { Notify } from 'notiflix';


export default async function getImages() {
  let userInput = document.querySelector('input#search-query');
  const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
  const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput.value + "&image_type=photo&orientation=horizontal&safesearch=true";
  
    try {
      const response = await axios.get(URL);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    };
};