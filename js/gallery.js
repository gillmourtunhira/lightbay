// Gallery JS

const imgList = document.querySelectorAll('li.img_one img');
imgList[0].addEventListener('click', () => {
  document.querySelector('#active__image').src = imgList[0].src;
  imgList[0].style.transition = "all 2s";
}, false);
imgList[1].addEventListener('click', () => {
  document.querySelector('#active__image').src = imgList[1].src;
  imgList[1].style.transition = "all 2s";
}, false);
imgList[2].addEventListener('click', () => {
  document.querySelector('#active__image').src = imgList[2].src;
}, false);
imgList[3].addEventListener('click', () => {
  document.querySelector('#active__image').src = imgList[3].src;
}, false);

// End Gallery JS