const menuIcon = document.getElementById("menuIcon");
const crossIcon = document.getElementById("crossIcon");
const ulElement = document.getElementById("ulElement");
const home = document.getElementById("home");
const about = document.getElementById("about");
const help = document.getElementById("help");
const offer = document.getElementById("offer");
const contact = document.getElementById("contact");


menuIcon.addEventListener("click", () => {
  ulElement.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
})

crossIcon.addEventListener("click", () => {
  ulElement.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
})

help.addEventListener("click", () => {
  ulElement.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
})

home.addEventListener("click", () => {
  ulElement.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
})

offer.addEventListener("click", () => {
  ulElement.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
})

const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', (e) => {
const query = searchInput.value.trim();
console.log(`Searching for: ${query}`);
});

const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartCounter = document.getElementById('cart-counter');

let cartCount = 0;

addToCartBtn.addEventListener('click', () => {
cartCount++;


cartCounter.textContent = `${cartCount} item${cartCount === 1 ? '' : 's'} in cart`;


cartCounter.style.display = 'block';
addToCartBtn.textContent = 'Item added to cart';
});
