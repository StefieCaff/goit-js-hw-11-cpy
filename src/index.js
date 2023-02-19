//------------------local---------------------------------
import './css/styles.css';
import renderGallery from './render-gallery';

//------------------libraries------------------------------
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const axios = require('axios').default;

const userInput = document.querySelector('.searchQuery');
const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput + "&image_type=photo&orientation=horizontal&safesearch=true";



// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });




//--------------initialize------------------------------

//simple lightbox image library
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, throttleInterval: 100 });