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
  
  // Get references to the form and form elements
  var loginForm = document.getElementById('login-form');
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  
  // Add a listener to the form submission event
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    var email = emailInput.value;
    var password = passwordInput.value;
  
    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (userCredential) {
        // Handle successful login
        console.log('User logged in:', userCredential.user);
        // Redirect the user to another page (e.g., "hell.html")
        window.location.href = "index.html";
      })
      .catch(function (error) {
        // Handle login errors
        console.error('Login error:', error);
        // Display an error message to the user
        alert('Login failed. Please try again.');
      });
  });
  