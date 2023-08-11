// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCz130bThwo4XA1yIgsY98GzDjByguj2ko",
    authDomain: "dbms-da2.firebaseapp.com",
    projectId: "dbms-da2",
    storageBucket: "dbms-da2.appspot.com",
    messagingSenderId: "481517890660",
    appId: "1:481517890660:web:10267f410f374739428371"
  };

firebase.initializeApp(firebaseConfig);

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registration successful, do something with the user data
            const user = userCredential.user;
            window.location.href = "login.html";
            console.log('User registered:', user);
        })
        .catch((error) => {
            // Handle registration errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('Registration error:', errorCode, errorMessage);
        });
});
