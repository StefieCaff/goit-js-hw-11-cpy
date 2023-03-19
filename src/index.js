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
//-----------helper functions---------------------

const hideBtn = (element) => element.classList.add('hidden');
const showBtn = (element) => element.classList.remove('hidden');

const clearHTML = (element) => element.innerHTML = '';

const handleSubmit = e => {
    e.preventDefault();
    let input = e.target.value;
    //let response = '';
   
    if (input == " ") {
        clearHTML(gallery);
        form.reset();
        
        return;
    };
      console.log(input);
    
    return response = getImages(input);
};

const handleNewSearch = e => {
    let input = e.target.value;
    if (input == "") {
        clearHTML(gallery);
        form.reset();
        hideBtn(loadBtn);
        window.location.reload();
        return;
    };
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

form.addEventListener('input', handleNewSearch);

window.addEventListener('scroll', scrollFunction);