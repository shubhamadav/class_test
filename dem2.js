document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('addForm');
    var itemsList = document.getElementById('items');
    var filterInput = document.getElementById('filter');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      var input = document.getElementById('item');
      var newItemText = input.value;
      var newItemDescription = prompt('Enter item description:'); 
  
      if (newItemText.trim() !== '') {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItemText));
  
        var description = document.createElement('p'); 
        description.className = 'description';
        description.appendChild(document.createTextNode(newItemDescription));
  
        li.appendChild(description);
  
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('X'));
  
        deleteBtn.addEventListener('click', function() {
          li.remove();
        });
  
        li.appendChild(deleteBtn);
        itemsList.appendChild(li);
  
        input.value = '';
      }
    });
  
    filterInput.addEventListener('input', function() {
      var filterValue = filterInput.value.toLowerCase();
      var items = itemsList.getElementsByTagName('li');
  
      Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent.toLowerCase();
        var itemDescription = item.querySelector('.description').textContent.toLowerCase(); 
  
        if (itemName.indexOf(filterValue) > -1 || itemDescription.indexOf(filterValue) > -1) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });