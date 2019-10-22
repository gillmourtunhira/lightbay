const carouselSlide = document.querySelector('.carousel__slide');
const carouselImages = document.querySelectorAll('.carousel__slide li');

// Assign Id to last & first li
const list = document.querySelector('.list')
const listItems = list.children;
const firstItem = listItems[0];
const lastItem = listItems[listItems.length - 1];

window.onload = () => {
  firstItem.id = 'lastClone';
  lastItem.id = 'firstClone';
}

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners
nextBtn.addEventListener('click',()=>{
  if(counter >= carouselImages.length - 1 ) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

// Previous Button
prevBtn.addEventListener('click',()=>{
  if(counter <= 0 ) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend',() => {
  console.log(carouselImages[counter].id);
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  } else if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

// Automatic Click
setInterval(function(){
    	document.getElementById('nextBtn').click();
    },5000);
