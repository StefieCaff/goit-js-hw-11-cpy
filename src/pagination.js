const loadContainer = document.querySelector('load-container')
const loadBtn = document.querySelector('.load-more');

const toggleHidden = (element) =>
  element.classList.toggle('hidden') {

}
const hideBtn = () => loadBtn.classList.add('hidden');
const showBtn = () => loadBtn.classList.remove('hidden');

export { toggleHidden, hideBtn, showBtn };