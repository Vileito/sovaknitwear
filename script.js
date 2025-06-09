let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartPopup();
}

function removeFromCart(productName) {
    // Noņem tikai pirmo atrasto preci ar šo nosaukumu (ja vēlies noņemt visas, tad jālieto filter)
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    updateCartPopup();
}

function updateCartPopup() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;

    cartItems.innerHTML = '';  // Notīra iepriekšējo saturu

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - €${item.price.toFixed(2)} `;

        const btn = document.createElement('button');
        btn.textContent = '❌';
        btn.title = 'Noņemt no groza';
        btn.addEventListener('click', () => removeFromCart(item.name));

        li.appendChild(btn);
        cartItems.appendChild(li);

        total += item.price;
    });

    totalPrice.textContent = `Kopā: €${total.toFixed(2)}`;

    // Parāda vai paslēpj groza logu atkarībā no preču skaita
    document.getElementById('cart-popup').style.display = cart.length > 0 ? 'block' : 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert('Grozs ir tukšs!');
        return;
    }
    alert('Paldies par pirkumu!');
    cart = [];  // Tīra grozu pēc maksājuma
    updateCartPopup();
}

    totalPrice.textContent = `Kopā: €${total.toFixed(2)}`;

    document.getElementById

