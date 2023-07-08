
document.addEventListener('DOMContentLoaded', function() {
  
  var reservationForm = document.getElementById('reservation-form');
  var tableSelect = document.getElementById('table');
  var priceInput = document.getElementById('price');
  var dishInput = document.getElementById('dish');

  reservationForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    var selectedTable = tableSelect.value;
    var price = priceInput.value;
    var dish = dishInput.value;
    
    console.log('Table: ' + selectedTable);
    console.log('Price: ' + price);
    console.log('Dish: ' + dish); 

    var menuList = document.getElementById('menu-list');
    var listItem = document.createElement('li');
    listItem.textContent = 'Table: ' + selectedTable + ', Price: ' + price + ', Dish: ' + dish;
    menuList.appendChild(listItem);

    priceInput.value = '';
    dishInput.value = '';
  });
});
