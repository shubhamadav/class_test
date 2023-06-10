document.addEventListener('DOMContentLoaded', function() 
{
    var form = document.getElementById('addForm');
    var itemsList = document.getElementById('items');
    form.addEventListener('submit', function(e) {
      e.preventDefault(); 
      var input = document.getElementById('item');
      var newItemText = input.value;
      if (newItemText.trim() !== '') 
      {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(newItemText));
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
  });