// Declare Variables
const inputValue = document.querySelector('input.inputCount');
const increaseItem = document.querySelectorAll('.increase');
const subItem = document.querySelectorAll('.minus');
const itemPrice = document.querySelector('.price');
const minTotal = itemPrice.innerText;
let cartTotal = document.querySelector('.cart__total');

// Increase a selected item
increaseItem.forEach((btnAdd) => {
  btnAdd.addEventListener('click', (e) => {
    let count = 1
    if( e.target.classList.contains('increase') ){
      count += parseInt(inputValue.value);
      inputValue.value = count;
      // let item_Price = parseInt(itemPrice.innerText);
      itemPrice.innerText = minTotal * count;
    }
    cartTotal.innerText = itemPrice.innerText;
    console.log( inputValue.value );

    e.preventDefault();
  });
});

// Subtract a selected item
subItem.forEach((btnSub) => {
  btnSub.addEventListener('click', (e) => {
    let min;
    if( e.target.classList.contains('minus') ){
      inputValue.value--;
      min = inputValue.value;
      itemPrice.innerText = ( minTotal * min );
    }
    cartTotal.innerText = itemPrice.innerText;
    console.log( inputValue.value );

    e.preventDefault();
  });
});
