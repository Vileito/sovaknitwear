let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');

    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - €${item.price.toFixed(2)} 
                        <span onclick="removeFromCart('${item.name}')" style="cursor:pointer;">❌</span>`;
        cartItems.appendChild(li);
    });

    totalPriceElem.innerText = `Kopā: €${totalPrice.toFixed(2)}`;
    document.getElementById('cart-popup').style.display = 'block';
}

function checkout() {
    alert('Veicot maksājumu...');
}
