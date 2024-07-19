document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('response-message');

    if (email) {
        responseMessage.textContent = 'Thank you for subscribing! We will keep you updated.';
        responseMessage.style.color = 'green';
    } else {
        responseMessage.textContent = 'Please enter a valid email address.';
        responseMessage.style.color = 'red';
    }
});