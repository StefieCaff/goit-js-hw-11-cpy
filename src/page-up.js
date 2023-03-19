export function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    wrapperBtnUP.style.display = 'block';
  } else {
    wrapperBtnUP.style.display = 'none';
  }
}
  btnUp.addEventListener('click', event => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});