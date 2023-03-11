import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getImages from './get-images'; 
import renderGallery from './render-gallery';
import axios from 'axios';
const loadBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');
const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");


let initialImages = 40;
let loadImages = 40;





const hideBtn = () => loadBtn.classlist.add('hidden');
const showBtn = () => loadBtn.classlist.remove('hidden');

export { pagination, hideBtn };