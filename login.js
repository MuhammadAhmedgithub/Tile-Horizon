document.addEventListener('DOMContentLoaded', function () {
    // Sign Up Form Submission
    document.getElementById('signUpForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('signUpUser').value;
        const password = document.getElementById('signUpPass').value;
        const confirmPassword = document.getElementById('signUpconfirmPass').value;
        const email = document.getElementById('signUpEmail').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const userData = {
            username: username,
            password: password,
            email: email
        };

        localStorage.setItem('user_' + username, JSON.stringify(userData));
        console.log('User signed up:', userData);
        alert('Signup successful! Data stored in local storage.');
    });

    // Sign In Form Submission
    document.getElementById('signInForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('signInUser').value;
        const password = document.getElementById('signInPass').value;

        const storedUserData = localStorage.getItem('user_' + username);
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            if (userData.password === password) {
                console.log('Login successful for username:', username);
                alert('Login successful!');
            } else {
                console.log('Incorrect password for user:', username);
                alert('Incorrect password!');
            }
        } else {
            console.log('No user found with username:', username);
            alert('No user found with this username!');
        }
    });
});
