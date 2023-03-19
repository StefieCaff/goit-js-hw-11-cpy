//----- Dom ----
const btnUp = document.querySelector('.btn-up-wrapper__btn');
const wrapperBtnUP = document.querySelector('.btn-up-wrapper');

/// hide button until user scrolls down, then initialize/show button---
export function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    wrapperBtnUP.style.display = 'block';
  } else {
    wrapperBtnUP.style.display = 'none';
  }
}

//------click brings user to top-----
  btnUp.addEventListener('click', event => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  });