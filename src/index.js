//------------------local---------------------------------
import './css/styles.css';
import getImages from './get-images';
import renderGallery from './render-gallery';
import { scrollFunction } from './page-up';

let pageNum = 1;
const limit = 40
const totalPages = Math.floor(500 / limit);

//------------------libraries------------------------------
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";

//-------------------DOM refs---------------------------
const form = document.querySelector('.search-form')
const userInput = document.querySelector('input#search-query');
const loadBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery-list');
const searchBtn = document.querySelector('button#search-btn');

//-----------helper functions---------------------

const hideBtn = (element) => element.classList.add('hidden');
const showBtn = (element) => element.classList.remove('hidden');

const clearHTML = (element) => element.innerHTML = '';

const handleSubmit = e => {
    e.preventDefault();
    pageNum = 1;
    clearHTML(gallery);
    let input = userInput.value.trim().toLowerCase();
    let response = '';
   
    if (input == "") {
        clearHTML(gallery);
        form.reset();
        window.location.reload();
        return;
    }
    else {
        clearHTML(gallery);
        console.log(input);
        response = getImages(input);
        searchBtn.disabled = true;
        userInput.addEventListener('focus', handleNewSearch);
        return response;
    }
};

const handleNewSearch = () => {
    input = userInput.value.trim().toLowerCase();
    console.log(input);
    if (input) {
        pageNum = 1
        clearHTML(gallery);
        hideBtn(loadBtn);
        searchBtn.disabled = false;
    }

  else {
      return;
    }
};

//--------------initialize/events----------------------------

form.addEventListener('submit', handleSubmit);

loadBtn.addEventListener('click', () => {
 
    try {
        getImages();
    }
    catch (error) {
      Notify.failure('Oops, that request did not work, try another search.')
    }
});

window.addEventListener('scroll', scrollFunction);





// const handleNewSearch = () => {
//     input = userInput.value.trim().toLowerCase();
//     console.log(input);
//   if (input) {
//     pageNum =1
//     clearHTML(gallery);
//     hideBtn(loadBtn);
//     searchBtn.disabled = false;
//     form.addEventListener('submit', handleSubmit);
//   }
//   else {
//       return;
//     }
// };