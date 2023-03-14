//------------------local---------------------------------
import './css/styles.css';
import getImages from './get-images';
import renderGallery from './render-gallery';
import { toggleLoadContainer  } from './pagination';

//------------------libraries------------------------------
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Additional styles import
import "simplelightbox/dist/simple-lightbox.min.css";

//-------------------DOM refs---------------------------
const form = document.querySelector('.search-form')
const userInput = document.querySelector('input#search-query');
const loadBtn = document.querySelector('.load-more')
//-----------helper functions---------------------

const handleSubmit = e => {
    e.preventDefault();
    let input = userInput.value.trim().toLowerCase();
    let response = '';
    if (input.value === "") {
        return;
    };
    console.log(input);
    return response = getImages(input);
};

//--------------initialize/events----------------------------

form.addEventListener('submit', handleSubmit);
//loadBtn.addEventListener('click', getImages);
