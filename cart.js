document.addEventListener("DOMContentLoaded", function() {
    // Get the cart items from the localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    // Get the cart items container element
    const cartItemsContainer = document.getElementById("cart-items");
  
    // Clear the cart items container
    cartItemsContainer.innerHTML = "";
  
    // Iterate over the cart items and create the HTML for each item
    cartItems.forEach(function(item) {
      // Create the cart item card
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");
  
      // Create the card body
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      // Create the product title
      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = item.title;
  
      // Create the product description
      const description = document.createElement("p");
      description.classList.add("card-text");
      description.textContent = item.description;
  
      // Create the product price
      const price = document.createElement("h5");
      price.classList.add("card-title");
      price.textContent = "$" + item.price.toFixed(2);
  
      // Create the remove button
      const removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-danger");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", function() {
        // Remove the item from the cart and update the cart items in localStorage
        const index = cartItems.indexOf(item);
        if (index > -1) {
          cartItems.splice(index, 1);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          // Refresh the cart items on the page
          renderCartItems();
        }
      });
  
      // Append the elements to the card body
      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(price);
      cardBody.appendChild(removeBtn);
  
      // Append the card body to the card
      card.appendChild(cardBody);
  
      // Append the card to the cart items container
      cartItemsContainer.appendChild(card);
    });
  
    // Function to update the cart total on the page
    function updateCartTotal() {
      const cartTotalElement = document.getElementById("cart-total");
      const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
      cartTotalElement.textContent = "$" + cartTotal.toFixed(2);
    }
  
    // Function to render the cart items on the page
    function renderCartItems() {
      // Clear the cart items container
      cartItemsContainer.innerHTML = "";
  
      // Render the cart items again
      cartItems.forEach(function(item) {
        // ... (same code as above)
      });
  
      // Update the cart total
      updateCartTotal();
    }
  
    // Render the cart items on page load
    renderCartItems();
  });
  