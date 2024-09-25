let cartItems = [];

document.addEventListener('DOMContentLoaded', () => {
  const cartList = document.getElementById('cart-list');
  const productList = document.getElementById('product-list');
  const checkoutBtn = document.getElementById('checkout-btn');

  productList.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
      const product = e.target.parentNode;
      const productName = product.querySelector('h5').textContent;
      const productPrice = product.querySelector('p').textContent;
      const productImage = product.querySelector('img').src;

      const cartItem = {
        name: productName,
        price: productPrice,
        image: productImage,
      };

      cartItems.push(cartItem);

      const cartItemHTML = `
        <li>
          <img src="${cartItem.image}" alt="${cartItem.name}">
          <h5>${cartItem.name}</h5>
          <p>${cartItem.price}</p>
        </li>
      `;

      cartList.innerHTML += cartItemHTML;
    }
  });

  checkoutBtn.addEventListener('click', () => {
    console.log('Checkout button clicked!');
    // Add checkout functionality here
  });
});