// Simulate Logged-in User Info (You can replace with actual logged-in user data)
const user = {
    id: "customer123",
    email: "customer@example.com"
};

// Products Array
const products = [
    { id: 1, name: "Apple", price: 1.50 },
    { id: 2, name: "Banana", price: 0.90 },
    { id: 3, name: "Orange", price: 1.20 }
];

// Cart Array to Hold Selected Products
let cart = [];

// On Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Display User Info
    document.getElementById('user-id').textContent = user.id;
    document.getElementById('user-email').textContent = user.email;

    // Add to Cart Functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.product');
            const productId = parseInt(productElement.getAttribute('data-id'));
            const product = products.find(prod => prod.id === productId);
            cart.push(product);
            updateCart();
        });
    });

    // Edit User Info Modal
    const editUserBtn = document.getElementById('edit-user-btn');
    const editUserModal = document.getElementById('edit-user-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const saveUserBtn = document.getElementById('save-user-btn');
    const editUserIdInput = document.getElementById('edit-user-id');
    const editUserEmailInput = document.getElementById('edit-user-email');

    editUserBtn.addEventListener('click', function() {
        editUserIdInput.value = user.id;
        editUserEmailInput.value = user.email;
        editUserModal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', function() {
        editUserModal.style.display = 'none';
    });

    saveUserBtn.addEventListener('click', function() {
        user.email = editUserEmailInput.value;
        document.getElementById('user-email').textContent = user.email;
        editUserModal.style.display = 'none';
    });

    // Close Modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target == editUserModal) {
            editUserModal.style.display = 'none';
        }
    });
});

// Update Cart and Calculate Total Price
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsElement.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        totalPrice += product.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}
document.addEventListener('DOMContentLoaded', () => {
    // Add to Cart Functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.product');
            const productId = parseInt(productElement.getAttribute('data-id'));
            const product = products.find(prod => prod.id === productId);

            cart.push(product);
            updateCart();
            showSuccessMessage();
        });
    });
});
function showSuccessMessage() {
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 2000);
}