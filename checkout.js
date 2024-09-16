// On Page Load
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(window.localStorage.getItem('cart')) || [];
    renderCartItems(cart);
    calculateTotalPrice(cart);

    document.getElementById('confirm-order-btn').addEventListener('click', () => confirmOrder(cart));
});

// Render Cart Items in Checkout Page
function renderCartItems(cart) {
    const checkoutItemsList = document.getElementById('checkout-items-list');
    checkoutItemsList.innerHTML = ''; // Clear previous items

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
        checkoutItemsList.appendChild(listItem);
    });
}

// Calculate Total Price
function calculateTotalPrice(cart) {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('checkout-total-price').textContent = totalPrice.toFixed(2);
}

// Confirm Order Functionality
function confirmOrder(cart) {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Show success message
    document.getElementById('order-success-message').classList.remove('hidden');

    // Populate the invoice section
    const invoiceItemsList = document.getElementById('invoice-items-list');
    const invoiceTotal = document.getElementById('invoice-total');
    invoiceItemsList.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    cart.forEach(item => {
        const invoiceItem = document.createElement('li');
        invoiceItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`;
        invoiceItemsList.appendChild(invoiceItem);
        totalPrice += item.price * item.quantity;
    });

    invoiceTotal.textContent = totalPrice.toFixed(2);

    // Show the invoice section
    document.getElementById('invoice-section').classList.remove('hidden');

    // Clear the cart
    window.localStorage.removeItem('cart');
}
