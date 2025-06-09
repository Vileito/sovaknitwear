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
        li.textContent = `${item.name} - €${item.price.toFixed(2)} `;

        const btn = document.createElement('button');
        btn.textContent = '❌';
        btn.style.marginLeft = '10px';
        btn.style.background = 'transparent';
        btn.style.border = 'none';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '16px';

        btn.addEventListener('click', () => removeFromCart(item.name));

        li.appendChild(btn);
        cartItems.appendChild(li);

        total += item.price;
    });

    totalPrice.textContent = `Kopā: €${total.toFixed(2)}`;

    // Parādām groza popup, ja ir preces
    document.getElementById('cart-popup').style.display = cart.length > 0 ? 'block' : 'none';
}

function checkout() {
    alert('Paldies par pirkumu!');
    cart = [];  // Tīram grozu pēc maksājuma
    updateCartPopup();  // Atjaunojam groza skatījumu
}
