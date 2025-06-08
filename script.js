let cart = [];
let totalPrice = 0;

// Funkcija preces pievienošanai grozam
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

// Funkcija preces izņemšanai no groza
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    updateCart();
}

// Funkcija groza atjaunināšanai
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    
    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - €${item.price.toFixed(2)} 
                        <span onclick="removeFromCart('${item.name}')" style="cursor:pointer;">❌</span>`;
        cartItems.appendChild(li);
    });

    totalPriceElem.innerText = `Kopā: €${totalPrice.toFixed(2)}`;
}

// Funkcija groza parādīšanai/slēpšanai
function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'none' || !cartPopup.style.display ? 'block' : 'none';
}

function checkout() {
    alert('Veicot maksājumu...');
}
