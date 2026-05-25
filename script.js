// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartlist = document.getElementById("card-list");
const cartClearBtn = document.getElementById("clear-cart-btn");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}
const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
// Render cart list
function renderCart() {
	productList.innerHTML = "";
	products.forEach(product=>{
		const li = document.createElement("li");
		li.innerHTML = `<span>${product.name}-$${product.price}</span><button>Add to Cart</button>`;
		let btn = li.querySelector("button");
		btn.addEventListener('click',()=>{
			addToCart(product);
		});
		productList.appendChild(li);
	})
}

// Add item to cart
function addToCart(product) {
	cart.push(product);
	sessionStorage.setItem("cart",JSON.stringify(cart));
	renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
	cartlist.innerHTML = "";
	cart.forEach(item=>{
		const li = document.createElement("li");
		li.innerText = `${item.name} - $${item.price}`;
		cartlist.appendChild(li);
	})
}

// Clear cart
function clearCart() {
	cartClearBtn.addEventListener('click',function(){
		cart = [];
		sessionStorage("cart",JSON.stringify(cart));
		renderCart();
	})
}

// Initial render
renderProducts();
renderCart();
