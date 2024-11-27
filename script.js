document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const email = document.getElementById('email').value;

    if (email) {
        alert(`Email entered: ${email}\n(This is a mock page. No data is sent anywhere.)`);
    } else {
        alert('Please enter an email address.');
    }
});
