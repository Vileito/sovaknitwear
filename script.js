let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartPopup();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartPopup();
}

function updateCartPopup() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;
    
    cartItems.innerHTML = '';  // Iztīrām iepriekšējos elementus
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - €${item.price.toFixed(2)} <button onclick="removeFromCart('${item.name}')">❌</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });
    
    totalPrice.innerHTML = `Kopā: €${total.toFixed(2)}`;
    
    // Parādām groza popup, ja ir preces
    document.getElementById('cart-popup').style.display = cart.length > 0 ? 'block' : 'none';
}

function checkout() {
    alert('Paldies par pirkumu!');
    cart = [];  // Tīram grozu pēc maksājuma
    updateCartPopup();  // Atjaunojam groza skatījumu
}

