//------------------local---------------------------------
import './css/styles.css';
import getImages from './get-images';
import renderGallery from './render-gallery';
import { scrollFunction } from './page-up';

let pageNum = 1;
// const limit = 40
// const totalPages = Math.floor(500 / limit);

//------------------libraries------------------------------
//import axios from 'axios';
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
const clearHTML = (element) => element.innerHTML = '';

/* on submit clear gallery, set page to 1, make new api call if input,
   deactivate search button --if empty reload */
const handleSubmit = e => {
    e.preventDefault();
    let pageNum = 1;
    clearHTML(gallery);
    const input = e.target.elements.searchQuery.value.trim().toLowerCase();
    let response = '';
   
    if (input == "") {
        window.location.reload();
        return;
    }
    else if (input) {
        clearHTML(gallery);
        console.log(input);
        response = getImages(input, pageNum);
        searchBtn.disabled = true;
        userInput.addEventListener('focus', handleNewSearch);
        return response;
    }
};

/* when search box gets focus clear gallery, hide load button, enable search button
  reset pageNum to 1*/
const handleNewSearch = () => {
    input = userInput.value.trim().toLowerCase();
    console.log(input);
    if (input) {
        clearHTML(gallery);
        hideBtn(loadBtn);
        searchBtn.disabled = false;
        pageNum = 1;
    }

  else {
      return;
    }
};
// handle more images increment page number and call api
const loadMore = () => {
    input = userInput.value.trim().toLowerCase();
    pageNum += 1;
      if (input) {
        try {
            console.log(input);
            console.log(pageNum);
        getImages(input, pageNum);
        
      }
      
      catch (error) {
        Notify.failure('Oops, that request did not work, try another search.')
      }
    }
}

//--------------initialize/events----------------------------

form.addEventListener('submit', handleSubmit);

window.addEventListener('scroll', scrollFunction);

loadBtn.addEventListener('click', loadMore)
