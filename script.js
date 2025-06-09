// Groza dati
const cart = [];
let total = 0;

const cartPopup = document.getElementById('cartPopup');
const cartItemsList = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeCartBtn = document.getElementById('closeCart');

function updateCart() {
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>€${item.price.toFixed(2)}</span>
        `;
        cartItemsList.appendChild(li);
    });
    cartTotal.innerText = `Kopā: €${total.toFixed(2)}`;
}

function showCart() {
    cartPopup.style.display = 'block';
}

function hideCart() {
    cartPopup.style.display = 'none';
}

closeCartBtn.addEventListener('click', hideCart);

// Pievienot klikšķa notikumu visām pogām
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const name = product.querySelector('h3').innerText;
        const priceText = product.querySelector('.price').innerText;
        const price = parseFloat(priceText.replace('€', ''));

        // Pievienot grozam
        cart.push({ name, price });
        total += price;

        updateCart();
        showCart();
    });
});

