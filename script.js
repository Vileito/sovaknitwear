let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartPopup();
}

function removeFromCartAtIndex(index) {
    cart.splice(index, 1);
    updateCartPopup();
}

function updateCartPopup() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;

    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - €${item.price.toFixed(2)} `;

        const btn = document.createElement('button');
        btn.textContent = '❌';
        btn.style.marginLeft = '10px';
        btn.style.background = 'transparent';
        btn.style.border = 'none';
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '16px';

        // Noņem preču pēc tieša indeksa
        btn.addEventListener('click', () => {
            removeFromCartAtIndex(index);
        });

        li.appendChild(btn);
        cartItems.appendChild(li);

        total += item.price;
    });

    totalPrice.textContent = `Kopā: €${total.toFixed(2)}`;

    document.getElementById('cart-popup').style.display = cart.length > 0 ? 'block' : 'none';
}

function checkout() {
    alert('Paldies par pirkumu!');
    cart = [];
    updateCartPopup();
}
