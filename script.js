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

        const nameSpan = document.createElement('span');
        nameSpan.textContent = `${item.name} - €${item.price.toFixed(2)}`;

        const btn = document.createElement('button');
        btn.textContent = '❌';
        btn.title = "Noņemt no groza";
        btn.addEventListener('click', () => removeFromCartAtIndex(index));

        li.appendChild(nameSpan);
        li.appendChild(btn);

        cartItems.appendChild(li);

        total += item.price;
    });

    totalPrice.textContent = `Kopā: €${total.toFixed(2)}`;

    document.getElementById

