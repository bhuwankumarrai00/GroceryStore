// Simulate existing user credentials (you can replace this with actual data from your backend)
const existingCustomers = [
    { id: "customer123", password: "password123" },
    { id: "customer456", password: "password456" }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting

    const customerId = document.getElementById('customerId').value;
    const password = document.getElementById('password').value;
    const errorMessageElement = document.getElementById('error-message');

    // Clear previous error messages
    errorMessageElement.textContent = "";

    // Find the customer by ID
    const customer = existingCustomers.find(customer => customer.id === customerId);

    if (!customer) {
        // If the customer ID doesn't exist
        errorMessageElement.textContent = "ID not valid.";
        return;
    }

    if (customer.password !== password) {
        // If the password is incorrect
        errorMessageElement.textContent = "Password not valid.";
        return;
    }

    // If both ID and password are correct, redirect to Home Page
    window.location.href = "home.html";  // Redirect to the Home Page
});