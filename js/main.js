let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');


window.onscroll = () => {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menuBar.classList.remove('fa-times');
  loginForm.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

const decrementButton = document.querySelector('.counter__button--decrement');
const incrementButton = document.querySelector('.counter__button--increment');
let minus = document.querySelector('.minus');
let bulletLeft = document.querySelector('.bullet--left');
let plus = document.querySelector('.plus');
let bulletRight = document.querySelector('.bullet--right');
let number = document.querySelector('.number');

let count = 0;
let timeoutId;

decrementButton.addEventListener('click', () => {
	if(timeoutId) {
		clearTimeout(timeoutId);
		number.innerText = count
	}
	count -= 1;
	decrementButton.classList.add('shooting')
	const newMinus = minus.cloneNode(true);
	minus.parentNode.replaceChild(newMinus, minus);
	minus = newMinus;
	const newBulletLeft = bulletLeft.cloneNode(true);
	bulletLeft.parentNode.replaceChild(newBulletLeft, bulletLeft);
	bulletLeft = newBulletLeft;
	number.style.animation = 'decrement .25s ease-in .1s';
	number.style.transformOrigin = 'center right'
	const newNumber = number.cloneNode(true);
	number.parentNode.replaceChild(newNumber, number);
	number = newNumber;
	timeoutId = setTimeout(() => number.innerText = count, 200);
});

incrementButton.addEventListener('click', () => {
	if(timeoutId) {
		clearTimeout(timeoutId);
		number.innerText = count
	}
	count += 1;
	incrementButton.classList.add('shooting')
	const newPlus = plus.cloneNode(true);
	plus.parentNode.replaceChild(newPlus, plus);
	plus = newPlus;
	const newBulletRight = bulletRight.cloneNode(true);
	bulletRight.parentNode.replaceChild(newBulletRight, bulletRight);
	bulletRight = newBulletRight;
	number.style.animation = 'increment .25s ease-in .1s';
	number.style.transformOrigin = 'center left'
	const newNumber = number.cloneNode(true);
	number.parentNode.replaceChild(newNumber, number);
	number = newNumber;
	timeoutId = setTimeout(() => number.innerText = count, 200);
});

