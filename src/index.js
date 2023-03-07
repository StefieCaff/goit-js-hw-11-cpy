//------------------local---------------------------------
import './css/styles.css';
import getImages from './get-images';
import renderGallery from './render-gallery';
import { loadMore, hideBtn  } from './pagination';

//------------------libraries------------------------------
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";

const userInput = document.querySelector('input#search-query');
// const API_KEY = '33708941-9afad2bda68efbaf1594840f2';
// const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + userInput.value + "&image_type=photo&orientation=horizontal&safesearch=true";
const form = document.querySelector('form');
const loadBtn = document.querySelector('.load-more')

//-----------helper functions---------------------

const handleSubmit = e => {
    e.preventDefault();
    let input = userInput.value.trim();
    let response = '';
    if (input.value === "") {
        return;
    };
    console.log(input);
    return response = getImages(input);
};

//--------------initialize/events----------------------------

form.addEventListener('submit', handleSubmit);
loadBtn.addEventListener('click', loadMore);
