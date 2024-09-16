let cart = [];

// Add product to cart and update cart count
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const id = product.getAttribute('data-id');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        updateCartCount();
        alert(`${name} has been added to your cart.`);
    });
});

// Update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Handle cart icon click (Navigate to Checkout Page)
document.getElementById('cart-icon').addEventListener('click', () => {
    window.localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to local storage
    window.location.href = 'checkout.html'; // Redirect to checkout page
});
