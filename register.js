// Get the form and add event listener
const form = document.getElementById('register-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    const customerId = document.getElementById('customerId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Create an object to store user details
    const userData = {
        customerId: customerId,
        name: name,
        email: email,
        password: password
    };

    // Save the user data in localStorage (key: 'userData')
    localStorage.setItem('userData', JSON.stringify(userData));

    // Show success message
    alert('Registration successful! Data has been saved.');

    // Optionally, you can redirect the user to another page
    // window.location.href = "home.html";
});