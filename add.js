
async function fetchMenuItems() {
  try {
    const response = await fetch('https://crudcrud.com/api/df95452cd992446b850594472d58284e');
    const menuItems = await response.json();
    return menuItems;
  } catch (error) {
    console.error('Error fetching menu items:', error);
  }
}

function displayMenu() {
  const menuList = document.getElementById('menu-list');

  fetchMenuItems()
    .then(menuItems => {
      menuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${item.name} - $${item.price.toFixed(2)}</span>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuList.appendChild(li);
      });
    });
}

function addToCart(itemId) {
  fetchMenuItems()
    .then(menuItems => {
      const selectedItem = menuItems.find(item => item.id === itemId);
      const cartItems = document.getElementById('cart-items');

      const li = document.createElement('li');
      li.innerHTML = `
        <span>${selectedItem.name} - $${selectedItem.price.toFixed(2)}</span>
        <button onclick="removeFromCart(${selectedItem.id})">Remove</button>
      `;
      cartItems.appendChild(li);

      updateCartTotal();
    });
}

function removeFromCart(itemId) {
  const cartItems = document.getElementById('cart-items');
  const itemToRemove = document.querySelector(`#cart-items');
};