// Declare Variables
const items = document.querySelector('span.cart__count');
const btnAddItem = document.querySelector('.cart__action');
const btnGetItem = document.querySelector('.cart__get');
const bagModal = document.querySelector('.wrapper');
const itemTagName = document.querySelector('.item__title');
// const itemPriceTag = document.querySelector('.item__price');
const inputValue = document.querySelector('input.inputCount');
const increaseItem = document.querySelectorAll('.increase');
const subItem = document.querySelectorAll('.minus');
const itemPrice = document.querySelector('.price');
const minTotal = itemPrice.innerText;
let cartTotal = document.querySelector('.cart__total');
let productPriceTag = document.querySelector('.product__price');
const iElement = document.querySelector('.productTagPrice');
const subTotal = document.querySelector('.sub__total');
const closeModal = document.querySelector('.close__modal');

// Set Item Count to Zero
items.innerText = 0;

// Display none cart modal 
// bagModal.style.display = 'none';

// Add the Currency
iElement.innerText = 'R';
// let s = document.createElement('i');
// let t = document.createTextNode('R');
// s.appendChild(t);
// productPriceTag.appendChild(s);

// Set user cart object array
let userCart = {
	productTitle: [],
	productPrice: []
};

// Function to add item to cart, LS, push to array
document.addEventListener('click', addItem);

function addItem(e){
	if( e.target.className === 'cart__action' ){

		// Declare Variables
		let itemTitle = document.querySelector('.product__title').innerText;
		let itemPriceTag = document.querySelector('.product__price').innerText;

		// Push item details to array
		userCart.productTitle.push(itemTitle);
		userCart.productPrice.push(itemPriceTag);

		// Store into LS 
		localStorage.setItem('Products', JSON.stringify(userCart.productTitle));
		localStorage.setItem('Price', JSON.stringify(userCart.productPrice) );

		//Display array on console
		console.log(JSON.stringify(userCart,'',2));

		// Increment total cart number 
		items.innerText = (userCart.productTitle).length



	}
}

// Function to get item from cart, LS
btnGetItem.addEventListener('click', getItem);

function getItem(e){
	
	if (e.target.className === 'cart__get') {
		bagModal.classList.add('wrapper__box');
		const productName = JSON.parse(localStorage.getItem('Products'));
		const productPrice = JSON.parse(localStorage.getItem('Price'));

		itemTagName.innerText = productName;
		itemPrice.innerText = productPrice;

		subTotal.innerText = productPrice;
		cartTotal.innerText = productPrice;

	}
	// Display cart modal 
	bagModal.style.display = 'block';
}

// Increase a selected item
increaseItem.forEach((btnAdd) => {
  btnAdd.addEventListener('click', (e) => {
    let count = 1
    const productPrice = JSON.parse(localStorage.getItem('Price'));
    if( e.target.classList.contains('increase') ){
      count += parseInt(inputValue.value);
      inputValue.value = count;
      // let item_Price = parseInt(itemPrice.innerText);
      itemPrice.innerText = productPrice * count;
      console.log(itemPrice.innerText);
    }
    subTotal.innerText = itemPrice.innerText;
    cartTotal.innerText = itemPrice.innerText;
    console.log( inputValue.value );

    e.preventDefault();
  });
});

// Subtract a selected item
subItem.forEach((btnSub) => {
  btnSub.addEventListener('click', (e) => {
    let min;
    const productPrice = JSON.parse(localStorage.getItem('Price'));
    if( e.target.classList.contains('minus') ){
      inputValue.value--;
      min = inputValue.value;
      itemPrice.innerText = ( productPrice * min );
    }
    cartTotal.innerText = itemPrice.innerText;
    console.log( inputValue.value );

    e.preventDefault();
  });
});

// Close Modal
closeModal.addEventListener('click', (e) => {
	if( e.target.className === 'close__modal' ){
		bagModal.style.display = 'none';
	}

	e.preventDefault();
});