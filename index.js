$("#check").click(function () {
    let input = $("#search").val();
    let pincodes = ['60028', '600124', '50068','12345','12346'];
    let isthere = false;
    pincodes.forEach(element => {
        if (element === input) {
            isthere = true;
        }
    });
    if (isthere === false) {
        alert("Bad News,we don't deliver at this location");
    }
    else {
        alert("Good News,we deliver to this location");
    }
});
// Initialize an empty cart object
var cart = {};
function incrementQuantity(item) {
    // Increase the quantity of the selected item in the cart
    if (cart[item]) {
        cart[item]++;
    } else {
        cart[item] = 1;
    }
    updateQuantity(item);
    updateCartInLocalStorage(); // Update the cart in localStorage
    console.log(cart); // For debugging purposes
}

function decrementQuantity(item) {
    // Decrease the quantity of the selected item in the cart
    if (cart[item] && cart[item] > 0) {
        cart[item]--;
    }
    updateQuantity(item);
    updateCartInLocalStorage(); // Update the cart in localStorage
    console.log(cart); // For debugging purposes
}

function updateQuantity(item) {
    // Update the quantity display for the selected item
    var quantityElement = document.getElementById("quantity-" + item);
    quantityElement.textContent = cart[item] || 0;
}

function updateCartInLocalStorage() {
    // Store the cart items in localStorage to access them on the cart.html page
    localStorage.setItem('cartItems', JSON.stringify(cart));
}

// Retrieve the cart items from localStorage if they exist
var savedCart = localStorage.getItem('cartItems');
if (savedCart) {
    cart = JSON.parse(savedCart);
    // Update the quantity displays for each item in the saved cart
    for (var item in cart) {
        updateQuantity(item);
    }
}